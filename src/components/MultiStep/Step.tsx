import clsx from 'clsx'

interface StepProps {
  active: boolean
}

export function Step({ active }: StepProps) {
  return (
    <li
      className={clsx('h-1 rounded', {
        'bg-zinc-50': active,
        'bg-zinc-600': !active,
      })}
    />
  )
}
