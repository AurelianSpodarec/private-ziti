import { authCheckEmail } from "@/services/apis/requests/auth"
import CheckEmailForm from "../_steps/CheckEmailForm"
import CheckPhoneForm from "../_steps/CheckPhoneForm"
import PasswordForm from "../_steps/PasswordForm"
import RegisterForm from "../_steps/RegisterForm"
import helperAuth from "./helperAuth"

const authController = [
  {
    id: "register",
    component: RegisterForm,
    onSubmit: async (data) => {
      console.log("registerrr", data)
      return { success: true }
    }
  },
  {
    id: "checkPhone",
    component: CheckPhoneForm,
    onSubmit: async (data: { phoneNumber: string }) => {
      // const response = await sendOtp({ phoneNumber: data.phoneNumber })
      const response = {}
      return response.success
        ? { success: true }
        : { success: false, message: 'Failed to send OTP' }
    }
  },
  {
    id: "checkEmail",
    component: CheckEmailForm,
    onSubmit: async (data: { email: string }) => {
      const res = await authCheckEmail(data.email)

      const hasAccount = !res.accountComplete
      let updatedCheckEmail = [...authController]

      if (hasAccount) {
        updatedCheckEmail.push(
          helperAuth.getController("checkEmail")
        )
      } else {
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

export default authController
