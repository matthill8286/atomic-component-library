import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { useInterval } from '@/utils/useInterval'

describe('useInterval(...)', () => {
  let container

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container = null
  })

  it('should call the function 2 times', () => {
    jest.useFakeTimers()
    const callback = jest.fn()
    const TestComponent: React.FC<{ callback: () => unknown }> = () => {
      useInterval(callback, 1000)
      return <div>Test</div>
    }

    act(() => {
      ReactDOM.render(<TestComponent callback={callback} />, container)
    })

    expect(callback).not.toHaveBeenCalled()
    jest.advanceTimersByTime(2000)
    expect(callback).toHaveBeenCalledTimes(2)
  })
})
