import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import helperAuth from './_controllers/helperAuth'

interface IAuthRegister {
  firstName: string
  lastName: string
  dob: string
  email: string
  phone?: number
  pwd: string
  marketingOut: boolean
}

interface IAuthCheckEmail {

}

interface IAuthLogin {
  identifier: string
  pwd: string
  rememberMe: boolean
}



interface Step {
  component: React.ComponentType<{
    formData: any
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  }>
  onSubmit?: (formData: any) => Promise<{ success: boolean; message?: string; steps?: Step[] }>
}

interface MultiStepFormProps {
  initialSteps: Step[]
  authMethod: "checkEmail" | "checkPhone"
}

function MultiStepForm ({ authMethod, initialSteps }: MultiStepFormProps) {

  const [formData, setFormData] = useState<Record<string, any>>({
  })
  const [step, setStep] = useState(helperAuth.getController(authMethod))

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (step?.onSubmit) {
      const result = await step?.onSubmit(formData)
      if (result.success) {
        setStep(result.next)
      }
      // error
      // state errors
      // step component would have errors on it
      // if theres error, pass the error down and display it to the component on the lowest end
    }
  }

  useEffect(() => {
    setStep(helperAuth.getController(authMethod))
  }, [authMethod])

  const StepComponent = step?.component
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {StepComponent && (
          <StepComponent formData={formData} handleInputChange={handleInputChange} />
        )}
      </form>
    </div>
  )
}

export default MultiStepForm
