import React from 'react'
import { Link } from '@/components/Atoms/Link'
import { renderWithTheme } from '@/testRenderer'
import { TopBar } from './TopBar'

const entries = [
  'Versandkostenfrei',
  '0% Finanzierung',
  'Abholung im Markt',
  <Link href="www.google.de" inline color="white" decorationColor="white" key="link">
    Test
  </Link>,
]

describe('TopBar', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<TopBar entries={entries} />)
    expect(tree).toMatchSnapshot()
  })
})
