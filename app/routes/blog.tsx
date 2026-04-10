import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router'
import { Navigation } from '~/components/Navigation'
import { Footer } from '~/components/Footer'
import { fetchBlogPosts } from '~/services/hubspot'
import type { BlogListResponse, BlogPost } from '~/types'
import insightsImage from '~/assets/insights.webp'

export function meta() {
  return [
    { title: 'Insights & Ideas - Alchemy Forge' },
    {
      name: 'description',
      content: 'Insights, updates, and industry thinking from the Alchemy Forge team.',
    },
  ]
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// ─── Digest dummy data ───────────────────────────────────────────────────────
const DIGEST_ITEMS = [
  {
    id: 'd1',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
    status: 'Active',
    statusPulse: true,
    ref: 'AF-AI-Q2',
    title: 'AI Risk Engine — Q2 Update',
    body: 'New signal detection models now processing RFI latency, consent clustering, and subcontractor programme drift simultaneously with 94% precision.',
  },
  {
    id: 'd2',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    ),
    status: 'Operational',
    statusPulse: false,
    ref: 'AF-XR-200',
    title: 'Xero Integration v2.0',
    body: 'Enhanced real-time cost code mapping now supports multi-entity Xero organisations. Variance alerts fire within 90 seconds of invoice approval.',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

function TagBadge({ tag, primary = false }: { tag: string; primary?: boolean }) {
  return (
    <span
      className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${
        primary
          ? 'bg-orange-500 text-white'
          : 'bg-orange-50 text-orange-600 border border-orange-100'
      }`}
    >
      {tag}
    </span>
  )
}

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <article className="md:col-span-8 group relative bg-white border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/5">
      {post.featuredImage ? (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={post.featuredImage}
            alt={post.featuredImageAlt ?? post.title}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] bg-gradient-to-br from-orange-50 to-slate-50 tech-grid" />
      )}
      <div className="p-8 md:p-12">
        {post.tagNames.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tagNames.map((tag, i) => (
              <TagBadge key={tag} tag={tag} primary={i === 0} />
            ))}
          </div>
        )}
        <Link to={`/blog/${post.slug}`}>
          <h2 className="type-section font-bold text-gray-900 mb-4 uppercase leading-none group-hover:text-orange-500 transition-colors">
            {post.title}
          </h2>
        </Link>
        {post.subtitle && (
          <p className="type-lead text-gray-500 mb-8 max-w-2xl">{post.subtitle}</p>
        )}
        <div className="flex items-center justify-between">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 uppercase tracking-widest group/link"
          >
            Read Full Article
            <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <div className="flex items-center gap-1.5">           
              <span className="font-medium text-gray-600">{post.author.name}</span>
            </div>
            <span className="text-gray-200">·</span>
            <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
          </div>
        </div>
      </div>
    </article>
  )
}

function SecondaryPost({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white border border-gray-200 p-6 group transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5">
      {post.featuredImage ? (
        <div className="aspect-video mb-6 overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            src={post.featuredImage}
            alt={post.featuredImageAlt ?? post.title}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div className="aspect-video mb-6 bg-gradient-to-br from-orange-50 to-slate-50 tech-grid" />
      )}
      {post.tagNames[0] && (
        <div className="mb-4">
          <TagBadge tag={post.tagNames[0]} />
        </div>
      )}
      <Link to={`/blog/${post.slug}`}>
        <h3 className="font-bold text-gray-900 uppercase text-lg mb-3 leading-snug group-hover:text-orange-500 transition-colors line-clamp-2">
          {post.title}
        </h3>
      </Link>
      {post.subtitle && (
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{post.subtitle}</p>
      )}
      <div className="flex items-center gap-2 text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100">
    
        <span className="font-medium text-gray-500">{post.author.name}</span>
        <span>·</span>
        <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
      </div>
    </article>
  )
}

function GridPost({ post }: { post: BlogPost }) {
  return (
    <article className="group bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 flex flex-col">
      {post.featuredImage ? (
        <div className="aspect-video overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt ?? post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-orange-50 to-slate-50 tech-grid" />
      )}
      <div className="p-6 flex flex-col flex-1">
        {post.tagNames[0] && (
          <div className="mb-3">
            <TagBadge tag={post.tagNames[0]} />
          </div>
        )}
        <Link to={`/blog/${post.slug}`}>
          <h3 className="font-bold text-gray-900 uppercase leading-snug mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        {post.subtitle && (
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1 mb-4">{post.subtitle}</p>
        )}
        <div className="flex items-center gap-2 text-xs text-gray-400 pt-4 border-t border-gray-100 mt-auto">
          
          <span className="font-medium text-gray-500">{post.author.name}</span>
          <span>·</span>
          <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
        </div>
      </div>
    </article>
  )
}

function LoadingSkeleton() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
        <div className="md:col-span-8 bg-white border border-gray-200 overflow-hidden animate-pulse">
          <div className="aspect-[16/9] bg-gray-100" />
          <div className="p-10 space-y-4">
            <div className="h-3 bg-gray-100 w-24" />
            <div className="h-7 bg-gray-100 w-3/4" />
            <div className="h-5 bg-gray-100 w-full" />
            <div className="h-5 bg-gray-100 w-2/3" />
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col gap-6">
          {[0, 1].map((i) => (
            <div key={i} className="bg-white border border-gray-200 p-6 animate-pulse">
              <div className="aspect-video bg-gray-100 mb-4" />
              <div className="h-3 bg-gray-100 w-20 mb-3" />
              <div className="h-5 bg-gray-100 w-5/6 mb-2" />
              <div className="h-4 bg-gray-100 w-full" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default function Blog() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const query = searchParams.get('q') ?? ''
  const after = searchParams.get('after') ?? undefined

  const [inputValue, setInputValue] = useState(query)
  const [data, setData] = useState<BlogListResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [cursorStack, setCursorStack] = useState<string[]>([])
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetchBlogPosts({ limit: 20, after, query: query || undefined })
      .then((res) => {
        if (!cancelled) {
          setData(res)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load posts')
          setLoading(false)
        }
      })

    return () => { cancelled = true }
  }, [after, query])

  const handleSearchChange = (value: string) => {
    setInputValue(value)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams()
      if (value) params.set('q', value)
      navigate(`/blog?${params}`, { replace: true })
      setCursorStack([])
    }, 400)
  }

  const handleNextPage = () => {
    if (!data?.nextCursor) return
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    params.set('after', data.nextCursor)
    setCursorStack((prev) => [...prev, after ?? ''])
    navigate(`/blog?${params}`)
  }

  const handlePrevPage = () => {
    const prev = [...cursorStack]
    const prevCursor = prev.pop()
    setCursorStack(prev)
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (prevCursor) params.set('after', prevCursor)
    navigate(`/blog?${params}`)
  }

  const isFirstPage = cursorStack.length === 0 && !after
  const hasNextPage = Boolean(data?.nextCursor)
  const hasPrevPage = !isFirstPage || Boolean(after)

  const [featured, second, third, ...rest] = data?.posts ?? []

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <header className="relative min-h-[480px] flex flex-col justify-end px-8 md:px-16 pb-16 overflow-hidden border-b border-gray-100 pt-16">
        <img
          src={insightsImage}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gray-900/65 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Coordinate marker */}
          <div className="mb-6 flex items-center gap-4 text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase">
            <span className="w-10 h-px bg-orange-500" />
            <span>Intelligence Platform · Alchemy Forge</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="type-display font-bold text-white uppercase tracking-tight mb-4">
                Insights <span className="text-orange-400">&amp;</span> Ideas
              </h1>
              <p className="type-lead text-white/70 max-w-2xl">
                Perspectives on construction technology, AI, and project delivery.
              </p>
            </div>
            {/* Search */}
              <div className="relative w-full md:w-80 flex-shrink-0">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="search"
                value={inputValue}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search articles…"
                aria-label="Search articles"
                className="w-full pl-10 pr-4 py-3 border-2 border-white/20 bg-white/10 backdrop-blur-sm focus:outline-none focus:border-orange-400 text-sm text-white placeholder:text-white/50 transition font-medium tracking-wide"
              />
            </div>
          </div>
        </div>
        {/* Decorative */}
        <div className="absolute right-8 top-20 hidden lg:block select-none pointer-events-none">
          <div className="text-white/10 font-bold text-[140px] leading-none tracking-tighter">AF</div>
        </div>
      </header>

      {/* ── Articles grid ─────────────────────────────────────── */}
      <section className="py-20 px-8 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {error && (
            <div className="text-center py-20">
              <p className="text-gray-500 mb-4">{error}</p>
              <button onClick={() => window.location.reload()} className="text-orange-500 font-medium hover:underline text-sm uppercase tracking-widest font-bold">
                Retry
              </button>
            </div>
          )}

          {loading && !error && <LoadingSkeleton />}

          {!loading && !error && data && (
            <>
              {data.posts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-400 text-lg uppercase tracking-wide font-medium">
                    {query ? `No articles found for "${query}"` : 'No articles published yet.'}
                  </p>
                  {query && (
                    <button
                      onClick={() => handleSearchChange('')}
                      className="mt-6 text-orange-500 font-bold text-sm uppercase tracking-widest hover:underline"
                    >
                      Clear search
                    </button>
                  )}
                </div>
              ) : (
                <>
                  {/* Featured row: large + 2 secondary */}
                  {featured && (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                      <FeaturedPost post={featured} />
                      {(second || third) && (
                        <div className="md:col-span-4 flex flex-col gap-6">
                          {second && <SecondaryPost post={second} />}
                          {third && <SecondaryPost post={third} />}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Remaining grid */}
                  {rest.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                      {rest.map((post) => (
                        <GridPost key={post.id} post={post} />
                      ))}
                    </div>
                  )}

                  {/* Pagination */}
                  {(hasPrevPage || hasNextPage) && (
                    <div className="flex items-center justify-center gap-4 mt-14">
                      <button
                        onClick={handlePrevPage}
                        disabled={!hasPrevPage}
                        className="px-6 py-2.5 border-2 border-gray-200 text-sm font-bold uppercase tracking-widest text-gray-600 hover:border-orange-400 hover:text-orange-500 disabled:opacity-30 disabled:cursor-not-allowed transition"
                      >
                        ← Previous
                      </button>
                      <button
                        onClick={handleNextPage}
                        disabled={!hasNextPage}
                        className="px-6 py-2.5 border-2 border-gray-200 text-sm font-bold uppercase tracking-widest text-gray-600 hover:border-orange-400 hover:text-orange-500 disabled:opacity-30 disabled:cursor-not-allowed transition"
                      >
                        Next →
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Monthly Technical Digest ──────────────────────────── */}
      <section className="py-24 px-8 md:px-16 relative overflow-hidden bg-white">
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 text-orange-500 mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <span className="text-xs font-bold tracking-[0.3em] uppercase">Platform Updates</span>
              </div>
              <h2 className="type-section font-bold text-gray-900 uppercase tracking-tight mb-6">
                Monthly<br />Technical<br />Digest.
              </h2>
              <div className="h-1 w-16 bg-orange-500 mb-8" />
              <p className="type-small text-gray-500 leading-relaxed">
                What's changed, what's shipping, and what's coming next on the Alchemy Lens platform.
              </p>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DIGEST_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/70 backdrop-blur-xl p-8 border border-orange-500/20 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 text-orange-500">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-2 text-orange-500 font-bold text-[10px] uppercase tracking-widest mb-4">
                    <span className={`w-2 h-2 rounded-full bg-orange-500 ${item.statusPulse ? 'animate-pulse' : ''}`} />
                    Status: {item.status}
                  </div>
                  <h4 className="font-bold text-gray-900 text-base uppercase mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                  <div className="mt-5 border-t border-orange-500/10 pt-4 flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Ref: {item.ref}</span>
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Subscription ──────────────────────────────────────── */}
      <section className="py-20 border-t border-gray-100 bg-gray-50 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[oklch(0.556_0.077_189)]/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
          <span className="text-[oklch(0.556_0.077_189)] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
            Stay Connected
          </span>
          <h3 className="type-section font-bold text-gray-900 uppercase mb-8 max-w-xl leading-tight">
            Keep up to date with our latest technical insights.
          </h3>
          <form
            className="flex flex-col sm:flex-row gap-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="bg-white border-2 border-gray-200 border-r-0 px-6 py-4 text-sm font-medium tracking-wide focus:outline-none focus:border-[oklch(0.556_0.077_189)] transition w-full md:w-96 text-gray-900 placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="bg-[oklch(0.556_0.077_189)] hover:bg-[oklch(0.48_0.077_189)] text-white px-10 py-4 font-bold text-sm uppercase tracking-widest transition-colors active:scale-95 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
