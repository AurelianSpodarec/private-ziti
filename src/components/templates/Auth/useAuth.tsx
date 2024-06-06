import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import helperAuth from './_controllers/helperAuth'


// type AuthMethod = "email" | "phone"

interface IAuthState {
  authMethod: string,
  step: any,
  formData: Record<string, boolean>,
  errors: any[],
}

export const useAuth = (): IAuthState => {
  const [authMethod, setAuthMethod] = useState<string>("checkEmail")
  // const [stepID, setStepID] = useState<string>("checkEmail") // refactor this later

  const [step, setStep] = useState(helperAuth.getController(authMethod))
  const [errors, setErrors] = useState<any[]>([])
  const [formData, setFormData] = useState<Record<string, any>>({
    firstName: "John",
    lastName: "Smith",
    dob: "1979-09-22",
    email: "",
    pwd: "QWEqwe123",
    marketingOptOut: false,
    reference: "",
    phone: "",
    verificationCode: "",
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleAuthMethodSelection = (method: string) => {
    setAuthMethod(method)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (step?.onSubmit) {
      const result = await step?.onSubmit(formData)
      console.log("res", result)
      if (result.next) {
        console.log("fire")
        setStep(result.next)
        setAuthMethod(result.next)
        console.log("s", result.next)
      } else {
        setErrors(result.errors)
        console.log("handleSubmit", result)
      }
    }
  }

  useEffect(() => {
    setStep(helperAuth.getController(authMethod))
  }, [authMethod])

  return {
    authMethod,
    step,
    formData,
    errors,
    setAuthMethod,
    handleSubmit,
    handleInputChange,
    handleAuthMethodSelection,
  }
}
