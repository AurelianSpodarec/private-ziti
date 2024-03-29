// src/lib/utility/mixpanel.ts

import mixpanel from 'mixpanel-browser'

// Function to initialize Mixpanel with token from environment variable
export function initializeMixpanel (): void {
  const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN
  if (token === undefined) {
    console.warn('NEXT_PUBLIC_MIXPANEL_TOKEN is not set in the environment. Mixpanel has not been initialized.')
    return
  }

  mixpanel.init(token, { api_host: 'https://ziti.io/mixpanel', debug: process.env.NODE_ENV !== 'production', track_pageview: true, persistence: 'localStorage' })
}

// Export mixpanel to be used by src/app/components/MixpanelInitializer.tsx
export default mixpanel
