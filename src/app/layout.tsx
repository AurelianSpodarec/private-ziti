// src/app/layout.tsx

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MixpanelInitializer from '../components/MixpanelInitializer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '',
  description: ''
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="en">
      <MixpanelInitializer />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
