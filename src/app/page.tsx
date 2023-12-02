import { AddressForm } from '@/components/AddressForm/index'
import { BioForm } from '@/components/BioForm/index'
import { ContactForm } from '@/components/ContactForm/index'
import { EducationForm } from '@/components/EducationForm/index'

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      {/* <ContactForm /> */}
      {/* <EducationForm /> */}
      <BioForm />
    </div>
  )
}
