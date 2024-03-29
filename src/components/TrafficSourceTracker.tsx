// src/components/TrafficSourceTracker.tsx

'use client'

import { useEffect } from 'react'
import mixpanel from 'mixpanel-browser'

const getSourceInfo = (): {
  sourceType: string
  campaign: string
} => {
  const urlParams = new URLSearchParams(window.location.search)
  const utmSource = urlParams.get('utm_source')
  const utmMedium = urlParams.get('utm_medium')
  const utmCampaign = urlParams.get('utm_campaign')
  const referrer = document.referrer

  let sourceType = 'Direct' // Default to direct if no other source is found
  const campaign = utmCampaign ?? ''

  if (utmSource !== null && utmMedium !== null) {
    sourceType = `${utmMedium} - ${utmSource}` // Combining Medium and Source for more detailed tracking
  } else if (referrer.includes('google') || referrer.includes('bing') || referrer.includes('yahoo') || referrer.includes('baidu') || referrer.includes('yandex') || referrer.includes('duckduckgo')) {
    sourceType = 'Organic Search'
  } else if (referrer.includes('facebook') || referrer.includes('tiktok') || referrer.includes('instagram') || referrer.includes('twitter') || referrer.includes('linkedin') || referrer.includes('warpcast')) {
    sourceType = 'Social Media'
  } else if (referrer !== '') {
    sourceType = 'Referral'
  }

  return { sourceType, campaign }
}

const TrafficSourceTracker = (): null => {
  useEffect(() => {
    // Only track in production environment
    if (process.env.NODE_ENV === 'production') {
      const { sourceType, campaign } = getSourceInfo()
      console.log('User Source Type:', sourceType, 'Campaign:', campaign)

      // Dispatch this information to your analytics service
      mixpanel.track_pageview({ sourceType, campaign })
    }
  }, [])

  return null // This component does not render anything
}

export default TrafficSourceTracker
