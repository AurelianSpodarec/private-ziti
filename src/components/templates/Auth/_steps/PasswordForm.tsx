import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function PasswordForm () {
  return (
    <div>
      Password
      <Input placeholder="Password" type="password" />
      <Button block>Log in</Button>
      <p>Forgotten your password</p>
    </div>
  )
}

export default PasswordForm
