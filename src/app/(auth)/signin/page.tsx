import { signIn } from '@/auth'
import { authLoginByEmail } from '@/services/apis/requests/auth'

function Login () {
  // const a = authLoginByEmail({
  //   identifier: "",
  //   pwd: "",
  //   rememberMe: false
  // })

  return (
    <div>
      Login Page

      <form
        action={async (formData) => {
          'use server'
          await signIn('credentials', formData)
        }}
      >
        <label>
          Email
          <input readOnly name="identifier" type="email" value="ivanferrera@gmail.com" />
        </label>
        <label>
          Password
          <input readOnly name="pwd" type="password" value="abc123" />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default Login
