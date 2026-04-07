const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? ''
const gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID ?? ''

if (!apiBaseUrl) {
  console.warn('[config] VITE_API_BASE_URL is not set')
}

export const config = {
  apiBaseUrl,
  gaTrackingId,
} as const
