import React from 'react'
import { RadioButtonProps } from '@/components/Atoms/Selectable/Selectable.interface'
import { renderWithTheme } from '@/testRenderer'
import { RadioButton } from './RadioButton'

const mockProps: RadioButtonProps = {
  label: '',
  value: '',
  name: '',
  onChangeValue: jest.fn(),
  selectableId: '',
  isChecked: false,
  state: 'idle',
}

describe('Radio button', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<RadioButton {...mockProps} />)
    expect(tree).toMatchSnapshot()
  })
})
