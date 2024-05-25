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
      <header className="flex justify-between border-b p-6">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentcolor"
            strokeWidth="3"
            display="block"
            overflow="visible"
            viewBox="0 0 32 32"
            style={{ height: 16, width: 16 }}
          >
            <path d="M6 6l20 20m0-20L6 26"></path>
          </svg>
        </button>
        <span className="font-bold text-md">Log in or sign up</span>
        <div></div>
      </header>

      <section className="p-6">
        <MultiStepForm initialSteps={authMethod === 'phoneOtp' ? authPhoneOtpController : authEmailController} />

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm font-medium leading-6">
            <span className="bg-white px-6 text-gray-900">Or continue with</span>
          </div>
        </div>

        <SocialLoginList authMethod={authMethod} handleAuthMethodSelection={handleAuthMethodSelection} />
      </section>
    </div>
  )
}

export default TemplateAuth
