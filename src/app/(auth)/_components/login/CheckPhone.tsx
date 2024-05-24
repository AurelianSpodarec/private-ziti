import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { type ChangeEvent } from 'react'

interface CheckPhoneProps {
  formData: { email?: string, password?: string }
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function CheckPhone ({ formData, handleInputChange }: CheckPhoneProps) {
  return (
    <div>
      <label>
        PHONEEEEEEEEEE
        <Input
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email || ''}
          // value=""
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

export default CheckPhone
