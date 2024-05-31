import { authCheckEmail } from "@/services/apis/requests/auth"
import CheckEmailForm from "../_steps/CheckEmailForm"
import CheckPhoneForm from "../_steps/CheckPhoneForm"
import PasswordForm from "../_steps/PasswordForm"
import RegisterForm from "../_steps/RegisterForm"
import helperAuth from "./helperAuth"

// BACK BUTTON
// TODO: Need global state for the form auth before
// There are two possible screens the user can go back from the same component depending if they selected email or phone
// Check current state on the ReisterForm (which is this component)
// -if email: go back to CheckEmailForm
// - else, go back to CheckPhoneForm

const authController = [
  {
    id: "register",
    component: RegisterForm,
    onBack: () => {
      let updatedAuthController = [...authController]
    },
    onSubmit: async (data) => {
      console.log("registerrr", data)
      return { success: true }
    }
  },
  {
    id: "password",
    component: PasswordForm,
    onSubmit: () => {
      return { success: true }
    }
  },
  { // checkPhone 
    id: "checkPhone",
    component: CheckPhoneForm,
    onSubmit: async (data: { phoneNumber: string }) => {
      // const response = await sendOtp({ phoneNumber: data.phoneNumber })
      // const response = {}
      // return response.success
      //   ? { success: true }
      //   : { success: false, message: 'Failed to send OTP' }
    }
  },
  {
    id: "checkEmail",
    component: CheckEmailForm,
    onSubmit: async (data: { email: string }) => {
      let errors = []

      // TODO: should be on keyPress fired as well
      if (data.email === "") {
        return {
          errors: [
            { message: "empty email" }
          ]
        }
      }

      const res = await authCheckEmail(data.email)
      if (res.hasAccount) {
        return {
          next: helperAuth.getController("password")
        }
      } else {
        return {
          next: helperAuth.getController("register")
        }
      }

    }
  }
]

export default authController
