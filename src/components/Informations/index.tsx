import { FormEvent } from 'react'
import { UseFormContext } from '@/context/FormContext'
import { Button } from '../Button'
import { MultiStep } from '../MultiStep'

export function Informations() {
  const { formData, onPreviousStep, step, changeStep, setFormData } =
    UseFormContext()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    setFormData({} as any)
    changeStep(1)
  }

  return (
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto space-y-3">
      <h2 className="text-center items-center text-2xl font-bold">
        Informations
      </h2>
      <p className="text-zinc-400">
        You can view all the information you provide at each step here.
      </p>

      <MultiStep currentStep={step} />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 rounded-md p-6 bg-zinc-800 w-full border border-zinc-600"
      >
        <pre>
          <code>{JSON.stringify(formData, null, 2)}</code>
        </pre>

        <div className="flex items-center justify-end">
          <Button
            onClick={onPreviousStep}
            variant="secondary"
            title="Previous"
          />
          <Button variant="primary" title="Finish" />
        </div>
      </form>
    </div>
  )
}
