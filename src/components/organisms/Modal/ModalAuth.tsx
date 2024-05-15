'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'

// interface IModalAuth {
//   isOpen: boolean
//   onClose?: () => void
// }

// Shuld show when user clicks 'like'
// Should show when user clicks button 'login'

function ModalAuth () {
  return (
    <Dialog modal open={false}>
      <DialogContent>
        Modal Auth
      </DialogContent>
    </Dialog>
  )
}

export default ModalAuth
