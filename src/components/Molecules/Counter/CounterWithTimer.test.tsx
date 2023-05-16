import React from 'react'
import { CounterWithTimer } from '@/components/Molecules/Counter/CounterWithTimer'
import { renderWithTheme } from '@/testRenderer'

describe('CounterWithTimer', () => {
  it('should render', () => {
    const tree = renderWithTheme(<CounterWithTimer from={new Date(0)} toUTC={new Date(0).toUTCString()} />)
    expect(tree).toMatchSnapshot()
  })
})
