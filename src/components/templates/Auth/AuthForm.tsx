import { useState } from 'react'

import MultiStepForm from './MultiStepForm'
import SocialLoginList from './_components/SocialLoginList'

import checkEmail from './_controller/checkEmail'
import phoneOtpSteps from './_controller/phoneOtpSteps'

const AuthForm: React.FC = () => {
  const [authMethod, setAuthMethod] = useState<string | null>("checkEmail")
  const [isSignup, setIsSignup] = useState(false)

  const handleAuthMethodSelection = (method: string) => {
    setAuthMethod(method)
    setIsSignup(false)
  }

  const handleSignupSelection = () => {
    setAuthMethod('register')
    setIsSignup(true)
  }

  return (
    <div>
      <h1>Step: {isSignup ? 'Sign Up' : 'Login'}</h1>
      <MultiStepForm initialSteps={authMethod === 'phoneOtp' ? phoneOtpSteps : checkEmail} />
      <SocialLoginList authMethod={authMethod} handleAuthMethodSelection={handleAuthMethodSelection} />
    </div>
  )
}

export default AuthForm
