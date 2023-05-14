import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { StepIcon } from './StepIcon'
import { StepIconProps } from './Steps.interface'

describe('StepIcon', () => {
  const props: StepIconProps = {
    active: true,
    completed: true,
    color: 'primary',
    variant: 'prominent',
    stepNumber: '1',
  }

  it('should render', () => {
    const tree = renderWithTheme(<StepIcon {...props} />)
    expect(tree).toMatchSnapshot()
  })
})
