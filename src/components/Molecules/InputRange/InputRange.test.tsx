import React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { InputRange } from './InputRange'

describe('InputRange', () => {
  it('should render', () => {
    const wrapper = renderWithTheme(<InputRange />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should fire change event', () => {
    const onChange = jest.fn()
    const wrapper = mountWithTheme(<InputRange onChange={onChange} />)
    const input = wrapper.find('input')

    input.simulate('change')
    expect(onChange).toBeCalledTimes(1)
  })
})
