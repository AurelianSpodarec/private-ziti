'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import TemplateAuth from '@/components/templates/Auth'
import useModal from '@/context/modal/useModal'

// type LoginMethod = 'phone' | 'email'

// interface IUserAccount {
//   hasAccount: boolean
//   accountComplete: boolean
//   emailVerified: boolean
//   audienceType: string[]
//   privateAccountData: {
//     obfuscatedEmail: string
//   }
//   cookies: string
// }

function ModalAuth () {
  const { isOpen } = useModal()

  return (
    <Dialog modal open={isOpen}>
      {/* title */}
      <DialogContent>
        <TemplateAuth />
      </DialogContent>
    </Dialog>
  )
}

export default ModalAuth
