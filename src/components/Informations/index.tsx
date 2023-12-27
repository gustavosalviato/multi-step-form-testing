import { UseFormContext } from '@/context/FormContext'
import { Button } from '../Button'
import { FormEvent } from 'react'

export function Informations() {
  const { formData, onPreviousStep } = UseFormContext()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onPreviousStep()
  }

  return (
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto space-y-3">
      <h2 className="text-center items-center text-2xl font-bold">
        Informations
      </h2>
      <p className="text-zinc-400">
        You can view all the information you provide at each step here.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 rounded-md p-6 bg-zinc-800 w-full border border-zinc-600"
      >
        <pre>
          <code>{JSON.stringify(formData, null, 2)}</code>
        </pre>

        <Button variant="primary" title="Finish" />
      </form>
    </div>
  )
}
