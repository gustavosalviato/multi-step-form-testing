/* eslint-disable no-lone-blocks */
'use client'

import { UseFormContext } from '@/app/context/FormContext'
import { ContactForm } from '../ContactForm/index'
import { EducationForm } from '../EducationForm/index'
import { BioForm } from '../BioForm/index'

export function ActiveForm() {
  const { step } = UseFormContext()

  switch (step) {
    case 1:
      return <ContactForm />
      break
    case 2:
      return <EducationForm />
      break
    case 3:
      return <BioForm />

    default:
      return null
      break
  }
}
