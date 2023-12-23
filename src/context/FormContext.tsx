'use client'

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

import { FormData } from '@/types/form-data'

interface FormContextProps {
  step: number
  onNextStep(): void
  onPreviousStep(): void
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
}

interface FormContextProviderProps {
  children: ReactNode
}

export const FormContext = createContext({} as FormContextProps)

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [formData, setFormData] = useState({} as FormData)

  const [step, setStep] = useState(1)

  function onNextStep() {
    setStep((prevState) => prevState + 1)
  }

  function onPreviousStep() {
    setStep((prevState) => prevState - 1)
  }

  return (
    <FormContext.Provider
      value={{ step, onNextStep, onPreviousStep, formData, setFormData }}
    >
      {children}
    </FormContext.Provider>
  )
}

export const UseFormContext = () => useContext(FormContext)
