import { config } from '~/config'
import type { BlogListResponse, BlogPost } from '~/types'
import { MOCK_POSTS } from './mock'

const HUBSPOT_API = 'https://api.hubapi.com'

function applyMockFilters(posts: BlogPost[], query?: string): BlogPost[] {
  if (!query) return posts
  const q = query.toLowerCase()
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.subtitle?.toLowerCase().includes(q) ||
      p.tagNames.some((t) => t.toLowerCase().includes(q)),
  )
}

function getMockPage(posts: BlogPost[], limit: number, after?: string): BlogListResponse {
  const startIndex = after ? parseInt(after, 10) : 0
  const page = posts.slice(startIndex, startIndex + limit)
  const nextStart = startIndex + limit
  return {
    posts: page,
    nextCursor: nextStart < posts.length ? String(nextStart) : undefined,
    total: posts.length,
  }
}

// ─── End mock data ───────────────────────────────────────────────────────────

interface HubSpotBlogPost {
  id: string
  slug: string
  title: string
  metaDescription?: string
  postSummary?: string
  htmlBody: string
  publishDate: string
  authorName?: string
  blogAuthor?: {
    fullName?: string
    bio?: string
    avatar?: string
  }
  tagIds?: string[]
  featuredImage?: string
  featuredImageAltText?: string
  useFeaturedImage?: boolean
}

interface HubSpotTagResult {
  id: string
  name: string
}

interface HubSpotListResponse<T> {
  results: T[]
  paging?: {
    next?: {
      after: string
    }
  }
  total?: number
}

function getAuthHeader(): HeadersInit {
  return { Authorization: `Bearer ${config.hubspotAccessToken}` }
}

async function fetchTagNames(tagIds: string[]): Promise<string[]> {
  if (!tagIds.length) return []
  try {
    const fetches = tagIds.map((id) =>
      fetch(`${HUBSPOT_API}/cms/v3/blogs/tags/${id}`, { headers: getAuthHeader() })
        .then((r) => (r.ok ? (r.json() as Promise<HubSpotTagResult>) : null))
        .catch(() => null),
    )
    const results = await Promise.all(fetches)
    return results.filter(Boolean).map((t) => t!.name)
  } catch {
    return []
  }
}

async function mapPost(raw: HubSpotBlogPost, includeTags = false): Promise<BlogPost> {
  const tagNames = includeTags ? await fetchTagNames(raw.tagIds ?? []) : []
  return {
    id: raw.id,
    slug: raw.slug,
    title: raw.title,
    subtitle: raw.postSummary || undefined,
    metaDescription: raw.metaDescription || undefined,
    publishDate: raw.publishDate,
    author: {
      name: raw.blogAuthor?.fullName ?? raw.authorName ?? 'Alchemy Forge',
      bio: raw.blogAuthor?.bio || undefined,
      avatar: raw.blogAuthor?.avatar || undefined,
    },
    tagIds: raw.tagIds ?? [],
    tagNames,
    featuredImage: raw.useFeaturedImage && raw.featuredImage ? raw.featuredImage : undefined,
    featuredImageAlt: raw.featuredImageAltText || undefined,
    htmlBody: raw.htmlBody ?? '',
  }
}

export async function fetchBlogPosts(options: {
  limit?: number
  after?: string
  query?: string
}): Promise<BlogListResponse> {
  if (!config.hubspotAccessToken) {
    const filtered = applyMockFilters(MOCK_POSTS, options.query)
    return getMockPage(filtered, options.limit ?? 20, options.after)
  }

  const params = new URLSearchParams()
  params.set('limit', String(options.limit ?? 20))
  params.set('sort', '-publishDate')
  params.set('archived', 'false')
  if (options.after) params.set('after', options.after)
  if (options.query) params.set('name__icontains', options.query)
  if (config.hubspotBlogId) params.set('contentGroupId', config.hubspotBlogId)

  const res = await fetch(`${HUBSPOT_API}/cms/v3/blogs/posts?${params}`, {
    headers: getAuthHeader(),
  })

  if (!res.ok) {
    throw new Error(`HubSpot API error: ${res.status}`)
  }

  const data: HubSpotListResponse<HubSpotBlogPost> = await res.json()
  const posts = await Promise.all(data.results.map((p) => mapPost(p, false)))

  return {
    posts,
    nextCursor: data.paging?.next?.after,
    total: data.total ?? data.results.length,
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!config.hubspotAccessToken) {
    return MOCK_POSTS.find((p) => p.slug === slug) ?? null
  }

  const params = new URLSearchParams({ slug, limit: '1', archived: 'false' })
  if (config.hubspotBlogId) params.set('contentGroupId', config.hubspotBlogId)

  const res = await fetch(`${HUBSPOT_API}/cms/v3/blogs/posts?${params}`, {
    headers: getAuthHeader(),
  })

  if (!res.ok) return null

  const data: HubSpotListResponse<HubSpotBlogPost> = await res.json()
  if (!data.results.length) return null

  return mapPost(data.results[0], true)
}

export async function fetchRelatedPosts(currentSlug: string, limit = 3): Promise<BlogPost[]> {
  if (!config.hubspotAccessToken) {
    return MOCK_POSTS.filter((p) => p.slug !== currentSlug).slice(0, limit)
  }

  const data = await fetchBlogPosts({ limit: limit + 1 })
  return data.posts.filter((p) => p.slug !== currentSlug).slice(0, limit)
}
