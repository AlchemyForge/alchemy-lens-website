import { Link } from 'react-router'
import type { Route } from './+types/$'
import { Navigation } from '~/components/Navigation'
import { Footer } from '~/components/Footer'

export function meta({}: Route.MetaArgs) {
  return [
    { title: '404 — Page Not Found · Alchemy Forge' },
    {
      name: 'description',
      content: 'The page you are looking for does not exist.',
    },
  ]
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-1 relative overflow-hidden bg-gray-900 flex flex-col justify-center">
        {/* Grid overlay */}
        <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

        {/* AF watermark */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block select-none pointer-events-none">
          <div className="text-white/5 font-bold text-[220px] leading-none tracking-tighter">AF</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-32 w-full">
          {/* Coordinate marker */}
          <div className="mb-10 flex items-center gap-4 text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase">
            <span className="w-10 h-px bg-orange-500" />
            <span>Error · Alchemy Forge</span>
          </div>

          {/* 404 number */}
          <div className="flex items-end gap-6 mb-8">
            <span className="font-bold text-[clamp(4rem,18vw,12rem)] leading-none tracking-tighter text-white/10 select-none">
              404
            </span>
            <div className="mb-3 hidden sm:block">
              <div className="h-px w-px bg-orange-500/0" />
              <span className="text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase">
                Not Found
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="type-display font-bold text-white uppercase tracking-tight mb-6 max-w-2xl">
            Page <span className="text-orange-400">Transmuted.</span>
          </h1>
          <p className="type-lead text-white/60 max-w-xl mb-12">
            This page no longer exists or has been moved to a different location.
            It may have been alchemised into something else entirely.
          </p>

          {/* Ruled divider */}
          <div className="h-px w-16 bg-orange-500 mb-12" />

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-0">
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 font-bold text-sm uppercase tracking-widest transition-colors"
            >
              Return Home
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border-2 border-white/20 hover:border-orange-400 text-white/70 hover:text-white px-10 py-4 font-bold text-sm uppercase tracking-widest transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] block mb-5">
              You might be looking for
            </span>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                { to: '/about', label: 'About' },
                { to: '/blog', label: 'Insights' },
                { to: '/#solutions', label: 'Solutions' },
                { to: '/#pricing', label: 'Pricing' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-white/40 hover:text-orange-400 text-sm font-bold uppercase tracking-widest transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

