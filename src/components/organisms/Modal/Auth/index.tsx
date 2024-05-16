'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

import SocialLoginList from './SocialLoginList'
import DividerWithText from './DividerWithText'

// interface IModalAuth {
//   isOpen: boolean
//   onClose?: () => void
// }

// Shuld show when user clicks 'like'
// Should show when user clicks button 'login'

function ModalAuth () {
  return (
    <Dialog modal open={true}>
      <DialogContent>

        <div>
          Email
          <Input />
          <Button block>Continue</Button>
        </div>
        <DividerWithText text="Or continue with" />
        <SocialLoginList />

      </DialogContent>
    </Dialog>
  )
}

export default ModalAuth
