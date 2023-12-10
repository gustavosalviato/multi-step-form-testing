import { Button } from '../Button/index'
import { InputText } from '../InputText/index'

export function BioForm() {
  return (
    <form className="flex flex-col space-y-4 rounded-md p-6 bg-zinc-800 max-w-2xl w-full">
      <h2 className="text-center items-center text-2xl font-bold">About</h2>

      <fieldset className="flex flex-col gap-1">
        <label htmlFor="aboutMe" className="text-sm">
          About me
        </label>
        <InputText id="aboutMe" />
      </fieldset>

      <footer className="flex justify-end gap-2">
        <Button title="Previous" type="button" variant="secondary" />
        <Button title="Next" type="submit" variant="primary" />
      </footer>
    </form>
  )
}
