import type { Metadata } from 'next'

import MixpanelInitializer from '@/lib/other/MixpanelInitializer'
import TrafficSourceTracker from '@/lib/other/TrafficSourceTracker'
import Scripts from '@/lib/other/Scripts'
import Provider from '@/utils/provider'

import './../styles/styles.scss'
import ModeToggle from '@/components/ModeToggle'

export const metadata: Metadata = {
  title: 'Discover, Connect, Invest - Ziti',
  description: 'Explore global property listings, connect with experts, and invest confidently worldwide with Ziti.',
  robots: 'noindex'
}

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <MixpanelInitializer />
      <TrafficSourceTracker />
      <body>
        <Provider>
          <ModeToggle /> 
          {/* TODO: Remove ModeToggle once done testing */}
          {children}
        </Provider>
      </body>
      <Scripts />
    </html>
  )
}

export default RootLayout
