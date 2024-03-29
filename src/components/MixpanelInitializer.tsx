// src/components/MixpanelInitializer.tsx

'use client'

import { useEffect } from 'react'
import mixpanel from 'mixpanel-browser'

const MixpanelInitializer = (): null => {
  useEffect(() => {
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
      track_pageview: false,
      persistence: 'localStorage'
    })

    // Additional Mixpanel configuration or event tracking can be added here
  }, [])

  return null // This component does not render anything
}

export default MixpanelInitializer
