import { IAuthLogin, IAuthLoginByEmail, IAuthLoginByPhone } from '@/interfaces/IAuth'

const transformerAuth = {
  LoginByEmail (data: IAuthLoginByEmail): IAuthLogin {
    return {
      identifier: data.email,
      pwd: data.pwd,
      rememberMe: data.rememberMe,
    }
  },
  LoginPhoneAndPassword (data: IAuthLoginByPhone): IAuthLogin {
    return {
      identifier: data.phoneNumber,
      pwd: data.pwd,
      rememberMe: data.rememberMe,
    }
  }
}

export default transformerAuth
