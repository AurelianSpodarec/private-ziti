import { useState, type ChangeEvent, type FormEvent } from 'react'

interface Step {
  component: React.ComponentType<{
    formData: any
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  }>
  onSubmit?: (formData: any) => Promise<{ success: boolean, message?: string }>
}

interface MultiStepFormProps {
  steps: Step[]
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<Record<string, any>>({})

  const nextStep = () => { setCurrentStep((prev) => prev + 1) }
  const prevStep = () => { setCurrentStep((prev) => prev - 1) }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const step = steps[currentStep]
    if (step.onSubmit) {
      const result = await step.onSubmit(formData)
      if (result.success) {
        nextStep()
      } else {
        alert(result.message)
      }
    } else {
      nextStep()
    }
  }

  const StepComponent = steps[currentStep].component

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <StepComponent
          formData={formData}
          handleInputChange={handleInputChange}
        />
        {currentStep > 0 && (
          <button type="button" onClick={prevStep}>
            Back
          </button>
        )}
        <button type="submit">
          {currentStep < steps.length - 1 ? 'Next' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default MultiStepForm
