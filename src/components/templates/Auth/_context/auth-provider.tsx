'use client'

import { ChangeEvent, FormEvent, createContext, useEffect, useState } from 'react'
import helperAuth from '../_controllers/helperAuth'

interface IAuthContext {
  children: React.ReactNode
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined)

function AuthProvider ({ children }: { children: React.ReactNode }) {
  const [authMethod, setAuthMethod] = useState<string>("checkEmail")
  const [step, setStep] = useState(helperAuth.getController(authMethod))
  const [errors, setErrors] = useState([])

  const [formData, setFormData] = useState<Record<string, any>>({
    email: ""
  })

  // ======================================================
  // Functions
  // ======================================================

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
      if (result.success) {
        setStep(result.next)
      } else {
        setErrors(result.errors)
      }
    }
  }

  // ======================================================
  // Use Effects
  // ======================================================

  useEffect(() => {
    setStep(helperAuth.getController(authMethod))
  }, [authMethod])

  // ======================================================
  // Other
  // ======================================================

  const readValues: any = {
    authMethod,

    step,
    setStep,

    formData,
    setFormData,
    errors,
    setErrors,

    handleSubmit,
    handleInputChange,
    handleAuthMethodSelection,

    children,
  }

  return (
    <AuthContext.Provider value={readValues}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider


// export const AuthProvider = ({ children }) => {
//   const [formData, setFormData] = useState<Record<string, any>>({
//     email: ""
//   })

//   const [step, setStep] = useState(helperAuth.getController(authMethod))
//   const [errors, setErrors] = useState([])

//   const getController = useCallback((controllerID) => {
//     return authController.find(item => item.id === controllerID);
//   }, []);

//   return (
//     <AuthContext.Provider value={{ authController, getController, fomData, step }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
