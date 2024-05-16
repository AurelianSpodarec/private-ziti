import { Button } from '@/components/ui/button'

function SocialLoginButton ({ name, icon }: { name: string, icon: React.ReactNode }) {
  return (
    <Button
      kind="outline"
      block
      icon={icon}>
      {name}
    </Button>
  )
}

function SocialLoginList () {
  return (
    <div className="text-left">
      <SocialLoginButton
        name="FaceBook"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            display="block"
            viewBox="0 0 32 32"
            className="h-5 w-5 rounded-full"
          >
            <path fill="#1877F2" d="M32 0v32H0V0z"></path>
            <path
              fill="#FFF"
              d="M22.94 16H18.5v-3c0-1.27.62-2.5 2.6-2.5h2.02V6.56s-1.83-.31-3.58-.31c-3.65 0-6.04 2.21-6.04 6.22V16H9.44v4.63h4.06V32h5V20.62h3.73l.7-4.62z"
            ></path>
          </svg>
        }
      />
      <SocialLoginButton
        name="Google"
        icon={
          <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"></path>
            <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"></path>
            <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05"></path>
            <path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853"></path>
          </svg>
        }
      />
      <SocialLoginButton
        name="Apple"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentcolor"
            display="block"
            viewBox="0 0 24 24"
            className="h-5 w-5"
          >
            <path d="M13.3 2.1A5.1 5.1 0 0117.1 0a5.1 5.1 0 01-1.2 3.8 4.1 4.1 0 01-3.6 1.7 4.5 4.5 0 011-3.4zm-5 3.7c-2.8 0-5.8 2.5-5.8 7.3C2.5 18 6 24 8.8 24c1 0 2.5-1 4-1s2.6.9 4 .9c3.1 0 5.3-6.4 5.3-6.4a5.3 5.3 0 01-3.2-4.9 5.2 5.2 0 012.6-4.5 5.4 5.4 0 00-4.7-2.4c-2 0-3.5 1.1-4.3 1.1-.9 0-2.4-1-4.2-1z"></path>
          </svg>
        }
      />
      <SocialLoginButton
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
    </div>
  )
}

export default SocialLoginList
