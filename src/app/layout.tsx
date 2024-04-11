import type { Metadata } from 'next'

import MixpanelInitializer from '@/lib/other/MixpanelInitializer'
import TrafficSourceTracker from '@/lib/other/TrafficSourceTracker'
import Scripts from '@/lib/other/Scripts'
import Provider from '@/utils/provider'

import './../styles/styles.scss'

import Header from './_components/Header'
import Footer from './_components/Footer'
import MobileNativeMenu from './_components/MobileNativeMenu'

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

          <MobileNativeMenu />

          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
      <Scripts />
    </html>
  )
}

export default RootLayout
