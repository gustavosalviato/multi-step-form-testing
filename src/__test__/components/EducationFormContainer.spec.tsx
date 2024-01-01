import { render, screen } from '@testing-library/react'
import { EducationFormContainer } from '@/components/EducationFormContainer'

function makeSut() {
  render(<EducationFormContainer />)
}

describe('Education Form Container', () => {
  it('should render form container correctly', () => {
    makeSut()

    const headingElem = screen.getByRole('heading', {
      name: /education/i,
    })

    const descriptionElem = screen.getByText(
      /Complete your education information to proceed to the next step./i,
    )

    expect(headingElem).toBeVisible()
    expect(descriptionElem).toBeVisible()
  })
})
