import { render, screen, act, fireEvent, waitFor } from '@testing-library/react'
import { faker } from '@faker-js/faker'

import { ContactForm } from '../../components/ContactFormContainer/components/ContactForm'

const handleSubmitContactForm = jest.fn()

function makeSut() {
  render(<ContactForm handleSubmitContactForm={handleSubmitContactForm} />)
}

describe('Contact Form', () => {
  it('should render form with correct inputs', () => {
    makeSut()

    const firstNameInput = screen.getByRole('textbox', {
      name: 'First name',
    })

    const lastNameInput = screen.getByRole('textbox', {
      name: 'Last name',
    })

    const emailInput = screen.getByRole('textbox', {
      name: 'Email',
    })

    const passwordInput = screen.getByTestId('password-input')
    const confirmPassword = screen.getByTestId('confirm-password-input')

    expect(firstNameInput).toBeVisible()
    expect(lastNameInput).toBeVisible()
    expect(emailInput).toBeVisible()
    expect(passwordInput).toBeVisible()
    expect(confirmPassword).toBeVisible()
  })

  it('should show error messages when fields does not matches with the validation schema', async () => {
    makeSut()

    const submitButton = screen.getByRole('button', {
      name: /next/i,
    })

    act(() => {
      fireEvent.click(submitButton)
    })

    await waitFor(() => {
      expect(screen.getByText(/first name is required./i)).toBeVisible()
      expect(screen.getByText(/last name is required./i)).toBeVisible()
      expect(screen.getByText(/field must be a valid email./i)).toBeVisible()
      expect(
        screen.getByText(/password must be at least 6 characters./i),
      ).toBeVisible()
      expect(
        screen.getByText(/confirm password must be at least 6 characters/i),
      ).toBeVisible()
    })
  })

  it('should type form inputs and submit form', async () => {
    makeSut()

    const mockFirstName = faker.person.firstName()
    const mockLastName = faker.person.lastName()
    const mockEmail = faker.internet.email()
    const mockPassword = faker.internet.password()
    const mockConfirmPassword = mockPassword

    const firstNameInput = screen.getByRole('textbox', {
      name: 'First name',
    })

    const lastNameInput = screen.getByRole('textbox', {
      name: 'Last name',
    })

    const emailInput = screen.getByRole('textbox', {
      name: 'Email',
    })

    const passwordInput = screen.getByTestId('password-input')
    const confirmPasswordInput = screen.getByTestId('confirm-password-input')

    const submitButton = screen.getByRole('button', {
      name: /next/i,
    })

    act(() => {
      fireEvent.change(firstNameInput, {
        target: {
          value: mockFirstName,
        },
      })

      fireEvent.change(lastNameInput, {
        target: {
          value: mockLastName,
        },
      })

      fireEvent.change(emailInput, {
        target: {
          value: mockEmail,
        },
      })

      fireEvent.change(passwordInput, {
        target: {
          value: mockPassword,
        },
      })

      fireEvent.change(confirmPasswordInput, {
        target: {
          value: mockConfirmPassword,
        },
      })
    })

    await waitFor(() => {
      expect(firstNameInput).toHaveValue(mockFirstName)
      expect(lastNameInput).toHaveValue(mockLastName)
      expect(emailInput).toHaveValue(mockEmail)
      expect(passwordInput).toHaveValue(mockPassword)
      expect(confirmPasswordInput).toHaveValue(mockConfirmPassword)
    })

    act(() => {
      fireEvent.click(submitButton)
    })

    await waitFor(() => {
      expect(handleSubmitContactForm).toHaveBeenCalledTimes(1)
      expect(handleSubmitContactForm).toHaveBeenCalledWith(
        {
          firstName: mockFirstName,
          lastName: mockLastName,
          email: mockEmail,
          password: mockPassword,
          confirmPassword: mockPassword,
        },
        expect.anything(),
      )
    })
  })
})
