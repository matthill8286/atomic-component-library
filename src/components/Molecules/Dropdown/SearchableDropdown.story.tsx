import { Meta, Story } from '@storybook/react'
import React, { useState, ChangeEvent } from 'react'
import { SearchableDropdown } from './SearchableDropdown'
import { SearchableDropdownProps, DropdownOptionProps } from './Dropdown.interface'

const options: DropdownOptionProps[] = [
  { id: '1', label: 'BMW' },
  { id: '2', label: 'Audi' },
  { id: '3', label: 'Mercedes' },
  { id: '4', label: 'Porsche' },
  { id: '5', label: 'Very long text item that is long rly rly long long long' },
  { id: '6', label: 'banana' },
  { id: '7', label: 'apple' },
  { id: '8', label: 'avocado' },
  { id: '9', label: 'pomegranate' },
  { id: '10', label: 'strawberry' },
  { id: '11', label: 'orange' },
  { id: '12', label: 'kiwi' },
  { id: '13', label: 'carrot' },
  { id: '14', label: 'mango' },
  { id: '15', label: 'pineapple' },
]

export default {
  title: 'Design System/Molecules/SearchableDropdown',
  component: SearchableDropdown,
} as Meta

const Template: Story<SearchableDropdownProps> = (args: SearchableDropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>('')
  const [inputValue, setInputValue] = useState('')
  const ref = React.createRef<HTMLInputElement>()

  const props = {
    ...args,
    onSelectChange: (item) => {
      setSelectedOption(item.id)
      setInputValue(item.label)
    },
    inputValue,
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value),
    selectedOption,
    id: 'dd1',
    name: 'cars',
    inputRef: ref,
  } as SearchableDropdownProps
  return <SearchableDropdown {...props} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'type a label',
  helpText: 'Help text',
  options,
}
