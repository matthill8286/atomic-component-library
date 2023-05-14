import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { Spacer } from './Spacer'

describe('Spacer', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Spacer size={'md'} />)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly in vertical direction', () => {
    const tree = renderWithTheme(<Spacer direction="vertical" size={'md'} />)
    expect(tree).toMatchSnapshot()
  })
})
