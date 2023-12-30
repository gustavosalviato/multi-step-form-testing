import { MultiStep } from '@/components/MultiStep'
import { render, screen } from '@testing-library/react'

describe('Multi Step', () => {
  it('should render with default props correctly', () => {
    render(<MultiStep />)

    const list = screen.getByRole('list')
    const listItems = screen.getAllByRole('listitem')
    const textElem = screen.getByText(/step 2 of 4/i)

    expect(list).toBeVisible()
    expect(listItems).toHaveLength(4)
    expect(textElem).toBeVisible()
  })

  it('should render with custom props correctly', () => {
    render(<MultiStep currentStep={3} size={3} />)

    const list = screen.getByRole('list')
    const listItems = screen.getAllByRole('listitem')
    const textElem = screen.getByText(/step 3 of 3/i)

    expect(list).toBeVisible()
    expect(listItems).toHaveLength(3)
    expect(textElem).toBeVisible()
  })
})
