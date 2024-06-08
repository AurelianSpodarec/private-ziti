import { type ChangeEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import countryCodes from '@/data/CountryCodes'

interface CheckPhoneFormProps {
  formData: { phone?: string, password?: string }
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function CheckPhoneForm ({ formData, handleInputChange }: CheckPhoneFormProps) {
  // console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
  // console.log(Intl.DateTimeFormat().format)
  // console.log(countryCodes[0].name)
  return (
    <div>

      {/* TODO: Need to optimize the select itmes, maybe have browser select s */}

      {/* create container for this mb-4 */}
      <div className="mb-4">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={`${countryCodes[0].name}  (${countryCodes[0].dial_code})`} />
          </SelectTrigger>
          <SelectContent className="bg-background">
            {countryCodes.map((item) => {
              return (
                <SelectItem key={item.code} value={item.code}>{item.name} ({item.dial_code})</SelectItem>
              )
            })}
          </SelectContent>
        </Select>

        <Input
          placeholder="Phone"
          type="phone"
          name="phone"
          value={formData.phone || ''}
          onChange={handleInputChange}
        />
        <p className="text-xs mt-1">We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</p>
      </div>


      <Button block variant="primary">
        Continue
      </Button>
    </div>
  )
}

export default CheckPhoneForm
