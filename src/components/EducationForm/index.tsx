import { Button } from '../Button/index'
import { InputText } from '../InputText/index'

export function EducationForm() {
  return (
    <form className="flex flex-col space-y-4 rounded-md p-6 bg-zinc-800 max-w-2xl w-full">
      <h2 className="text-center items-center text-2xl font-bold">Education</h2>

      <fieldset className="flex flex-col gap-1">
        <label htmlFor="university" className="text-sm">
          University
        </label>
        <InputText id="university" />
      </fieldset>

      <fieldset className="flex flex-col gap-1">
        <label htmlFor="degree" className="text-sm">
          Degree
        </label>
        <InputText id="degree" />
      </fieldset>

      <footer className="flex justify-end">
        <Button title="Next" type="submit" variant="primary" />
      </footer>
    </form>
  )
}
