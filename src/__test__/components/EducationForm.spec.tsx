import { render, screen, act, fireEvent, waitFor } from '@testing-library/react'
import { faker } from '@faker-js/faker'

import { EducationForm } from '@/components/EducationFormContainer/components/EducationForm'

const handleSubmitEducationForm = jest.fn()

function makeSut() {
  render(
    <EducationForm handleSubmitEducationForm={handleSubmitEducationForm} />,
  )
}

describe('Education Form', () => {
  it('should render form with correct inputs', () => {
    makeSut()

    const universityInput = screen.getByRole('textbox', {
      name: 'University',
    })

    const courseInput = screen.getByRole('textbox', {
      name: 'Course',
    })

    expect(universityInput).toBeVisible()
    expect(courseInput).toBeVisible()
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
      expect(screen.getByText(/university is required./i)).toBeVisible()
      expect(screen.getByText(/degree is required./i)).toBeVisible()
    })
  })

  it('should type form inputs and submit form', async () => {
    makeSut()

    const mockUniversity = faker.location.street()
    const mockCourse = faker.commerce.department()

    const universityInput = screen.getByRole('textbox', {
      name: 'University',
    })

    const courseInput = screen.getByRole('textbox', {
      name: 'Course',
    })

    const submitButton = screen.getByRole('button', {
      name: /next/i,
    })

    act(() => {
      fireEvent.change(universityInput, {
        target: {
          value: mockUniversity,
        },
      })

      fireEvent.change(courseInput, {
        target: {
          value: mockCourse,
        },
      })
    })

    await waitFor(() => {
      expect(universityInput).toHaveValue(mockUniversity)
      expect(courseInput).toHaveValue(mockCourse)
    })

    act(() => {
      fireEvent.click(submitButton)
    })

    await waitFor(() => {
      expect(handleSubmitEducationForm).toHaveBeenCalledTimes(1)
      expect(handleSubmitEducationForm).toHaveBeenCalledWith(
        {
          university: mockUniversity,
          course: mockCourse,
        },
        expect.anything(),
      )
    })
  })
})
