import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import helperAuth from './_controllers/helperAuth'
import useAuth from './_context/useAuth'
import SocialLoginList from './_components/SocialLoginList'

function AuthForm () {
  const {
    formData,
    setFormData,
    errors,
    setErrors,
    step,

    authMethod,
    handleSubmit,
    handleInputChange,
    handleAuthMethodSelection
  } = useAuth()

  const StepComponent = step?.component
  return (
    <div>

      <header className="flex justify-between border-b p-6">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentcolor"
            strokeWidth="3"
            display="block"
            overflow="visible"
            viewBox="0 0 32 32"
            style={{ height: 16, width: 16 }}
          >
            <path d="M6 6l20 20m0-20L6 26"></path>
          </svg>
        </button>
        <span className="font-bold text-md">Log in or sign up</span>
        <div></div>
      </header>

      <section className="p-6">
        <form onSubmit={handleSubmit}>
          {StepComponent && (
            <>
              <StepComponent formData={formData} errors={errors} handleInputChange={handleInputChange} />
              <SocialLoginList authMethod={authMethod} handleAuthMethodSelection={handleAuthMethodSelection} />
            </>
          )}
        </form>
      </section>
    </div >
  )
}

export default AuthForm
