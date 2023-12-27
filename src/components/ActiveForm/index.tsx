/* eslint-disable no-lone-blocks */
'use client'

import { ContactForm } from '../ContactForm'
import { EducationForm } from '../EducationForm'
import { AddressForm } from '../AdressForm'
import { UseFormContext } from '@/context/FormContext'

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
      return <AddressForm />

    default:
      return null
      break
  }
}
