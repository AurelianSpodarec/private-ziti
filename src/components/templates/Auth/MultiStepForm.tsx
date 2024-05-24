import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'

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
  const [formData, setFormData] = useState<Record<string, any>>({})

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

  // console.log(steps[currentStep]?.component)
  const StepComponent = steps[currentStep] ? steps[currentStep].component : null
  console.log("form", formData)
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
