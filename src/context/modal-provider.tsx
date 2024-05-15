'use client'

import { createContext, useState } from 'react'

interface IModalContext {
  children: React.ReactElement
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export const ModalContext = createContext<IModalContext | undefined>(undefined)

function ModalProvider ({ children }: { children: React.ReactElement }) {
  const [isOpen, setIsOpen] = useState(false)

  function setModalOpen () {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  function setModalClose () {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }

  const readValues = {
    children,
    isOpen,
    closeModal: setModalClose,
    openModal: setModalOpen
  }

  return (
    <ModalContext.Provider value={readValues}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
