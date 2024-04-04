import type { Metadata } from 'next'

import MixpanelInitializer from '@/components/MixpanelInitializer'
import TrafficSourceTracker from '@/components/TrafficSourceTracker'
import Scripts from '@/components/Scripts'

import './../styles/styles.scss'

export const metadata: Metadata = {
  title: 'Discover, Connect, Invest - Ziti',
  description: 'Explore global property listings, connect with experts, and invest confidently worldwide with Ziti.',
  robots: 'noindex'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <MixpanelInitializer />
      <TrafficSourceTracker />
      <body>{children}</body>
      <Scripts />
    </html>
  )
}
