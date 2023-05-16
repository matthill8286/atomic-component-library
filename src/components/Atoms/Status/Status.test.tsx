import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { Status } from './Status'

describe('Status', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Status type={'primary'}>1</Status>)
    expect(tree).toMatchSnapshot()
  })
})
