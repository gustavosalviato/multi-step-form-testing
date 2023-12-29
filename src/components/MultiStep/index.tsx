import { Step } from './Step'

interface MultiStepProps {
  currentStep?: number
  size?: number
}

export function MultiStep({ currentStep = 2, size = 4 }: MultiStepProps) {
  const sizeToString = size.toString()

  return (
    <div className="w-full">
      <span className="text-sm text-zinc-400">{`Step ${currentStep} of ${size}`}</span>

      <div className={`grid grid-cols-${sizeToString} gap-2 mt-2`}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </div>
    </div>
  )
}
