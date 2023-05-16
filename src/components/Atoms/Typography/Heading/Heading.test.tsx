import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { Heading } from './Heading'
import { TypographyScaleHeadline } from './Heading.interface'

describe('Heading', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Heading scale="level-1" fontFamily="featured" />)
    expect(tree).toMatchSnapshot()
  })
  const scaleOptions: TypographyScaleHeadline[] = ['level-1', 'level-2', 'level-3', 'level-4', 'level-5']
  scaleOptions.forEach((scale) => {
    it(`should match snapshot with scale="${scale}"`, () => {
      const tree = renderWithTheme(<Heading scale={scale} />)
      expect(tree).toMatchSnapshot()
    })
  })
})
