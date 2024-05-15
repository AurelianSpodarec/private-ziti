'use client'

import { useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { ThemeProvider } from '@/context/theme-provider'
import ModalProvider from './modal/modal-provider'

function Provider ({ children, session }: { children: React.ReactNode, session?: unknown }) {
  const [client] = useState(new QueryClient())

  if (process.env.NEXT_PUBLIC_ENVIRONMENT === undefined) {
    console.error('Enviroment file not defined or staging variable not defined (.env)')
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={client}>
        <ModalProvider>
          {children}
        </ModalProvider>
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default Provider
