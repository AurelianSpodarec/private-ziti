// src/app/layout.tsx
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

import MixpanelInitializer from '@/lib/other/MixpanelInitializer'
import TrafficSourceTracker from '@/lib/other/TrafficSourceTracker'
import Scripts from '@/lib/other/Scripts'

import Provider from '@/context/provider'
import { poppins, sourceSerif } from '@/utils/fonts'

import './../styles/styles.scss'

import Header from './_components/Header'

const DynamicModalAuth = dynamic(async () => await import('@/components/organisms/Modal/ModalAuth'), { ssr: false })

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
      'max-image-preview': 'none',
      'max-snippet': -1
    }
  }
}

function RootLayout ({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" >
      <MixpanelInitializer />
      <TrafficSourceTracker />
      <body className={`${poppins.variable} ${sourceSerif.variable}`} >
        <Provider>

          <Header />
          <main>
            {children}
          </main>

          <DynamicModalAuth />
        </Provider>
      </body>
      <Scripts />
    </html>
  )
}

export default RootLayout
