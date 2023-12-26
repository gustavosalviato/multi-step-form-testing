import { forwardRef, InputHTMLAttributes } from 'react'

type InputTextProps = InputHTMLAttributes<HTMLInputElement>

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ ...props }: InputTextProps, ref) => {
    return (
      <div className="flex items-center w-full px-3 py-2 gap-2 border-2 border-transparent rounded-md focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-teal-500/20 bg-zinc-900">
        <input
          ref={ref}
          {...props}
          className="border-0 bg-transparent p-0 outline-none placeholder:text-slate-400 w-full text-base"
        />
      </div>
    )
  },
)

InputText.displayName = 'InputText'
