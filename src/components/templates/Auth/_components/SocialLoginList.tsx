import DividerLine from "./DividerLine"
import SocialLoginButton from "./SocialLoginButton"

function SocialLoginList ({ authMethod, handleAuthMethodSelection }: any) {
  return (
    <>
      <DividerLine />
      <div>
        <SocialLoginButton
          name="Google"
          onClick={() => console.log("Google auth not implemented")}
          icon={
            <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"></path>
              <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"></path>
              <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05"></path>
              <path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853"></path>
            </svg>
          }
        />
        {authMethod === "checkPhone" &&
          <SocialLoginButton
            onClick={() => { handleAuthMethodSelection('checkEmail') }}
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

        {authMethod === "checkEmail" &&
          <SocialLoginButton
            onClick={() => { handleAuthMethodSelection('checkPhone') }}
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
    </>
  )
}

export default SocialLoginList
