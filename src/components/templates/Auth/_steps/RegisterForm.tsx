import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChangeEvent } from "react"

interface IRegisterForm {
  formData: { firstName?: string, lastName?: string, dob?: string, email?: string, pwd?: string }
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function RegisterForm ({ formData, handleInputChange }: IRegisterForm) {
  return (
    <div>
      <div>
        <h2>Legal Name</h2>
        <Input
          placeholder='First name on ID'
          value={formData.firstName || ''}
          onChange={handleInputChange}
        />
        <Input
          placeholder='Last name on ID'
          value={formData.lastName || ''}
          onChange={handleInputChange}
        />
        <span>Make sure this matches the name on your government ID. If you go by another name, you can add a preferred first name.</span>
      </div>

      <div>
        <h2>Daate of birth</h2>
        <Input
          placeholder="Date of birth"
          value={formData.dob || ''}
          onChange={handleInputChange}
        />
        <span>To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Airbnb.</span>
      </div>

      <div>
        <h2>Email</h2>
        <Input
          placeholder="Email"
          value={formData.email || ''}
          onChange={handleInputChange}
        />
        <span>We'll email you trip confirmations and receipts.</span>
      </div>

      <div>
        <h2>Password</h2>
        <Input
          placeholder="Password"
          value={formData.pwd || ''}
          onChange={handleInputChange}
        />
      </div>

      <Button block>Continue and agree</Button>
    </div>
  )
}

export default RegisterForm
