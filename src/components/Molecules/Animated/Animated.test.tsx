import React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { Linear } from './Linear'
import { Round } from './Round'

describe('Pagination', () => {
  it('renders Linear Animated Pagination', () => {
    const options = {
      onClick: jest.fn(),
    }
    const tree = renderWithTheme(<Linear index={1} {...options} />)
    expect(tree).toMatchSnapshot()
  })
  it('renders Round Animated Pagination', () => {
    const options = {
      onClick: jest.fn(),
    }
    const tree = renderWithTheme(<Round index={1} {...options} />)
    expect(tree).toMatchSnapshot()
  })
  it('dot handles click', () => {
    const onClick = jest.fn()
    const options = {
      onClick,
    }
    const tree = mountWithTheme(<Round index={1} {...options} />)

    tree.simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
