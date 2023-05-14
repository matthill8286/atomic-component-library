import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders large size', () => {
    const tree = renderWithTheme(
      <Counter
        days={11}
        hours={0}
        minutes={0}
        seconds={59}
        showSeconds={true}
        colors={{ fontColor: '#123456', circleColor: '#345678', progressColor: '#567890' }}
        maxSize="lg"
      />,
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders large size with outline', () => {
    const tree = renderWithTheme(
      <Counter
        days={11}
        hours={0}
        minutes={0}
        seconds={59}
        showSeconds={true}
        colors={{ fontColor: '#123456', circleColor: '#345678', progressColor: '#567890' }}
        maxSize="lg"
        outline
      />,
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders small size', () => {
    const tree = renderWithTheme(
      <Counter
        days={11}
        hours={0}
        minutes={0}
        seconds={59}
        showSeconds={false}
        colors={{ fontColor: '#123456', circleColor: '#345678', progressColor: '#567890' }}
        maxSize="sm"
      />,
    )
    expect(tree).toMatchSnapshot()
  })
})
