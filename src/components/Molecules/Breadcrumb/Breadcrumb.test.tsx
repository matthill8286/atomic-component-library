import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { Breadcrumb } from './Breadcrumb'

const paths = [
  {
    name: 'Computer & Büro',
    link: '',
  },
  {
    name: 'Drucker & Scanner',
    link: '',
  },
  {
    name: 'Multifunktionsdrucker',
    link: '',
  },
]

describe('Heading', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Breadcrumb paths={paths} />)
    expect(tree).toMatchSnapshot()
  })
})
