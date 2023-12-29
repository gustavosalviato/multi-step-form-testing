/* eslint-disable no-lone-blocks */
'use client'

import { EducationForm } from '../EducationForm'
import { AddressForm } from '../AddressForm'
import { UseFormContext } from '@/context/FormContext'
import { Informations } from '../Informations'
import { ContactFormContainer } from '../ContactFormContainer'

export function ActiveForm() {
  const { step } = UseFormContext()

  switch (step) {
    case 1:
      return <ContactFormContainer />
      break
    case 2:
      return <EducationForm />
      break
    case 3:
      return <AddressForm />
    case 4:
      return <Informations />

    default:
      return null
      break
  }
}
