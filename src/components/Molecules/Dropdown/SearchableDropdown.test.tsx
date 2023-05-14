import React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { StyledList } from './Dropdown.styled'
import { DropdownOption } from './DropdownOption'
import { SearchableDropdown } from './SearchableDropdown'

describe('SearchableDropdown', () => {
  const props = {
    selectedOption: 'id-2',
    inputValue: undefined,
    label: 'oh my label',
    onSelectChange: jest.fn(),
    onInputChange: jest.fn(),
  }

  const options = [
    { id: 'id-1', label: 'one' },
    { id: 'id-2', label: 'two' },
  ]

  test('Renders', () => {
    const wrapper = renderWithTheme(<SearchableDropdown {...props} options={options} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('Toggles the dropdown on click', () => {
    const wrapper = mountWithTheme(<SearchableDropdown {...props} options={options} />)
    const button = wrapper.find('div').first()
    button.simulate('click')
    expect(wrapper.find(StyledList).findWhere((item) => item.props().active)).toHaveLength(2)
  })

  test('Accepts an optional label prop', () => {
    const wrapper = mountWithTheme(<SearchableDropdown {...props} label="Label text" options={options} />)
    const label = wrapper.find('label')
    expect(label.length).toEqual(1)
    expect(label.text()).toEqual('Label text')
  })

  test('Should accept optional help text ', () => {
    const wrapper = mountWithTheme(
      <SearchableDropdown {...props} options={options} label="Label text" helpText="Help Text" />,
    )
    const span = wrapper.find('span')
    expect(span.length).toEqual(2)
    const helpText = span.at(1)
    expect(helpText.text()).toEqual('Help Text')
  })

  test('Should select the option with given selectedOption prop', () => {
    const wrapper = mountWithTheme(<SearchableDropdown {...props} options={options} />)
    expect(
      wrapper.find(DropdownOption).findWhere((opt) => {
        const props = opt.props()
        return props.active === true && props.label === 'two'
      }),
    ).toHaveLength(1)
  })
})
