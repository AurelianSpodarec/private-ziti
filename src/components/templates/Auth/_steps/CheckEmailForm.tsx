import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { type ChangeEvent } from 'react'

interface CheckEmailFormProps {
  formData: { email?: string, password?: string }
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
  errors: {}
}

function CheckEmailForm ({ formData, handleInputChange, errors }: CheckEmailFormProps) {
  return (
    <div>
      <label>
        <Input
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email || ''}
          onChange={handleInputChange}

        />
      </label>

      {/* TODO: Abstract into error component */}
      {errors && errors.map((error) => (<p>{error.message}</p>))}

      <Button block variant="primary">
        Continue
      </Button>
    </div>
  )
}

export default CheckEmailForm
