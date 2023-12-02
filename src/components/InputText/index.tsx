import { ComponentProps } from 'react'

type InputTextProps = ComponentProps<'input'>

export function InputText({ ...rest }: InputTextProps) {
  return (
    <div className="flex items-center w-full px-3 py-2 gap-2 border rounded-md focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-teal-500/20">
      <input
        {...rest}
        className="border-0 bg-transparent p-0 outline-none placeholder:text-slate-400 text-sm w-full"
      />
    </div>
  )
}
