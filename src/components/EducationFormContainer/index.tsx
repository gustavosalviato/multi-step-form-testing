import { UseFormContext } from '@/context/FormContext'
import { MultiStep } from '../MultiStep'
import { EducationForm, educationFormData } from './components/EducationForm'

export function EducationFormContainer() {
  const { setFormData, onNextStep, step } = UseFormContext()

  async function handleSubmitEducationForm(data: educationFormData) {
    const { course, university } = data

    setFormData((prevState) => ({
      ...prevState,
      university,
      course,
    }))
    onNextStep()
  }

  return (
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto space-y-3">
      <h2 className="text-center items-center text-2xl font-bold">Education</h2>
      <p className="text-zinc-400">
        Complete your education information to proceed to the next step.
      </p>

      <MultiStep currentStep={step} />
      <EducationForm handleSubmitEducationForm={handleSubmitEducationForm} />
    </div>
  )
}
