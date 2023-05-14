import React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { Filter } from './Filter'

describe('Filter', () => {
  it('should render default type', () => {
    const tree = renderWithTheme(<Filter type="default" label="Label" onClick={jest.fn()} onClear={jest.fn()} />)
    expect(tree).toMatchSnapshot()
  })

  it('should render selected type', () => {
    const tree = renderWithTheme(<Filter type="selected" label="Label" onClick={jest.fn()} onClear={jest.fn()} />)
    expect(tree).toMatchSnapshot()
  })

  it('should render active type', () => {
    const tree = renderWithTheme(<Filter type="active" label="Label" onClick={jest.fn()} onClear={jest.fn()} />)
    expect(tree).toMatchSnapshot()
  })

  it('should call onClick', () => {
    const handleClick = jest.fn()
    const wrapper = mountWithTheme(<Filter type="default" label="Label" onClick={handleClick} onClear={jest.fn()} />)
    wrapper.find('button').simulate('click')
    expect(handleClick.mock.calls.length).toBe(1)
  })

  it('should call onClear', () => {
    const handleClear = jest.fn()
    const wrapper = mountWithTheme(<Filter type="active" label="Label" onClick={jest.fn()} onClear={handleClear} />)
    const icon = wrapper.find('button div')
    icon.simulate('click')
    expect(handleClear.mock.calls.length).toBe(1)
  })
})
