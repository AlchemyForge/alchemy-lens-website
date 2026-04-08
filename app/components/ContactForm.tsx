import { useEffect, useState } from 'react'
import { AnimatedSection } from './AnimatedSection'
import { config } from '../config'

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

interface ContactFormProps {
  title?: string
  subtitle?: string
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm({
  title = 'Forge Your next Move.',
  subtitle = 'Stop managing chaos and start forging results. Join top-tier construction firms leveraging the Alchemy advantage.',
}: ContactFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (!config.recaptchaSiteKey) return
    if (document.getElementById('recaptcha-script')) return
    const script = document.createElement('script')
    script.id = 'recaptcha-script'
    script.src = `https://www.google.com/recaptcha/api.js?render=${config.recaptchaSiteKey}`
    script.async = true
    document.head.appendChild(script)
  }, [])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitState('submitting')
    setErrorMessage(null)

    const form = event.currentTarget
    const honeypot = (form.elements.namedItem('website') as HTMLInputElement).value

    // Silently reject bot submissions that filled the honeypot field
    if (honeypot) {
      setSubmitState('success')
      form.reset()
      return
    }

    let recaptchaToken: string | null = null
    if (config.recaptchaSiteKey) {
      try {
        recaptchaToken = await new Promise<string>((resolve, reject) => {
          window.grecaptcha.ready(async () => {
            try {
              const token = await window.grecaptcha.execute(config.recaptchaSiteKey, { action: 'contact' })
              resolve(token)
            } catch (err) {
              reject(err)
            }
          })
        })
      } catch {
        setSubmitState('error')
        setErrorMessage('Verification failed. Please refresh the page and try again.')
        return
      }
    }

    const data = {
      fullName: (form.elements.namedItem('fullName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value || null,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      recaptchaToken,
    }

    try {
      const response = await fetch(`${config.apiBaseUrl}/api/v1/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitState('success')
        form.reset()
      } else {
        setSubmitState('error')
        setErrorMessage("Something went wrong. Please try again or email us directly.")
      }
    } catch {
      setSubmitState('error')
      setErrorMessage("Unable to reach the server. Please check your connection and try again.")
    }
  }

  return (
    <AnimatedSection
      id="contact"
      className="py-20 px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="lg:pt-4">
          <span className="label-md text-teal-400 font-bold tracking-[0.18em] uppercase block mb-4">Contact</span>
          <h2 className="type-display font-bold leading-[0.95] mb-8">{title}</h2>
          <p className="type-lead text-gray-300">{subtitle}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20"
        >
          {/* Honeypot — hidden from real users, traps bots that auto-fill all fields */}
          <div
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', width: 0, height: 0, overflow: 'hidden', opacity: 0 }}
          >
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          {submitState === 'success' ? (
            <div className="text-center py-8">
              <p className="text-xl font-semibold text-teal-400 mb-2">Message sent!</p>
              <p className="text-gray-300">Thanks for reaching out. We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
                  placeholder="your.email@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
                  placeholder="+64 21 123 4567"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none transition-all duration-200"
                  placeholder="Tell us about your construction project needs..."
                />
              </div>
              {submitState === 'error' && errorMessage && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}
              <button
                type="submit"
                disabled={submitState === 'submitting'}
                className="w-full px-8 py-4 bg-orange-600 hover:bg-orange-700 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl font-semibold ai-glow-hover transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {submitState === 'submitting' ? 'Sending...' : 'Send Message'}
                </span>
                <div className="absolute inset-0 bg-orange-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          )}
        </form>
      </div>
    </AnimatedSection>
  )
}

