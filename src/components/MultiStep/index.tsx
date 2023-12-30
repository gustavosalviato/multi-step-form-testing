import clsx from 'clsx'

import { Step } from './Step'

interface MultiStepProps {
  currentStep?: number
  size?: number
}

export function MultiStep({ currentStep = 2, size = 4 }: MultiStepProps) {
  return (
    <div className="w-full">
      <span className="text-sm text-zinc-400">{`Step ${currentStep} of ${size}`}</span>

      <ul
        className={clsx('grid gap-2 mt-2', {
          'grid-cols-4': size === 4,
          'grid-cols-3': size === 3,
        })}
      >
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </ul>
    </div>
  )
}
