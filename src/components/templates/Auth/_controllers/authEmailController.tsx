import { authCheckEmail } from '@/services/apis/requests/auth'

import CheckEmail from '../_steps/CheckEmail'
import RegisterForm from '../_steps/RegisterForm'
import PasswordForm from '../_steps/PasswordForm'

const authEmailController = [
  {
    component: CheckEmail,
    onSubmit: async (data: { email: string }) => {
      const res = await authCheckEmail(data.email)

      console.log("res", res)

      // const newAccount = !res.accountComplete
      // const hasAccount = res.accountComplete && res.hadAccount
      const newAccount = false
      const canLogin = true

      let updatedCheckEmail = [...authEmailController]

      if (newAccount) {
        updatedCheckEmail.push(
          {
            component: RegisterForm,
            onSubmit: () => {
              return { success: true }
            }
          }
        )
      }

      if (canLogin) {
        updatedCheckEmail.push(
          {
            component: PasswordForm,
            onSubmit: () => {
              return { success: true }
            }
          }
        )
      }
      // if that is not successfull we need to return the erro given back the component in this case <CheckEmail/> so it can display it to the user under the form or highlight the form.
      return { success: true, steps: updatedCheckEmail }
    }
  }
]

export default authEmailController
