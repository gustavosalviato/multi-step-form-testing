import { UseFormContext } from '@/context/FormContext'
import { Button } from '../Button'
import { InputText } from '../InputText'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldErrorMessage } from '../FieldErrorMessage'

const addressFormValidationSchema = z.object({
  city: z.string().min(3, {
    message: 'city is required.',
  }),
  state: z.string().min(3, {
    message: 'state is required.',
  }),
  neighbourhood: z.string().min(3, {
    message: 'neighbourhood is required.',
  }),
  zipCode: z.string().min(3, {
    message: 'zip-code is required.',
  }),
})

type addressFormData = z.infer<typeof addressFormValidationSchema>

export function AddressForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<addressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
  })

  const { setFormData, onNextStep, onPreviousStep } = UseFormContext()

  async function handleSubmitAddressForm(data: addressFormData) {
    const { city, state, neighbourhood, zipCode } = data

    setFormData((prevState) => ({
      ...prevState,
      city,
      state,
      neighbourhood,
      zipCode,
    }))

    onNextStep()
  }

  return (
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto space-y-3">
      <h2 className="text-center items-center text-2xl font-bold">Address</h2>
      <p className="text-zinc-400">
        Complete your education information to proceed to the next step.
      </p>
      <form
        onSubmit={handleSubmit(handleSubmitAddressForm)}
        className="flex flex-col space-y-4 rounded-md p-6 bg-zinc-800 w-full border border-zinc-600"
      >
        <fieldset className="flex flex-col gap-1">
          <label htmlFor="city">City</label>
          <InputText id="city" {...register('city')} />

          {errors.city && <FieldErrorMessage error={errors.city.message!} />}
        </fieldset>

        <fieldset className="flex flex-col gap-1">
          <label htmlFor="state">State</label>
          <InputText id="state" {...register('state')} />
          {errors.state && <FieldErrorMessage error={errors.state.message!} />}
        </fieldset>

        <fieldset className="flex flex-col gap-1">
          <label htmlFor="neighbourhood">Neighbourhood</label>
          <InputText id="neighbourhood" {...register('neighbourhood')} />
          {errors.neighbourhood && (
            <FieldErrorMessage error={errors.neighbourhood.message!} />
          )}
        </fieldset>

        <fieldset className="flex flex-col gap-1">
          <label htmlFor="zipCode">Zip Code</label>
          <InputText type="number" id="zipCode" {...register('zipCode')} />

          {errors.zipCode && (
            <FieldErrorMessage error={errors.zipCode.message!} />
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
