import { Input } from "@/components/ui/input"

function VerifyPhoneCode ({ formData, handleInputChange }: any) {
  return (
    <div>
      Verify phone code

      <Input
        placeholder="Verification code"
        type="number"
        name="verificationCode"
        value={formData.verificationCode || ''}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default VerifyPhoneCode
