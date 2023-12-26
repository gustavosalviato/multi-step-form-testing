'use client'

import { Button } from '../Button'
import { InputText } from '../InputText'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FieldErrorMessage } from '../FieldErrorMessage'

import { ArrowRight } from 'lucide-react'
import { UseFormContext } from '@/context/FormContext'

const contactFormValidationSchema = z
  .object({
    firstName: z.string().min(3, {
      message: 'first name is required.',
    }),
    lastName: z.string().min(3, {
      message: 'first name is required.',
    }),
    password: z.string().min(6, {
      message: 'password must be at least 6 characters.',
    }),
    confirmPassword: z.string().min(6, {
      message: 'confirm password must be at least 6 characters',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'passwords does not matches.',
    path: ['confirmPassword'],
  })

type contactFormData = z.infer<typeof contactFormValidationSchema>

export function ContactForm() {
  const { onNextStep, setFormData } = UseFormContext()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<contactFormData>({
    resolver: zodResolver(contactFormValidationSchema),
  })

  async function handleSubmitContactForm(data: contactFormData) {
    const { firstName, lastName, password, confirmPassword } = data
    setFormData({
      firstName,
      lastName,
      password,
      confirmPassword,
    })

    onNextStep()
  }
  return (
    <div className="flex flex-col items-start w-full max-w-4xl mx-auto space-y-3">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="text-zinc-400">
        Complete your contact information to proceed to the next step.
      </p>

      <form
        onSubmit={handleSubmit(handleSubmitContactForm)}
        className="flex flex-col space-y-4 rounded-md p-6 bg-zinc-800 w-full border border-zinc-600"
      >
        <fieldset className="flex flex-col gap-1">
          <label htmlFor="firstName" className="text-base">
            First name
          </label>
          <InputText id="firstName" {...register('firstName')} />

          {errors.firstName && (
            <FieldErrorMessage error={errors.firstName.message!} />
          )}
        </fieldset>

        <fieldset className="flex flex-col gap-1">
          <label htmlFor="lastName" className="text-base">
            Last name
          </label>
          <InputText id="lastName" {...register('lastName')} />
          {errors.lastName && (
            <FieldErrorMessage error={errors.lastName.message!} />
          )}
        </fieldset>

        <fieldset className="flex flex-col gap-1">
          <label htmlFor="password" className="text-base">
            Password
          </label>
          <InputText type="password" id="password" {...register('password')} />

          {errors.password && (
            <FieldErrorMessage error={errors.password.message!} />
          )}
        </fieldset>

        <fieldset className="flex flex-col gap-1">
          <label htmlFor="confirmPassword" className="text-base">
            Confirm password
          </label>
          <InputText
            type="password"
            id="confirmPassword"
            {...register('confirmPassword', {
              required: true,
            })}
          />
          {errors.confirmPassword && (
            <FieldErrorMessage error={errors.confirmPassword.message!} />
          )}
        </fieldset>

        <footer className="flex justify-end">
          <Button
            title="Next"
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            icon={ArrowRight}
          />
        </footer>
      </form>
    </div>
  )
}
