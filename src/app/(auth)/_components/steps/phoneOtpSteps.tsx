// import OtpStep from '../forms/OtpStep'
// import PhoneNumberStep from "@/components/forms/login/otp/PhoneNumberStep"
// update this to server actions
// import { sendOtp, verifyOtp } from '../../services/apis/requests/auth'
import CheckPhone from '../login/CheckPhone'


const phoneOtpSteps = [
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

export default phoneOtpSteps
