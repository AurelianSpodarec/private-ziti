// src/components/TrafficSourceTracker.tsx

'use client'

import { useEffect } from 'react'
import mixpanel from 'mixpanel-browser'

interface SourceInfo {
  sourceType: string
  Source?: string
  Medium?: string
  Campaign?: string
  Content?: string
  Term?: string
}

const getSourceInfo = (): SourceInfo => {
  const urlParams = new URLSearchParams(window.location.search)
  const utmSource = urlParams.get('utm_source') // editor
  const utmMedium = urlParams.get('utm_medium') // link
  const utmCampaign = urlParams.get('utm_campaign') // designshare
  const utmContent = urlParams.get('utm_content') // header-image
  const utmTerm = urlParams.get('utm_term') // running+shoes
  const referrer = document.referrer

  const sourceType = 'Direct' // Default to direct if no other source is found
  const info: SourceInfo = { sourceType }
  const paidMediums = ['cpc', 'ppc', 'cpm', 'paidsearch']

  if (utmMedium !== null && paidMediums.includes(utmMedium)) {
    info.sourceType = 'Paid'
  } else if (['google', 'bing', 'yahoo', 'baidu', 'yandex', 'duckduckgo'].some(domain => referrer.includes(domain))) {
    info.sourceType = 'Organic Search'
  } else if (['facebook', 'tiktok', 'instagram', 'twitter', 'linkedin', 'warpcast', 'reddit'].some(domain => referrer.includes(domain))) {
    info.sourceType = 'Social Media'
  } else if (referrer !== '') {
    info.sourceType = 'Referral'
  }

  // Only add to the info object if they are present
  if (utmSource !== null) info.Source = utmSource
  if (utmMedium !== null) info.Medium = utmMedium
  if (utmCampaign !== null) info.Campaign = utmCampaign
  if (utmContent !== null) info.Content = utmContent
  if (utmTerm !== null) info.Term = utmTerm

  return info
}

const TrafficSourceTracker = (): null => {
  useEffect(() => {
    // Only track in production environment
    if (process.env.NODE_ENV === 'production') {
      const { sourceType, Source, Medium, Campaign, Content, Term } = getSourceInfo()

      // Dispatch this information to your analytics service
      mixpanel.track_pageview({
        sourceType,
        ...(Source !== null && Source !== '' ? { Source } : {}),
        ...(Medium !== null && Medium !== '' ? { Medium } : {}),
        ...(Campaign !== null && Campaign !== '' ? { Campaign } : {}),
        ...(Content !== null && Content !== '' ? { Content } : {}),
        ...(Term !== null && Term !== '' ? { Term } : {})
      })
    }
  }, [])

  return null
}

export default TrafficSourceTracker
