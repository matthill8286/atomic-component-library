import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { ButtonGroup } from './ButtonGroup'

describe('ButtonGroup', () => {
  it('renders correctly', () => {
    const component = renderWithTheme(<ButtonGroup>Hello</ButtonGroup>)
    expect(component).toMatchSnapshot()
  })
})
