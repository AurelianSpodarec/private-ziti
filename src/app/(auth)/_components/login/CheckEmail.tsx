import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { type ChangeEvent } from 'react'

interface CheckEmailProps {
  formData: { email?: string, password?: string }
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function CheckEmail ({ formData, handleInputChange }: CheckEmailProps) {
  return (
    <div>
      <label>
        <Input
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email || ''}
          onChange={handleInputChange}
          required
        />
      </label>
      <Button block variant="primary">
        Continue
      </Button>
    </div>
  )
}

export default CheckEmail
