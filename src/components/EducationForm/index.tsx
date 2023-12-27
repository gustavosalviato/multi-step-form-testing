'use client'

import { Button } from '../Button/'
import { InputText } from '../InputText'

import { z } from 'zod'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldErrorMessage } from '../FieldErrorMessage'
import { UseFormContext } from '@/context/FormContext'

const educationFormValidationSchema = z.object({
  university: z.string().min(3, {
    message: 'university is required.',
  }),
  course: z.string().min(3, {
    message: 'degree is required.',
  }),
})

type educationFormData = z.infer<typeof educationFormValidationSchema>

export function EducationForm() {
  const { setFormData, onNextStep, onPreviousStep, formData } = UseFormContext()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<educationFormData>({
    resolver: zodResolver(educationFormValidationSchema),
    defaultValues: {
      ...formData,
    },
  })

  async function handleSubmitEducationForm(data: educationFormData) {
    const { course, university } = data

    setFormData((prevState) => ({
      ...prevState,
      university,
      course,
    }))
    onNextStep()
  }

  return (
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto space-y-3">
      <h2 className="text-center items-center text-2xl font-bold">Education</h2>
      <p className="text-zinc-400">
        Complete your education information to proceed to the next step.
      </p>
      <form
        onSubmit={handleSubmit(handleSubmitEducationForm)}
        className="flex flex-col space-y-4 rounded-md p-6 bg-zinc-800 w-full border border-zinc-600"
      >
        <fieldset className="flex flex-col gap-1">
          <label htmlFor="university">University</label>
          <InputText id="university" {...register('university')} />

          {errors.university && (
            <FieldErrorMessage error={errors.university.message!} />
          )}
        </fieldset>

        <fieldset className="flex flex-col gap-1">
          <label htmlFor="degree">Course</label>
          <InputText id="degree" {...register('course')} />

          {errors.course && (
            <FieldErrorMessage error={errors.course.message!} />
          )}
        </fieldset>

        <div className="flex items-center gap-2 justify-end">
          <Button
            title="Previous"
            type="button"
            className="w-[7.5rem]"
            variant="secondary"
            onClick={onPreviousStep}
          />

          <Button
            title="Next"
            type="submit"
            className="w-[7.5rem]"
            variant="primary"
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  )
}
