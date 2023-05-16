import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('renders basic', () => {
    const tree = renderWithTheme(<ProgressBar value={12} />)
    expect(tree).toMatchSnapshot()
  })
})
