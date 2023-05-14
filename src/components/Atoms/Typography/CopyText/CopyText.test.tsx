import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { CopyText } from './CopyText'

describe('CopyText', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<CopyText>Lorem Ipsum</CopyText>)
    expect(tree).toMatchSnapshot()
  })
})
