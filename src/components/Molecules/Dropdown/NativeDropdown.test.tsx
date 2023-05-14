import React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { NativeDropdown } from './NativeDropdown'

const options = [{ label: 'one' }, { label: ' two' }]

describe('NativeDropdown', () => {
  it('should match snapshot', () => {
    const wrapper = renderWithTheme(
      <NativeDropdown value="two" onChange={() => {}}>
        {options.map((option) => (
          <option key={option.label} value={option.label}>
            {option.label}
          </option>
        ))}
      </NativeDropdown>,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should call onChange', () => {
    const onChange = jest.fn()
    const wrapper = mountWithTheme(
      <NativeDropdown value="two" onChange={onChange}>
        {options.map((option) => (
          <option key={option.label} value={option.label}>
            {option.label}
          </option>
        ))}
      </NativeDropdown>,
    )
    wrapper.find('select').simulate('change', { target: { value: 'one' } })
    expect(onChange).toBeCalled()
  })
})
