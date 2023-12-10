'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

interface FormContextProps {
  step: number
  onNextStep(): void
  onPreviousStep(): void
}

interface FormContextProviderProps {
  children: ReactNode
}

export const FormContext = createContext({} as FormContextProps)

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [step, setStep] = useState(1)

  function onNextStep() {
    setStep((prevState) => prevState + 1)
  }

  function onPreviousStep() {
    setStep((prevState) => prevState - 1)
  }

  return (
    <FormContext.Provider value={{ step, onNextStep, onPreviousStep }}>
      {children}
    </FormContext.Provider>
  )
}

export const UseFormContext = () => useContext(FormContext)
