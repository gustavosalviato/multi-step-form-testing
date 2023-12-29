'use client'

import { Button } from '../../Button'
import { FieldErrorMessage } from '../../FieldErrorMessage'
import { InputText } from '../../InputText'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { UseFormContext } from '@/context/FormContext'

const contactFormValidationSchema = z
  .object({
    firstName: z.string().min(3, {
      message: 'first name is required.',
    }),
    lastName: z.string().min(3, {
      message: 'last name is required.',
    }),
    email: z.string().email({
      message: 'field must be a valid email.',
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

export type contactFormData = z.infer<typeof contactFormValidationSchema>

interface ContactFormProps {
  handleSubmitContactForm(data: contactFormData): void
}

export function ContactForm({ handleSubmitContactForm }: ContactFormProps) {
  const { formData } = UseFormContext()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<contactFormData>({
    resolver: zodResolver(contactFormValidationSchema),
    defaultValues: {
      ...formData,
    },
  })
  return (
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
        <label htmlFor="email" className="text-base">
          Email
        </label>
        <InputText type="email" id="email" {...register('email')} />
        {errors.email && <FieldErrorMessage error={errors.email.message!} />}
      </fieldset>

      <fieldset className="flex flex-col gap-1">
        <label htmlFor="password" className="text-base">
          Password
        </label>
        <InputText
          type="password"
          id="password"
          data-testid="password-input"
          {...register('password')}
        />

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
          data-testid="confirm-password-input"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <FieldErrorMessage error={errors.confirmPassword.message!} />
        )}
      </fieldset>

      <Button
        title="Next"
        type="submit"
        variant="primary"
        disabled={isSubmitting}
      />
    </form>
  )
}
