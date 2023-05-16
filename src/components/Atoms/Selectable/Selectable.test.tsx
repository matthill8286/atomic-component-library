import React from 'react'
import { Checkbox } from '@/components/Atoms/Checkbox'
import { RadioButton } from '@/components/Atoms/RadioButton'
import { RadioButtonProps } from '@/components/Atoms/Selectable/Selectable.interface'
import { renderWithTheme } from '@/testRenderer'

const mockProps: RadioButtonProps = {
  label: '',
  value: '',
  name: '',
  onChangeValue: jest.fn(),
  selectableId: '',
  isChecked: false,
  state: 'idle',
}

describe('renders Selectables', () => {
  it('renders checkbox correctly', () => {
    const tree = renderWithTheme(<Checkbox {...mockProps} />)
    expect(tree).toMatchSnapshot()
  })

  it('renders radio button correctly', () => {
    const tree = renderWithTheme(<RadioButton {...mockProps} />)
    expect(tree).toMatchSnapshot()
  })

  it('renders radio button group correctly', () => {
    const tree = renderWithTheme(
      <>
        <RadioButton {...mockProps} selectableId="radio1" name="radios" />
        <RadioButton {...mockProps} selectableId="radio2" name="radios" />
      </>,
    )
    expect(tree).toMatchSnapshot()
  })
})
