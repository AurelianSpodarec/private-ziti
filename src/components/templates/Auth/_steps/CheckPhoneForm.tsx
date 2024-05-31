import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { type ChangeEvent } from 'react'

interface CheckPhoneFormProps {
  formData: { email?: string, password?: string }
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function CheckPhoneForm ({ formData, handleInputChange }: CheckPhoneFormProps) {
  return (
    <div>
      <label>
        PHONEEEEEEEEEE
        <Input
          placeholder="Phone"
          type="phone"
          name="phone"
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

export default CheckPhoneForm
