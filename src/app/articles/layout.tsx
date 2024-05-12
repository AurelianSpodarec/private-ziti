import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://ziti.io'),
  title: 'Discover, Connect, Invest - Ziti',
  description: 'Explore global property listings, connect with experts, and invest confidently worldwide with Ziti.',
  robots: {
    nocache: false // Cache the page
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
