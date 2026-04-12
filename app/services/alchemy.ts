import { config } from '~/config'
import type { BlogListResponse, BlogPost } from '~/types'
import { MOCK_POSTS } from './mock'

// ─── Types mirroring the Alchemy API response ─────────────────────────────────

interface AlchemyBlogSummary {
  id: string
  title: string
  slug: string
  metaDescription: string | null
  featuredImageUrl: string | null
  status: string
  createdByName: string
  createdAt: string
  updatedAt: string
  publishedAt: string | null
}

interface AlchemyBlogDetail extends AlchemyBlogSummary {
  contentJson: string
  contentHtml: string
}

interface AlchemyListResponse {
  items: AlchemyBlogSummary[]
  totalCount: number
  page: number
  pageSize: number
}

// ─── Mapping ──────────────────────────────────────────────────────────────────

function mapSummary(raw: AlchemyBlogSummary): BlogPost {
  return {
    id: raw.id,
    slug: raw.slug,
    title: raw.title,
    metaDescription: raw.metaDescription ?? undefined,
    publishDate: raw.publishedAt ?? raw.updatedAt,
    author: { name: raw.createdByName || 'Alchemy Forge' },
    tagIds: [],
    tagNames: [],
    featuredImage: raw.featuredImageUrl ?? undefined,
    htmlBody: '',
  }
}

function mapDetail(raw: AlchemyBlogDetail): BlogPost {
  return {
    ...mapSummary(raw),
    htmlBody: raw.contentHtml,
  }
}

// ─── Public API helpers ───────────────────────────────────────────────────────

function apiUrl(path: string): string {
  const base = config.apiBaseUrl.replace(/\/$/, '')
  return `${base}/api/v1/blog/posts${path}`
}

// ─── Exported service functions ───────────────────────────────────────────────

export async function fetchBlogPosts(options: {
  limit?: number
  after?: string
  query?: string
}): Promise<BlogListResponse> {
  if (!config.apiBaseUrl) {
    const filtered = options.query
      ? MOCK_POSTS.filter((p) => p.title.toLowerCase().includes(options.query!.toLowerCase()))
      : MOCK_POSTS
    const limit = options.limit ?? 20
    const startIndex = options.after ? parseInt(options.after, 10) : 0
    const page = filtered.slice(startIndex, startIndex + limit)
    return {
      posts: page,
      nextCursor: startIndex + limit < filtered.length ? String(startIndex + limit) : undefined,
      total: filtered.length,
    }
  }

  const params = new URLSearchParams()
  params.set('pageSize', String(options.limit ?? 20))
  if (options.after) params.set('page', options.after)
  if (options.query) params.set('search', options.query)

  const res = await fetch(apiUrl(`?${params}`))
  if (!res.ok) throw new Error(`Alchemy API error: ${res.status}`)

  const data: AlchemyListResponse = await res.json()

  return {
    posts: data.items.map(mapSummary),
    nextCursor: data.items.length === (options.limit ?? 20) ? String((data.page ?? 1) + 1) : undefined,
    total: data.totalCount,
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!config.apiBaseUrl) {
    return MOCK_POSTS.find((p) => p.slug === slug) ?? null
  }

  const res = await fetch(apiUrl(`/${encodeURIComponent(slug)}`))
  if (res.status === 404) return null
  if (!res.ok) throw new Error(`Alchemy API error: ${res.status}`)

  const data: AlchemyBlogDetail = await res.json()
  return mapDetail(data)
}

export async function fetchRelatedPosts(currentSlug: string, limit = 3): Promise<BlogPost[]> {
  const { posts } = await fetchBlogPosts({ limit: limit + 1 })
  return posts.filter((p) => p.slug !== currentSlug).slice(0, limit)
}
