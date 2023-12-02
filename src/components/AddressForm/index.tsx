import { Button } from '../Button/index'
import { InputText } from '../InputText/index'

export function AddressForm() {
  return (
    <form className="flex flex-col space-y-4 rounded-sm p-6 bg-zinc-800 max-w-2xl w-full">
      <h2 className="text-center items-center text-2xl font-bold">Address</h2>

      <fieldset className="flex flex-col gap-1">
        <label htmlFor="streetAddress" className="text-sm">
          Street address
        </label>
        <InputText id="streetAddress" />
      </fieldset>

      <fieldset className="flex flex-col gap-1">
        <label htmlFor="country" className="text-sm">
          Country
        </label>
        <InputText id="country" />
      </fieldset>

      <fieldset className="flex flex-col gap-1">
        <label htmlFor="state" className="text-sm">
          State
        </label>
        <InputText id="state" />
      </fieldset>

      <fieldset className="flex flex-col gap-1">
        <label htmlFor="city" className="text-sm">
          City
        </label>
        <InputText id="city" />
      </fieldset>

      <fieldset className="flex flex-col gap-1">
        <label htmlFor="neibourhood" className="text-sm">
          Neibourhood
        </label>
        <InputText id="neibourhood" />
      </fieldset>

      <fieldset className="flex flex-col gap-1">
        <label htmlFor="zipCode" className="text-sm">
          ZIP code
        </label>
        <InputText id="zipCode" />
      </fieldset>

      <footer className="flex justify-end gap-2">
        <Button title="Previous" type="button" variant="secondary" />
        <Button title="Next" type="submit" variant="primary" />
      </footer>
    </form>
  )
}
