import * as React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { SelectGroupItemProps } from './SelectGroup.interface'
import { SelectGroupItem } from './SelectGroupItem'

describe('SelectGroupItem', () => {
  const props: SelectGroupItemProps = {
    content: <div>Test</div>,
    id: '1',
    noBorder: [],
    onClick: jest.fn(),
    shape: 'sharp',
    surface: 'white',
  }

  it('renders correctly', () => {
    const tree = renderWithTheme(<SelectGroupItem {...props} />)
    expect(tree).toMatchSnapshot()
  })

  it('renders a divider', () => {
    const tree = renderWithTheme(<SelectGroupItem {...props} showDivider dividerWidth="90%" />)
    expect(tree).toMatchSnapshot()
  })
})
