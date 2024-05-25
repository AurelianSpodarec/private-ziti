import CheckPhone from '../_steps/CheckPhone'

const authPhoneOtpController = [
  {
    component: CheckPhone,
    onSubmit: async (data: { phoneNumber: string }) => {
      // const response = await sendOtp({ phoneNumber: data.phoneNumber })
      const response = {}
      return response.success
        ? { success: true }
        : { success: false, message: 'Failed to send OTP' }
    }
  },
  // {
  //   component: OtpStep,
  //   onSubmit: async (data: { phoneNumber: string, otp: string }) => {
  //     const response = await verifyOtp({
  //       phoneNumber: data.phoneNumber,
  //       otp: data.otp
  //     })
  //     return response.success
  //       ? { success: true }
  //       : { success: false, message: 'Invalid OTP' }
  //   }
  // }
]

export default authPhoneOtpController
