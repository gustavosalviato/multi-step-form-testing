import Image from 'next/image'
import { Button } from './Button/index'
import { InputText } from './InputText/index'

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <form className="flex flex-col space-y-4 rounded-sm p-6 bg-zinc-800 max-w-2xl w-full">
        <h2 className="text-center items-center text-2xl font-bold">Contact</h2>

        <fieldset className="flex flex-col gap-1">
          <label htmlFor="firstName" className="text-sm">
            First name
          </label>
          <InputText id="firstName" />
        </fieldset>

        <fieldset className="flex flex-col gap-1">
          <label htmlFor="lastName" className="text-sm">
            Last name
          </label>
          <InputText id="lastName" />
        </fieldset>

        <fieldset className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <InputText id="password" />
        </fieldset>

        <fieldset className="flex flex-col gap-1">
          <label htmlFor="confirmPassword" className="text-sm">
            Confirm password
          </label>
          <InputText id="confirmPassword" />
        </fieldset>

        <footer className="flex justify-end">
          <Button title="Next" type="submit" />
        </footer>
      </form>
    </div>
  )
}
