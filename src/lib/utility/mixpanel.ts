// src/lib/utility/mixpanel.ts

import mixpanel from 'mixpanel-browser'

export function initializeMixpanel (): void {
  // Only initialize Mixpanel if in production environment
  if (process.env.NODE_ENV !== 'production') {
    console.log('Mixpanel initialization skipped outside of production environment.')
    return
  }

  const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN
  if (token === undefined) {
    console.warn('NEXT_PUBLIC_MIXPANEL_TOKEN is not set in the environment. Mixpanel has not been initialized.')
    return
  }

  mixpanel.init(token, {
    api_host: 'https://ziti.io/mixpanel',
    debug: false,
    track_pageview: true,
    persistence: 'localStorage'
  })
}

export default mixpanel
