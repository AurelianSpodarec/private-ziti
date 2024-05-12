import type { Metadata } from 'next'

export const metadata: Metadata = {
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

function RootLayout ({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <div className="bg-[#fdfdfd]">
      {children}
    </div>
  )
}

export default RootLayout
