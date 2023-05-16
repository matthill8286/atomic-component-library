import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { Steps } from './Steps'
import { StepsProps } from './Steps.interface'

describe('Steps', () => {
  const props: StepsProps = {
    activeStep: 0,
    completedStep: -1,
  }

  it('should render', () => {
    const tree = renderWithTheme(<Steps {...props} />)
    expect(tree).toMatchSnapshot()
  })
})
