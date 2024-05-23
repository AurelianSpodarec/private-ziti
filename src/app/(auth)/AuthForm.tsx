import { useState } from 'react'
import MultiStepForm from './MultiStepForm'
import emailPasswordSteps from './_components/steps/emailPasswordSteps'
import SocialLoginButton from './_components/ui/SocialLoginButton'
// import phoneOtpSteps from './phoneOtpSteps'

// import registrationSteps from './registrationSteps'

const AuthForm: React.FC = () => {
  const [authMethod, setAuthMethod] = useState<string | null>("emailPassword")
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
      {authMethod && !isSignup && (
        // <MultiStepForm
        //   steps={authMethod === 'phoneOtp' ? phoneOtpSteps : emailPasswordSteps}
        // />
        <MultiStepForm
          steps={emailPasswordSteps}
        />
      )}
      {/* {isSignup && <MultiStepForm steps={registrationSteps} />} */}
      {/* {!authMethod && ( */}
      <div>

        {authMethod === "phoneOtp" &&
          <SocialLoginButton
            onClick={() => { handleAuthMethodSelection('emailPassword') }}
            name="Email"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                fill="none"
                viewBox="0 0 24 25"
              >
                <path
                  stroke="#1D2F3B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4.737h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-12c0-1.1.9-2 2-2z"
                ></path>
                <path
                  stroke="#1D2F3B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M22 6.737l-10 7-10-7"
                ></path>
              </svg>
            }
          />
        }

        {authMethod === "emailPassword" &&
          <SocialLoginButton
            onClick={() => { handleAuthMethodSelection('phoneOtp') }}
            name="Phone"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentcolor"
                display="block"
                viewBox="0 0 32 32"
                style={{ height: 20, width: 20 }}
              >
                <path d="M22 1a5 5 0 015 4.78V26a5 5 0 01-4.78 5H10a5 5 0 01-5-4.78V6a5 5 0 014.78-5H10zm0 2H10a3 3 0 00-3 2.82V26a3 3 0 002.82 3H22a3 3 0 003-2.82V6a3 3 0 00-2.82-3zm-6 22a1 1 0 110 2 1 1 0 010-2zm4-4a1 1 0 110 2 1 1 0 010-2zm-4 0a1 1 0 110 2 1 1 0 010-2zm-4 0a1 1 0 110 2 1 1 0 010-2zm8-4a1 1 0 110 2 1 1 0 010-2zm-4 0a1 1 0 110 2 1 1 0 010-2zm-4 0a1 1 0 110 2 1 1 0 010-2zm8-4a1 1 0 110 2 1 1 0 010-2zm-4 0a1 1 0 110 2 1 1 0 010-2zm-4 0a1 1 0 110 2 1 1 0 010-2z"></path>
              </svg>
            }
          />
        }
      </div>
      {/* )} */}
    </div>
  )
}

export default AuthForm