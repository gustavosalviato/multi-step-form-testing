import { ComponentProps } from 'react'

type InputTextProps = ComponentProps<'input'>

export function InputText({ ...rest }: InputTextProps) {
  return (
    <div className="flex items-center w-full px-3 py-2 gap-2 border border-gray-200 rounded focus-within:border-gray-900 focus-within:ring-4 focus-within:ring-gray-50">
      <input
        {...rest}
        className="border-0 bg-transparent p-0 outline-none placeholder:text-slate-400 text-black text-sm w-full"
      />
    </div>
  )
}
