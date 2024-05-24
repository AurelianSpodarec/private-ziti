import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { type ChangeEvent } from 'react'

interface CheckEmailProps {
  formData: { email?: string, password?: string }
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
  errors: {}
}

function CheckEmail ({ formData, handleInputChange, errors = {} }: CheckEmailProps) {
  return (
    <div>
      <label>
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
      {/* {errors && errors.map((error) => (<p>{error.message}</p>))} */}
      <Button block variant="primary">
        Continue
      </Button>
    </div>
  )
}

export default CheckEmail
