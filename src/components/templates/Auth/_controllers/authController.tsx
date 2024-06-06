// authContext.js
import React, { createContext, useContext, useCallback } from 'react'
import { authCheckEmail, authCheckOTP, authVerifyOTP } from "@/services/apis/requests/auth"
import CheckEmailForm from "../_steps/CheckEmailForm"
import CheckPhoneForm from "../_steps/CheckPhoneForm"
import PasswordForm from "../_steps/PasswordForm"
import RegisterForm from "../_steps/RegisterForm"
import helperAuth from "./helperAuth"
import VerifyPhoneCode from "../_steps/VerifyPhoneCode"
import VerifyEmailForm from "../_steps/VerifyEmailForm"
import useAuth from '../_context/useAuth'

interface Step {
  id: string
  component: any
  onSubmit?: (data: any) => Promise<{ success: boolean; message?: string; steps?: Step[] }>
}

const authController: Step[] = [
  // ===============================================
  // Check
  // ===============================================
  {
    id: "checkEmail",
    component: CheckEmailForm,
    onSubmit: async (data) => {
      let errors = []
      if (data.email === "") {
        return { errors: [{ message: "empty email" }] }
      }
      console.log("Form data")
      const res = await authCheckEmail(data.email)
      if (res.hasAccount) {
        return { next: helperAuth.getController("password") }
      } else {
        return { next: helperAuth.getController("register") }
      }
    }
  },
  {
    id: "checkPhone",
    component: CheckPhoneForm,
    onSubmit: async (data) => {
      // const res = await authCheckOTP("+447751022563")

      // if (res.success) {
      console.log("fire checkPhone")
      if (true) {
        console.log("fire checkPhone true") //todo: fix doesn't update the component
        return {
          next: helperAuth.getController("verifyPhone")
          //authController['checkPhone']
        }
      } else {

        console.log("fire checkPhone false")
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
    onSubmit: async (data) => {
      const res = await authVerifyOTP("+447751022563")
    }
  },
  // ===============================================
  // Password
  // ===============================================
  {
    id: "password",
    component: PasswordForm,
    onSubmit: () => {
      return { success: true }
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
