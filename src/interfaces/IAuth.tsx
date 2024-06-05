export interface IAuthLogin {
  identifier: string | number
  pwd: string
  rememberMe: boolean
}

export interface IAuthLoginByPhone {
  phoneNumber: number
  pwd: string
  rememberMe: boolean
}

export interface IAuthLoginByEmail {
  email: string
  pwd: string
  rememberMe: boolean
}

export interface IAuthToken {
  token: string
}

export interface IAuthOTPVerify {
  phone: string
  verificationCode: string
}

export interface IAuthRegister {
  firstName: string
  lastName: string
  dob: string
  email: string
  pwd: string
  marketingOptOut: boolean
  reference: string
}
