import type { Metadata } from 'next'

const isActualProduction = process.env.IS_ACTUAL_PRODUCTION === 'true'

export const metadata: Metadata = isActualProduction
  ? { // production metadata
      metadataBase: new URL('https://ziti.io'),
      robots: {
        index: true, // Allow indexing
        follow: true, // Follow links
        nocache: false, // Cache the page
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
    <div className="bg-[#fdfdfd]">
      {children}
    </div>
  )
}

export default RootLayout
