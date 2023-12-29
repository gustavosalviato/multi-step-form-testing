import { UseFormContext } from '@/context/FormContext'
import { MultiStep } from '../MultiStep'
import { ContactForm, contactFormData } from './components/ContactForm'

export function ContactFormContainer() {
  const { onNextStep, setFormData, step } = UseFormContext()

  async function handleSubmitContactForm(data: contactFormData) {
    const { firstName, lastName, email, password, confirmPassword } = data
    setFormData((prevState) => ({
      ...prevState,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    }))

    onNextStep()
  }
  return (
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto space-y-3">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="text-zinc-400">
        Complete your contact information to proceed to the next step.
      </p>
      <MultiStep currentStep={step} />
      <ContactForm handleSubmitContactForm={handleSubmitContactForm} />
    </div>
  )
}
