import { UseFormContext } from '@/context/FormContext'
import { Button } from '../Button/index'
import { InputText } from '../InputText/index'

export function BioForm() {
  const { formData } = UseFormContext()

  console.log(formData)

  return (
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto space-y-3">
      <h2 className="text-center items-center text-2xl font-bold">Address</h2>
      <p className="text-zinc-400">
        Complete your education information to proceed to the next step.
      </p>
      <form className="flex flex-col space-y-4 rounded-md p-6 bg-zinc-800 w-full border border-zinc-600">
        <fieldset className="flex flex-col gap-1">
          <label htmlFor="aboutMe" className="text-sm">
            About me
          </label>
          <InputText id="aboutMe" />
        </fieldset>

        {/* <footer className="flex justify-end gap-2">
          <Button title="Previous" type="button" variant="secondary" />
          <Button title="Next" type="submit" variant="primary" />
        </footer> */}
      </form>
    </div>
  )
}
