import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { InfoText } from './InfoText'

describe('InfoText', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<InfoText scale="small" />)
    expect(tree).toMatchSnapshot()
  })
})
