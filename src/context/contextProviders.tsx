'use client'

import ModalProvider from '@/context/modal-provider'

function ContextProviders ({ children }: { children: React.ReactElement }) {
  return (
    <ModalProvider>
      {children}
    </ModalProvider>
  )
}

export default ContextProviders
