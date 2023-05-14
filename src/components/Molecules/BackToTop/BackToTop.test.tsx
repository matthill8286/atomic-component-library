import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  it('renders corretly', () => {
    const tree = renderWithTheme(<BackToTop visible="VISIBLE" />)
    expect(tree).toMatchSnapshot()
  })
})
