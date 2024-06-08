import helperAuth from "./helperAuth"
import { authCheckEmail, authCheckOTP, authRegister, authVerifyOTP } from "@/services/apis/requests/auth"

import CheckEmailForm from "../_steps/CheckEmailForm"
import CheckPhoneForm from "../_steps/CheckPhoneForm"
import PasswordForm from "../_steps/PasswordForm"
import RegisterForm from "../_steps/RegisterForm"
import VerifyPhoneCode from "../_steps/VerifyPhoneCode"
import VerifyEmailForm from "../_steps/VerifyEmailForm"
import { serverLoginEmaislAction } from "@/actions/loginServerAction"

interface Step {
  id: string
  component: any
  onSubmit?: (formData: any) => Promise<{ success: boolean; message?: string; steps?: Step[] }>
}

const authController: Step[] = [
  // ===============================================
  // Check
  // ===============================================
  {
    id: "checkEmail",
    component: CheckEmailForm,
    onSubmit: async (formData) => {

      let errors = []
      if (formData.email === "") {
        return { errors: [{ message: "empty email" }] }
      }

      const res = await authCheckEmail(formData.email)
      if (res.hasAccount) {
        return { next: "password" }
      } else {
        return { next: "register" }
      }
    }
  },
  {
    id: "checkPhone",
    component: CheckPhoneForm,
    onSubmit: async (formData) => {
      const res = await authCheckOTP(formData.phone)

      if (res.success) {
        return { next: "verifyPhone" }
      } else {
        // error message 'Failed to send OTP
      }
    }
  },
  // ===============================================
  // Verify
  // ===============================================
  {
    id: "verifyEmail",
    component: VerifyEmailForm,
    onSubmit: async () => { }
  },
  {
    id: "verifyPhone",
    component: VerifyPhoneCode,
    onSubmit: async (formData) => {

      const res = await authVerifyOTP({
        phone: formData.phone,
        verificationCode: formData.verificationCode
      })

      // Response - no account
      //   {
      //     "hasAccount": false,
      //     "reference": "d0609197-d3a0-4dc5-9325-54e39bf82d36",
      //     "cookies": null
      // }

      if (res.hasAccount) {
        // just login
      } else {
        return { next: "register" }
      }


    }
  },
  // ===============================================
  // Password
  // ===============================================
  {
    id: "password",
    component: PasswordForm,
    onSubmit: async (formData) => {

      const res = await serverLoginEmaislAction({ email: formData.email, password: formData.pwd })

      // login the user, hide modal
      // if (res.message === "success") {
      //   return {
      //     next: true,
      //     setModalState: "close"
      //   }
      // } else {
      //   // error
      // }
      // return { success: true }
    }
  },
  {
    id: "forgottenPassword",
    component: PasswordForm,
    onSubmit: () => {
      return { success: true }
    }
  },
  // ===============================================
  // Other
  // ===============================================
  {
    id: "register",
    component: RegisterForm,
    onSubmit: async (formData) => {
      // console.log("fire", formData)

      const res = await authRegister({
        firstName: formData.firstName,
        lastName: formData.lastName,
        dob: formData.dob,
        email: formData.email,
        pwd: formData.pwd,
        marketingOptOut: formData.marketingOptOut
        // reference: formData.reference
      })
      // console.log(res)

      //TS
      //   {
      //     "message": "success",
      //     "token": "c6f607899619650ffaa21abe93c0bc9298e1799f7fcce7155d37828e3c366d58aa85b33cc7ec75832c9cd16991a9465e",
      //     "cookies": null
      // }
      if (res.message === "success") {
        return {
          next: true,
          setModalState: "close"
        }
      } else {
        // error
      }

    }
  },
]

export default authController
