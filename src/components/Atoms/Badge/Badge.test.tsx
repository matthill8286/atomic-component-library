import React from 'react'
import { Badge } from '@/components/Atoms/Badge/Badge'
import { renderWithTheme } from '@/testRenderer'

const mockedBadges = [
  {
    id: 0,
    name: 'Badge No.1',
  },
  {
    id: 1,
    name: 'Some other label',
  },
  {
    id: 2,
    name: 'Free shipping',
  },
  {
    id: 3,
    name: 'Hot Hot Hot',
  },
  {
    id: 4,
    name: 'Last one',
  },
]

describe('Badge', () => {
  it('should render', () => {
    const tree = renderWithTheme(<Badge badges={mockedBadges} />)
    expect(tree).toMatchSnapshot()
  })

  it('should render with primary color', () => {
    const tree = renderWithTheme(<Badge badges={mockedBadges} actionType="prominent" />)
    expect(tree).toMatchSnapshot()
  })

  it('should render with secondary color', () => {
    const tree = renderWithTheme(<Badge badges={mockedBadges} actionType="secondary" />)
    expect(tree).toMatchSnapshot()
  })

  it('should render a badge line', () => {
    const tree = renderWithTheme(<Badge isBadgeLine badges={mockedBadges} />)
    expect(tree).toMatchSnapshot()
  })

  it('should render a badge line secondary', () => {
    const tree = renderWithTheme(<Badge badges={mockedBadges} isBadgeLine actionType="secondary" />)
    expect(tree).toMatchSnapshot()
  })

  it('should render a badge line disabled', () => {
    const tree = renderWithTheme(<Badge badges={mockedBadges} isBadgeLine actionType="disabled" />)
    expect(tree).toMatchSnapshot()
  })
})
