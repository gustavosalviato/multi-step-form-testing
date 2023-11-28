import { ComponentProps, ElementType } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  icon?: ElementType
}

export function Button({ title, icon: Icon, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="flex items-center justify-center gap-2 px-4 h-9 bg-gray-900 text-white font-medium rounded max-w-[7.5rem] w-full duration-300 transition-colors hover:bg-gray-700"
    >
      {title}
      {Icon && <Icon className="h-5 w-5" />}
    </button>
  )
}