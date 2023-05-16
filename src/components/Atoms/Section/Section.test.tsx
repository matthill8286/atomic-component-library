import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { Section } from './Section'

describe('Divider', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Section color="primary" />)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with paddings', () => {
    const tree = renderWithTheme(
      <Section
        color="primary"
        paddingTop={{ mobile: 'xs', tablet: 'lg' }}
        paddingBottom={{ mobile: 'lg', desktop: 'xs' }}
      />,
    )
    expect(tree).toMatchSnapshot()
  })
})
