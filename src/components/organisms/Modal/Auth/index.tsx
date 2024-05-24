'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import TemplateAuth from '@/components/templates/Auth'

type LoginMethod = 'phone' | 'email'

interface IUserAccount {
  hasAccount: boolean
  accountComplete: boolean
  emailVerified: boolean
  audienceType: string[]
  privateAccountData: {
    obfuscatedEmail: string
  }
  cookies: string
}

function ModalAuth () {
  const [open, setOpen] = useState(true)

  return (
    <Dialog modal open={open}>
      <DialogContent>
        <TemplateAuth />
      </DialogContent>
    </Dialog>
  )
}

export default ModalAuth
