import { Button } from '@/components/Button'
import { act, fireEvent, render, screen } from '@testing-library/react'

const handleButtonClick = jest.fn()

describe('Button', () => {
  it('should render with correctly props', async () => {
    render(
      <Button
        variant="primary"
        title="Confirm"
        type="button"
        onClick={handleButtonClick}
      />,
    )

    const buttonElem = screen.getByRole('button', {
      name: /confirm/i,
    })

    expect(buttonElem).toBeVisible()
    expect(buttonElem).toHaveAttribute('type', 'button')

    act(() => {
      fireEvent.click(buttonElem)
    })

    expect(handleButtonClick).toHaveBeenCalled()
    expect(handleButtonClick).toHaveBeenCalledTimes(1)
  })
})
