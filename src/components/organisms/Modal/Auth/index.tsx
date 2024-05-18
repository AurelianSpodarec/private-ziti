'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

import SocialLoginList from './SocialLoginList'
import DividerWithText from './DividerWithText'
import { useEffect, useState } from 'react'
import { serverLoginEmaislAction } from './loginServerAction'
import { authCheckEmail } from '@/services/apis/requests/auth'

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

function EmailLogin ({ onAction }: any) {
  return (
    <div>
      <div>
        Email
        <Input />
        <Button onClick={onAction} block>Continue</Button>
      </div>

      <DividerWithText text="Or continue with" />
      <SocialLoginList />
    </div>
  )
}

function EmailFinishRegister ({ onAction }: any) {
  return (
    <div>
      <div>
        <h2>Legal Name</h2>
        <Input placeholder='First name on ID' />
        <Input placeholder='Last name on ID' />
        <span>Make sure this matches the name on your government ID. If you go by another name, you can add a preferred first name.</span>
      </div>

      <div>
        <h2>Daate of birth</h2>
        <Input placeholder="Date of birth" />
        <span>To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Airbnb.</span>
      </div>

      <div>
        <h2>Contact Info</h2>
        <Input placeholder="Contact info" value="email@gmail.com" />
        <span>We'll email you trip confirmations and receipts.</span>
      </div>

      <div>
        <h2>Password</h2>
        <Input placeholder="Password" />
      </div>

      <Button block>Continue and agree</Button>
    </div>
  )
}

function EmailPassword ({ onAction }: any) {
  return (
    <div>
      Password
      <Input placeholder="Password" type="password" />
      <Button onClick={onAction} block>Log in</Button>
      <p>Forgotten your password</p>
    </div>
  )
}

function EmailLoginView ({ setOpen }) {
  const [stage, setStage] = useState('emailLogin') // emailLogin, emailRegister, password

  async function checkEmail () {
    const res = await authCheckEmail('aurelianxspodarec@gmail.com')

    // TESTING
    // const canLogin = res.accountComplete && res.hasAccount
    const canLogin = true
    if (canLogin) {
      setStage('password')
    } else {
      setStage('emailRegister')
    }
  }

  // TODO: Update to dynamic values, and check the auth.ts file as well
  async function loginEmail () {
    const res = await serverLoginEmaislAction()
    // console.log("res", res.accountComplete)
    if (res) {
      setOpen(false)
    }
  }

  return (
    <div>

      {stage === 'emailLogin' && <EmailLogin onAction={checkEmail} />}
      {stage === 'emailRegister' && <EmailFinishRegister />}
      {stage === 'password' && <EmailPassword onAction={loginEmail} />}
    </div>
  )
}

function StartLogin ({ loginMethod = 'email', setOpen }: { loginMethod?: LoginMethod }) {
  return (
    <div>
      <EmailLoginView setOpen={setOpen} />
    </div>
  )
}

type Option = 'email' | 'phone'
function ModalAuth () {
  const [open, setOpen] = useState(true)
  const [option, setOption] = useState<Option>('email')

  return (
    <Dialog modal open={open}>
      <DialogContent>
        <StartLogin setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  )
}

export default ModalAuth
