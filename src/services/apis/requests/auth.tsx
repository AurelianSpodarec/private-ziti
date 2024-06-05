// ============================================================
// API Auth
// ============================================================

import FetchZiti from '../fetch/FetchZiti'
import transformerAuth from '@/transformers/transformerAuth'
import { IAuthLogin, IAuthLoginByEmail, IAuthLoginByPhone, IAuthOTPVerify, IAuthRegister, IAuthToken } from '@/interfaces/IAuth'

// Check: Email and OTP
// ===========================================

export async function authCheckEmail (data: string) {
  return await FetchZiti('auth/email', 'POST', { email: data })
}

export async function authCheckOTP (data: string) {
  return await FetchZiti('auth/otp', 'POST', { phone: data })
}

// Login
// ===========================================

export async function authLogin (data: IAuthLogin) {
  return await FetchZiti('auth/login', 'POST', data)
}

export async function authLoginByEmail (data: IAuthLoginByEmail) {
  const transformedData = transformerAuth.LoginByEmail(data)
  return await FetchZiti('auth/login', 'POST', transformedData)
}

export async function authLoginByPhoneAndPassword (data: IAuthLoginByPhone) {
  const transformedData = transformerAuth.LoginPhoneAndPassword(data)
  return await FetchZiti('auth/login', 'POST', transformedData)
}

// Verify
// ===========================================

export async function authVerifyEmail (data: IAuthToken) {
  return await FetchZiti('users/verify-email', 'POST', data)
}

export async function authVerifyOTP (data: IAuthOTPVerify) {
  return await FetchZiti('auth/verify-otp', 'POST', data)
}

// Register
// ===========================================

export async function authRegister (data: IAuthRegister) {
  return await FetchZiti('users/create-account', 'POST', data)
}

// Other
// ===========================================

export async function refreshToken (refreshToken: string) {
  return await FetchZiti('auth/refresh', 'GET', undefined, refreshToken, undefined)
}
