import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { StepConnector } from './StepConnector'
import { StepConnectorProps } from './Steps.interface'

describe('StepConnector', () => {
  const props: StepConnectorProps = {
    active: false,
    prevActive: false,
    color: 'primary',
    variant: 'prominent',
    completed: false,
    elementPosition: 'first',
  }

  it('should render', () => {
    const tree = renderWithTheme(<StepConnector {...props} />)
    expect(tree).toMatchSnapshot()
  })
})
