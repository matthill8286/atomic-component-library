import * as React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { SelectItem, SelectMultiGroupProps } from './SelectGroup.interface'
import { SelectMultiGroup } from './SelectMultiGroup'

export const group: SelectItem[] = [
  { id: '1', content: <div>Option 1</div> },
  { id: '2', content: <div>Option 2</div> },
  { id: '3', content: <div>Option 3</div> },
  { id: '4', content: <div>Option 4</div> },
  { id: '5', content: <div>Option 5</div> },
]

describe('SelectMultiGroup', () => {
  const props: SelectMultiGroupProps = {
    group,
    onChange: jest.fn(),
    selected: [],
  }

  it('renders correctly', () => {
    const tree = renderWithTheme(<SelectMultiGroup {...props} />)
    expect(tree).toMatchSnapshot()
  })

  it('renders with direction row', () => {
    const tree = renderWithTheme(<SelectMultiGroup {...props} direction="row" />)
    expect(tree).toMatchSnapshot()
  })

  it('renders with direction column', () => {
    const tree = renderWithTheme(<SelectMultiGroup {...props} direction="column" />)
    expect(tree).toMatchSnapshot()
  })

  it('mounts the group elements', () => {
    const component = mountWithTheme(<SelectMultiGroup {...props} />)
    expect(component.find('SelectGroupItem')).toHaveLength(5)
  })

  it('should render with elements selected', () => {
    const component = mountWithTheme(<SelectMultiGroup {...props} selected={['1', '2', '5']} />)
    expect(component).toMatchSnapshot()
  })
})
