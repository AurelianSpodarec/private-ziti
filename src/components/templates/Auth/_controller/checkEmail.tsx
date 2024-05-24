import { authCheckEmail, authLoginByEmail } from '@/services/apis/requests/auth'
import CheckEmail from '../_views/CheckEmail'
import RegisterForm from '../_views/RegisterForm'
import PasswordForm from '../_views/PasswordForm'

const checkEmail = [
  {
    component: CheckEmail,
    onSubmit: async (data: { email: string }) => {
      console.log("sds", data)
      const res = await authCheckEmail("aurelianxspodarec@gmail.com")
      // const res = await authCheckEmail("")
      console.log("res", res)

      // const newAccount = !res.accountComplete
      // const hasAccount = res.accountComplete && res.hadAccount
      const newAccount = false
      const hasAccount = true // canLogin

      let updatedCheckEmail = [...checkEmail]

      if (newAccount) {
        updatedCheckEmail.push(
          {
            component: RegisterForm,
            onSubmit: async () => {
              return { success: true }
            }
          }
        )
      }

      if (hasAccount) {
        updatedCheckEmail.push(
          {
            component: PasswordForm,
            onSubmit: async () => {
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

export default checkEmail
