import { config } from "~/config"
import { useState } from "react"

type SubscribeState = 'idle' | 'submitting' | 'success' | 'error'

function SubscribeForm() {
    const [email, setEmail] = useState('')
    const [state, setState] = useState<SubscribeState>('idle')

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!email.trim()) return
        setState('submitting')

        try {
            const res = await fetch(`${config.apiBaseUrl}/api/v1/subscribe`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.trim(), source: 'blog' }),
            })
            setState(res.ok ? 'success' : 'error')
            if (res.ok) setEmail('')
        } catch {
            setState('error')
        }
    }

    if (state === 'success') {
        return (
            <p className="text-[oklch(0.556_0.077_189)] font-bold text-sm uppercase tracking-widest">
                You&apos;re subscribed. Thanks for joining!
            </p>
        )
    }

    return (
        <div>
            <form className="flex flex-col sm:flex-row gap-0" onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => { setState('idle'); setEmail(e.target.value) }}
                    placeholder="Enter your email"
                    aria-label="Email address"
                    required
                    disabled={state === 'submitting'}
                    className="bg-white border-2 border-gray-200 border-r-0 px-6 py-4 text-sm font-medium tracking-wide focus:outline-none focus:border-[oklch(0.556_0.077_189)] transition w-full md:w-96 text-gray-900 placeholder:text-gray-400 disabled:opacity-60"
                />
                <button
                    type="submit"
                    disabled={state === 'submitting'}
                    className="bg-[oklch(0.556_0.077_189)] hover:bg-[oklch(0.48_0.077_189)] text-white px-10 py-4 font-bold text-sm uppercase tracking-widest transition-colors active:scale-95 whitespace-nowrap disabled:opacity-60"
                >
                    {state === 'submitting' ? '...' : 'Subscribe'}
                </button>
            </form>
            {state === 'error' && (
                <p className="mt-3 text-red-600 text-sm font-medium">
                    Something went wrong. Please try again.
                </p>
            )}
        </div>
    )
}

export const Subscribe = () => {
    return (
        <section className="py-20 border-t border-gray-100 bg-gray-50 relative overflow-hidden" >
            <div className="absolute right-0 top-0 w-1/3 h-full bg-[oklch(0.556_0.077_189)]/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
                <span className="text-[oklch(0.556_0.077_189)] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
                    Stay Connected
                </span>
                <h3 className="type-section font-bold text-gray-900 uppercase mb-8 max-w-xl leading-tight">
                    Keep up to date with our latest technical insights.
                </h3>
                <SubscribeForm />
            </div>
        </section >)
}