import { Button } from '@/components/Button'
import { InputText } from '@/components/InputText'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldErrorMessage } from '../../FieldErrorMessage'

import { z } from 'zod'
import { UseFormContext } from '@/context/FormContext'

const educationFormValidationSchema = z.object({
  university: z.string().min(3, {
    message: 'university is required.',
  }),
  course: z.string().min(3, {
    message: 'degree is required.',
  }),
})

export type educationFormData = z.infer<typeof educationFormValidationSchema>

interface EducationFormProps {
  handleSubmitEducationForm: (data: educationFormData) => void
}

export function EducationForm({
  handleSubmitEducationForm,
}: EducationFormProps) {
  const { onPreviousStep, formData } = UseFormContext()

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

  return (
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

        {errors.course && <FieldErrorMessage error={errors.course.message!} />}
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
  )
}
