import type { Metadata } from 'next'

import MixpanelInitializer from '@/lib/other/MixpanelInitializer'
import TrafficSourceTracker from '@/lib/other/TrafficSourceTracker'
import Scripts from '@/lib/other/Scripts'

import Provider from '@/utils/provider'
import { poppins, sourceSerif } from '@/utils/fonts'

import './../styles/styles.scss'

import Header from './_components/Header'
import Footer from './_components/Footer'

// import MobileNativeMenu from './_components/MobileNativeMenu'

export const metadata: Metadata = {
  metadataBase: new URL('https://ziti.io'),
  title: 'Discover, Connect, Invest - Ziti',
  description: 'Explore global property listings, connect with experts, and invest confidently worldwide with Ziti.',
  robots: {
    index: false, // Disallow indexing of all pages
    follow: false, // Do not follow links from this page
    nocache: true, // Instructs to not cache the page
    googleBot: {
      index: false, // Specifically tell Googlebot not to index
      follow: false, // Specifically tell Googlebot not to follow links
      noimageindex: true, // Prevent Googlebot from indexing images
      'max-video-preview': -1, // No video previews
      'max-image-preview': 'none', // No image previews
      'max-snippet': -1 // No snippets
    }
  }
}

function RootLayout ({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <MixpanelInitializer />
      <TrafficSourceTracker />
      <body className={`${poppins.variable} ${sourceSerif.variable}`}>
        <Provider>
          {/* TODO: <MobileNativeMenu /> */}
          <Header />
          <main>
            {children}
          </main>
          {/* <Footer /> */}
        </Provider>
      </body>
      <Scripts />
    </html>
  )
}

export default RootLayout
