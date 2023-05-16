import React from 'react'
import { CheckboxProps } from '@/components/Atoms/Selectable/Selectable.interface'
import { renderWithTheme } from '@/testRenderer'
import { Checkbox } from './Checkbox'

const mockProps: CheckboxProps = {
  label: '',
  value: '',
  name: '',
  onChangeValue: jest.fn(),
  selectableId: '',
  isChecked: false,
  state: 'idle',
}

describe('Checkbox', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Checkbox {...mockProps} />)
    expect(tree).toMatchSnapshot()
  })
})
