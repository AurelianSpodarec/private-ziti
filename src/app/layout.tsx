// src/app/layout.tsx

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MixpanelInitializer from '../components/MixpanelInitializer'
import TrafficSourceTracker from '@/components/TrafficSourceTracker'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discover, Connect, Invest - Ziti',
  description: 'Explore global property listings, connect with experts, and invest confidently worldwide with Ziti.',
  robots: 'noindex'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="en">
      <MixpanelInitializer />
      <TrafficSourceTracker />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
