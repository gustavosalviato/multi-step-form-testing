import { FieldErrorMessage } from '@/components/FieldErrorMessage'
import { render, screen } from '@testing-library/react'

function makeSut() {
  render(<FieldErrorMessage error="fake error message" />)
}

describe('Field Erro Message', () => {
  it('should show the correctly  message error', () => {
    makeSut()

    const errorMessage = screen.getByText(/fake error message/i)

    expect(errorMessage).toBeVisible()
  })
})
