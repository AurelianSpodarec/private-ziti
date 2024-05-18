'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

import SocialLoginList from './SocialLoginList'
import DividerWithText from './DividerWithText'
import { useEffect, useState } from 'react'
import { serverLoginEmaislAction } from './loginServerAction'


// interface IModalAuth {
//   isOpen: boolean
//   onClose?: () => void
// }

// Shuld show when user clicks 'like'
// Should show when user clicks button 'login'

function StartLogin () {
  return (
    <div>
      <div>
        Email
        <Input />
        <Button block>Continue</Button>
      </div>
      <DividerWithText text="Or continue with" />
      <SocialLoginList />
    </div>
  )
}

function FinishRegistering () {
  return (
    <div>
      <Button>Agree and continue</Button>
    </div>
  )
}

// type Option = 'email' | 'phone'
function ModalAuth () {
  // method
  // const [option, setOption] = useState<Option>('email')
  // const [phase, setPhase] = useState('')
  // Email or Phone can be selected
  // Phase one or two can be selected

  // TODO: Check if email exists, if it does, login

  const [open, setOpen] = useState(true)
  // function checkEmail () {
  //   const res = authCheckEmail('aurelianxspodarec@gmail.com')
  //   console.log('checkEmailg', res)
  // }

  async function loginEmail () {
    // TODO: Currently this goes from the Auth as hardcoded values
    // const res = authLoginByEmail({
    //   identifier: 'ivanferrera@gmail.com',
    //   pwd: 'abc123',
    //   rememberMe: true
    // })
    const res = await serverLoginEmaislAction()
    console.log("res", res)
    if (res) {
      setOpen(false)
    }
    // If login not successfull

    // login successfull, 
    // setOpen(false)
  }

  // TODO: Hide modal on successful authentication
  // We can try 'use server on click
  return (
    <Dialog modal open={open}>
      <DialogContent>
        {/* <button onClick={() => { checkEmail() }}>Check Email</button> */}
        <button onClick={() => loginEmail()}>Login Email</button>
        {/* <StartLogin /> */}

      </DialogContent>
    </Dialog>
  )
}

export default ModalAuth
