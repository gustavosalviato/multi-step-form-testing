import { render, screen } from '@testing-library/react'
import { ContactFormContainer } from '@/components/ContactFormContainer'

function makeSut() {
  render(<ContactFormContainer />)
}

describe('Contact Form Container', () => {
  it('should render form container correctly', () => {
    makeSut()

    const headingElem = screen.getByRole('heading', {
      name: /contact/i,
    })

    const descriptionElem = screen.getByText(
      /complete your contact information to proceed to the next step./i,
    )

    expect(headingElem).toBeVisible()
    expect(descriptionElem).toBeVisible()
  })
})
