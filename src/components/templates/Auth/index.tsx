import { useState } from 'react'

import MultiStepForm from './MultiStepForm'
import SocialLoginList from './_components/SocialLoginList'

import authEmailController from './_controllers/authEmailController'
import authPhoneOtpController from './_controllers/authPhoneOtpController'

function TemplateAuth () {
  const [authMethod, setAuthMethod] = useState<string | null>("authEmailController")
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
      <MultiStepForm initialSteps={authMethod === 'phoneOtp' ? authPhoneOtpController : authEmailController} />
      <SocialLoginList authMethod={authMethod} handleAuthMethodSelection={handleAuthMethodSelection} />
    </div>
  )
}

export default TemplateAuth
