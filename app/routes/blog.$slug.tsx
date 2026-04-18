import type { Route } from './+types/blog.$slug'
import { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router'
import { Navigation } from '~/components/Navigation'
import { Footer } from '~/components/Footer'
import { fetchBlogPostBySlug, fetchRelatedPosts } from '~/services/alchemy'
import type { BlogPost } from '~/types'
import { Subscribe } from '~/components/Subscibe'

export async function loader({ params }: Route.LoaderArgs) {
  const post = await fetchBlogPostBySlug(params.slug!)
  return { post }
}

export async function clientLoader({ params, request }: Route.ClientLoaderArgs) {
  const url = new URL(request.url)
  const previewToken = url.searchParams.get('preview') ?? undefined
  const post = await fetchBlogPostBySlug(params.slug!, previewToken)
  return { post }
}

const SITE_ORIGIN = 'https://www.alchemy-forge.com'

function absoluteUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  return `${SITE_ORIGIN}${url.startsWith('/') ? '' : '/'}${url}`
}

export function meta({ data, location }: Route.MetaArgs) {
  const post = data?.post
  if (!post) return [{ title: 'Blog - Alchemy Forge' }]

  const description = post.metaDescription ?? post.subtitle ?? 'Insights, updates, and industry thinking from the Alchemy Forge team.'
  const tags: Array<Record<string, string>> = [
    { title: `${post.title} - Alchemy Forge` },
    { name: 'description', content: description },
    { property: 'og:type', content: 'article' },
    { property: 'og:site_name', content: 'Alchemy Forge' },
    { property: 'og:url', content: `${SITE_ORIGIN}${location.pathname}` },
    { property: 'og:title', content: post.title },
    { property: 'og:description', content: description },
    { name: 'twitter:card', content: post.featuredImage ? 'summary_large_image' : 'summary' },
    { name: 'twitter:title', content: post.title },
    { name: 'twitter:description', content: description },
  ]
  if (post.featuredImage) {
    const imageUrl = absoluteUrl(post.featuredImage)
    tags.push({ property: 'og:image', content: imageUrl })
    tags.push({ name: 'twitter:image', content: imageUrl })
  }
  return tags
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function ArticleSkeleton() {
  return (
    <div className="animate-pulse space-y-5">
      <div className="h-3 bg-gray-100 w-24" />
      <div className="h-8 bg-gray-100 w-3/4" />
      <div className="h-5 bg-gray-100 w-1/2" />
      <div className="h-px bg-gray-100 w-full my-6" />
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className={`h-4 bg-gray-100 ${i % 4 === 3 ? 'w-2/3' : 'w-full'}`} />
      ))}
    </div>
  )
}

function SidebarCTA() {
  return (
    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">Live Platform</span>
      </div>
      <h3 className="font-bold text-xl uppercase mb-3 leading-tight">See Alchemy Lens in action</h3>
      <p className="text-white/80 text-sm mb-6 leading-relaxed">
        Turn your project signals into early, explainable risk calls. Book a personalised demo.
      </p>
      <a
        href="/#contact"
        className="block w-full text-center bg-white text-orange-600 font-bold py-3 px-4 uppercase tracking-widest text-sm hover:bg-orange-50 transition-colors"
      >
        Request a Demo
      </a>
    </div>
  )
}

function RelatedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group flex gap-4 items-start">
      {post.featuredImage ? (
        <div className="w-20 h-16 flex-shrink-0 overflow-hidden bg-gray-100">
          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt ?? post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-20 h-16 flex-shrink-0 bg-gradient-to-br from-orange-50 to-slate-100 tech-grid" />
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-2 leading-snug uppercase">
          {post.title}
        </p>
        <time dateTime={post.publishDate} className="text-xs text-gray-400 mt-1 block">
          {formatDate(post.publishDate)}
        </time>
      </div>
    </Link>
  )
}

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>()
  const [searchParams] = useSearchParams()
  const previewToken = searchParams.get('preview') ?? undefined

  const [post, setPost] = useState<BlogPost | null>(null)
  const [related, setRelated] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return
    let cancelled = false

    setLoading(true)
    setNotFound(false)
    setError(null)

    fetchBlogPostBySlug(slug, previewToken)
      .then(async (result) => {
        if (cancelled) return
        if (!result) {
          setNotFound(true)
          setLoading(false)
          return
        }
        setPost(result)
        const relatedPosts = await fetchRelatedPosts(slug, 3).catch(() => [])
        if (!cancelled) {
          setRelated(relatedPosts)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load article')
          setLoading(false)
        }
      })

    return () => { cancelled = true }
  }, [slug])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Article header band */}
      {!loading && post && (
        <div className="mt-16 relative overflow-hidden border-b border-gray-100">
          <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/20 to-slate-50/30 pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pt-16 pb-12">
            <div className="flex items-center gap-3 text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              <span className="w-8 h-px bg-orange-500" />
              <span>Alchemy Forge Insights</span>
            </div>

            <h1 className="type-display font-bold text-gray-900 uppercase tracking-tight max-w-3xl">
              {post.title}
            </h1>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-8 md:px-16 pt-10 pb-24">

        {/* Not found */}
        {notFound && (
          <div className="text-center py-20">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">404 — Not Found</p>
            <h1 className="type-section font-bold text-gray-900 uppercase mb-6">Article not found</h1>
            <Link to="/blog" className="text-orange-500 font-bold text-sm uppercase tracking-widest hover:underline">
              ← Back to Insights
            </Link>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">{error}</p>
            <button onClick={() => window.location.reload()} className="text-orange-500 font-bold text-sm uppercase tracking-widest hover:underline">
              Retry
            </button>
          </div>
        )}

        {/* Content */}
        {!notFound && !error && (
          <div className="lg:grid lg:grid-cols-3 lg:gap-12 xl:gap-16">
            {/* Main article — 2/3 */}
            <article className="lg:col-span-2">
              {post && post.tagNames.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {post.tagNames.map((tag, i) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${i === 0
                          ? 'bg-orange-500 text-white'
                          : 'bg-orange-50 text-orange-600 border border-orange-100'
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {loading ? (
                <ArticleSkeleton />
              ) : post ? (
                <>
                  {/* Subtitle */}
                  {post.subtitle && (
                    <p className="type-lead text-gray-500 mb-6">{post.subtitle}</p>
                  )}

                  {/* Featured image */}
                  {post.featuredImage && (
                    <div className="w-full overflow-hidden bg-gray-100 mb-10">
                      <img
                        src={post.featuredImage}
                        alt={post.featuredImageAlt ?? post.title}
                        className="w-full h-auto object-cover"
                        decoding="async"
                      />
                    </div>
                  )}

                  {/* Meta divider */}
                  <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-t-2 border-b border-gray-100 pt-6">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">Alchemy Forge Team</p>
                        {post.author.bio && (
                          <p className="text-xs text-gray-400">{post.author.bio}</p>
                        )}
                      </div>
                    </div>
                    <div className="h-8 w-px bg-gray-200" />
                    <time dateTime={post.publishDate} className="text-sm text-gray-400 font-medium">
                      {formatDate(post.publishDate)}
                    </time>
                  </div>

                  {/* Body */}
                  <div
                    className="prose prose-lg prose-gray max-w-none
                      prose-headings:font-bold prose-headings:text-gray-900 prose-headings:uppercase prose-headings:tracking-tight
                      prose-p:text-gray-600 prose-p:leading-relaxed
                      prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                      prose-strong:text-gray-900
                      prose-img:shadow-md
                      prose-blockquote:border-l-4 prose-blockquote:border-orange-400 prose-blockquote:text-gray-600 prose-blockquote:not-italic
                      prose-code:text-orange-600 prose-code:bg-orange-50 prose-code:px-1
                      prose-pre:bg-gray-900 prose-pre:rounded-none"
                    dangerouslySetInnerHTML={{ __html: post.htmlBody }}
                  />
                </>
              ) : null}
            </article>

            {/* Sidebar — 1/3 */}
            <aside className="mt-12 lg:mt-0 space-y-6 lg:sticky lg:top-24 self-start">
              <SidebarCTA />

              {related.length > 0 && (
                <div className="border border-gray-200 p-6">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-5">
                    <span className="w-4 h-px bg-gray-300" />
                    More Articles
                  </div>
                  <div className="space-y-5">
                    {related.map((p) => (
                      <RelatedPostCard key={p.id} post={p} />
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletter panel */}
              <div className="border border-gray-200 p-6">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
                  <span className="w-4 h-px bg-gray-300" />
                  Stay Updated
                </div>
                <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                  Get the latest articles and product updates delivered to your inbox.
                </p>
                <a
                  href="/#contact"
                  className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-4 uppercase tracking-widest text-sm transition-colors"
                >
                  Get Updates
                </a>
              </div>
            </aside>
          </div>
        )}
      </div>


      <Subscribe />

      <Footer />
    </div>
  )
}
