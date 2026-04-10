const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? ''
const gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID ?? ''
const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY ?? ''
const hubspotAccessToken = import.meta.env.VITE_HUBSPOT_ACCESS_TOKEN ?? ''
const hubspotBlogId = import.meta.env.VITE_HUBSPOT_BLOG_ID ?? ''

if (!apiBaseUrl) {
  console.warn('[config] VITE_API_BASE_URL is not set')
}

export const config = {
  apiBaseUrl,
  gaTrackingId,
  recaptchaSiteKey,
  hubspotAccessToken,
  hubspotBlogId,
} as const
