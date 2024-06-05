import { authCheckEmail, authCheckOTP, authVerifyOTP } from "@/services/apis/requests/auth"
import CheckEmailForm from "../_steps/CheckEmailForm"
import CheckPhoneForm from "../_steps/CheckPhoneForm"
import PasswordForm from "../_steps/PasswordForm"
import RegisterForm from "../_steps/RegisterForm"
import helperAuth from "./helperAuth"
import VerifyPhoneCode from "../_steps/VerifyPhoneCode"
import VerifyEmailForm from "../_steps/VerifyEmailForm"
import useModal from "@/context/modal/useModal"

// BACK BUTTON
// TODO: Need global state for the form auth before
// There are two possible screens the user can go back from the same component depending if they selected email or phone
// Check current state on the ReisterForm (which is this component)

interface IAuthController {
  id: string
  component: React.ComponentType<any>
  onBack?: any
  onSubmit: (data?: any) => Promise<void> | void
}


const authController: IAuthController[] = [
  // =========================================================
  // Check: Email and OTP
  // =========================================================
  {
    id: "checkEmail",
    component: CheckEmailForm,
    onSubmit: async (data: { email: string }) => {
      let errors = []
      // console.log("check email", openModal)
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
  },
  {
    id: "checkPhone",
    component: CheckPhoneForm,
    onSubmit: async (data: { phoneNumber: string }) => {
      const res = await authCheckOTP(data.phoneNumber)

      if (res.success) {
        // go to next component to enter the code
      } else {
        // error message 'Failed to send OTP
      }
    }
  },
  // =========================================================
  // Login
  // =========================================================
  {
    id: "password",
    component: PasswordForm,
    onSubmit: () => {
      return { success: true }
    }
  },
  // =========================================================
  // Verify
  // =========================================================
  {
    id: "verifyEmail",
    component: VerifyEmailForm,
    onSubmit: async () => {

    }
  },
  {
    id: "verifyPhone",
    component: VerifyPhoneCode,
    // Phone needs to come from previous state
    onSubmit: async (data: {}) => {
      const res = await authVerifyOTP()
    }
  },
  // =========================================================
  // Other
  // =========================================================
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
]

export default authController
