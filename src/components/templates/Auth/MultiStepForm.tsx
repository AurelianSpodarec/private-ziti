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
}

function MultiStepForm ({ initialSteps }: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [steps, setSteps] = useState<Step[]>(initialSteps)

  // This should create new forms for all forms - a global form state
  const [formData, setFormData] = useState<Record<string, any>>({

  })

  console.log("woooo", currentStep, steps, formData)
  const nextStep = () => setCurrentStep(prevStep => prevStep + 1)
  const prevStep = () => setCurrentStep(prevStep => prevStep - 1)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const step = steps[currentStep]

    if (step.onSubmit) {
      const result = await step.onSubmit(formData)
      console.log("on submit", result)
      if (result.success) {
        if (result.steps) {
          setSteps(result.steps)
        }
        nextStep()
      } else {
        alert(result.message)
      }

    } else {
      nextStep()
    }
  }

  useEffect(() => {
    setSteps(initialSteps)
  }, [initialSteps])

  // const StepComponent = steps[currentStep] ? steps[currentStep].component : null

  const StepComponent = helperAuth.getController("checkEmail")?.component
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {currentStep > 0 && (
          <button type="button" onClick={prevStep}>
            Back
          </button>
        )}

        {/* <button type="submit">
          {currentStep < steps.length - 1 ? 'Next' : 'Submit'}
        </button> */}

        {StepComponent && (
          <StepComponent formData={formData} handleInputChange={handleInputChange} />
        )}
      </form>
    </div>
  )
}

export default MultiStepForm
