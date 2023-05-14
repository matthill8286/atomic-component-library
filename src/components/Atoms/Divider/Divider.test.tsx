import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { Divider } from './Divider'

describe('Divider', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Divider color="primary" />)
    expect(tree).toMatchSnapshot()
  })
})
