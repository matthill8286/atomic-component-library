import React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { Dropdown } from './Dropdown'
import { StyledDropdownOption, StyledList } from './Dropdown.styled'

describe('Dropdown', () => {
  it('renders', () => {
    const wrapper = renderWithTheme(<Dropdown options={[{ label: 'one' }, { label: 'two' }]} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('renders and show options list', () => {
    const wrapper = mountWithTheme(<Dropdown options={[{ label: 'one' }, { label: 'two' }]} />)
    wrapper.find('DropdownWithoutState').simulate('click')
    const dropDownWithOptions = wrapper.findWhere((item) => item.props().showDropdown === true)
    expect(dropDownWithOptions).toBeDefined()
  })
  it('toggles the dropdown on click', () => {
    const wrapper = mountWithTheme(<Dropdown options={[{ label: 'one' }, { label: 'two' }]} />)
    const button = wrapper.find('div').first()
    button.simulate('click')
    expect(wrapper.find(StyledList).findWhere((item) => item.props().active))
  })
  it('accepts an optional label prop', () => {
    const wrapper = mountWithTheme(<Dropdown label="Label text" options={[{ label: 'one' }, { label: 'two' }]} />)
    const label = wrapper.find('label')
    expect(label.length).toEqual(1)
    expect(label.text()).toEqual('Label text')
  })
  it('should select the option with given initialIndex prop', () => {
    const wrapper = mountWithTheme(
      <Dropdown initialIndex={1} label="Label text" options={[{ label: 'one' }, { label: 'two' }]} />,
    )
    expect(
      wrapper.find(StyledDropdownOption).findWhere((item) => {
        const props = item.props()
        return props.active && props.children === 'two'
      }),
    )
  })
})
