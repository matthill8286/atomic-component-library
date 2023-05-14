import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('renders PagesPagination', () => {
    const options = {
      onChange: jest.fn(),
    }
    const tree = renderWithTheme(<Pagination variant={'pages'} options={options} max={10} current={0} />)
    expect(tree).toMatchSnapshot()
  })
  it('renders DotsPagination', () => {
    const options = {
      onChange: jest.fn(),
    }
    const tree = renderWithTheme(<Pagination variant={'dots'} options={options} max={10} current={0} />)
    expect(tree).toMatchSnapshot()
  })
  it('renders ProgressPagination', () => {
    const options = {
      onClickMore: jest.fn(),
      buttonLabel: 'buttonLabel',
      progressLabel: 'progressLabel',
    }
    const tree = renderWithTheme(<Pagination variant={'progress'} options={options} max={10} current={0} />)
    expect(tree).toMatchSnapshot()
  })
})
