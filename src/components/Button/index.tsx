import { ComponentProps, ElementType } from 'react'

import clsx from 'clsx'

type ButtonProps = ComponentProps<'button'> & {
  icon?: ElementType
  variant: 'primary' | 'secondary'
}

export function Button({ title, icon: Icon, variant, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'flex items-center justify-center gap-2 px-4 h-9  font-medium rounded max-w-[7.5rem] w-full duration-300 transition-colors ',
        {
          'bg-teal-500 hover:bg-teal-700 text-zinc-800': variant === 'primary',
          'text-teal-500 hover:text-teal-700 hover:underline':
            variant === 'secondary',
        },
      )}
    >
      {title}
      {Icon && <Icon className="h-4 w-4" />}
    </button>
  )
}
