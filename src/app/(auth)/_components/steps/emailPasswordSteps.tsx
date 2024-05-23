import { authCheckEmail, authLoginByEmail } from '@/services/apis/requests/auth'
import CheckEmail from '../login/CheckEmail'


// checkEmail xx
// 
const emailPasswordSteps = [
  {
    component: CheckEmail,
    onSubmit: async (data: { email: string }) => {
      const res = await authCheckEmail(data.email)
      console.log("res", res)
      const hasAccount = ""
      const newAccount = ""

      return res
        ? { success: true }
        : { success: false, message: 'Invalid credentials' }

    }
  }
]

export default emailPasswordSteps
