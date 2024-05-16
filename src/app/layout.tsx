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

const isActualProduction = process.env.NEXT_PUBLIC_IS_ACTUAL_PRODUCTION === 'true'

console.log('Is actual production? ', isActualProduction)

export const metadata: Metadata = isActualProduction
  ? { // production metadata
      metadataBase: new URL('https://ziti.io'),
      title: 'Discover, Connect, Invest - Ziti',
      description: 'Explore global property listings, connect with experts, and invest confidently worldwide with Ziti.',
      robots: {
        index: true, // Allow indexing
        follow: true, // Follow links
        nocache: true, // Do not cache the page
        googleBot: {
          index: true, // Specifically tell Googlebot to index
          follow: true, // Specifically tell Googlebot to follow links
          noimageindex: true, // Prevent Googlebot from indexing images
          'max-video-preview': -1, // No video previews
          'max-image-preview': 'none' // No image previews
        }
      }
    }
  : { // non-production metadata
      // robots: {
      //   index: false,
      //   follow: false,
      //   nocache: true
      // }
      metadataBase: new URL('https://ziti.io'),
      title: 'Discover, Connect, Invest - Ziti',
      description: 'Explore global property listings, connect with experts, and invest confidently worldwide with Ziti.',
      robots: {
        index: false,
        follow: false,
        nocache: true
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
