'use client'

import { createContext, useState } from 'react'

interface IModalContext {
  children: React.ReactNode
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export const ModalContext = createContext<IModalContext | undefined>(undefined)

function ModalProvider ({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  function setModalOpen () {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  function setModalClose () {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }

  function setModalState (state: "close" | "open") {
    if (state === "open") {
      setModalOpen()
    } else {
      setModalClose()
    }
  }

  const readValues = {
    children,
    isOpen,
    closeModal: setModalClose,
    openModal: setModalOpen,
    setModalState
  }

  return (
    <ModalContext.Provider value={readValues}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
