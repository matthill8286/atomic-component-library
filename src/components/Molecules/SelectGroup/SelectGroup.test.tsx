import * as React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { SelectGroup } from './SelectGroup'
import { SelectGroupProps, SelectItem } from './SelectGroup.interface'

export const group: SelectItem[] = [
  { id: '1', content: <div>Option 1</div> },
  { id: '2', content: <div>Option 2</div> },
  { id: '3', content: <div>Option 3</div> },
  { id: '4', content: <div>Option 4</div> },
  { id: '5', content: <div>Option 5</div> },
]

describe('SelectGroup', () => {
  const props: SelectGroupProps = {
    group,
    onChange: jest.fn(),
    selected: null,
  }

  it('renders correctly', () => {
    const tree = renderWithTheme(<SelectGroup {...props} />)
    expect(tree).toMatchSnapshot()
  })

  it('renders with direction row', () => {
    const tree = renderWithTheme(<SelectGroup {...props} direction="row" />)
    expect(tree).toMatchSnapshot()
  })

  it('renders direction column', () => {
    const tree = renderWithTheme(<SelectGroup {...props} direction="column" />)
    expect(tree).toMatchSnapshot()
  })

  it('mounts the group elements', () => {
    const tree = mountWithTheme(<SelectGroup {...props} />)
    expect(tree.find('SelectGroupItem')).toHaveLength(5)
  })
})
