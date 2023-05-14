import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { Label } from './Label'

describe('<Label> Atom', () => {
  test('renders correctly', () => {
    const tree = renderWithTheme(<Label htmlFor="filed-1">A label</Label>)
    expect(tree).toMatchSnapshot()
  })
})
