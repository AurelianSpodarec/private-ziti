import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function RegisterForm () {
  return (
    <div>
      <div>
        <h2>Legal Name</h2>
        <Input placeholder='First name on ID' />
        <Input placeholder='Last name on ID' />
        <span>Make sure this matches the name on your government ID. If you go by another name, you can add a preferred first name.</span>
      </div>

      <div>
        <h2>Daate of birth</h2>
        <Input placeholder="Date of birth" />
        <span>To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Airbnb.</span>
      </div>

      <div>
        <h2>Contact Info</h2>
        <Input placeholder="Contact info" value="email@gmail.com" />
        <span>We'll email you trip confirmations and receipts.</span>
      </div>

      <div>
        <h2>Password</h2>
        <Input placeholder="Password" />
      </div>

      <Button block>Continue and agree</Button>
    </div>
  )
}

export default RegisterForm
