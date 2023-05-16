import React from 'react'

export type DropDownListType = 'custom' | 'native'

export interface DropdownProps {
  autoComplete?: string
  initialIndex?: number
  label?: string
  listType?: DropDownListType
  onChange?: (index: number) => void
  options: DropdownOptionProps[]
}

export interface DropdownPropsEnhanced extends DropdownProps {
  showDropdown: boolean
  toggleDropdown: () => void
}

export interface ListProps {
  active: boolean
  isSearchable: boolean
}

export interface StyledDropdownProps {
  hasLabel: boolean
}

export interface StyledDropdownOptionProps {
  active: boolean
  isFocused: boolean
  onClick: React.MouseEventHandler<HTMLLIElement>
}

export interface DropdownOptionProps {
  id?: string
  isFocused?: boolean
  label: string
  url?: string
}

export interface SearchableDropdownProps {
  id?: string
  name?: string
  className?: string
  errorMessage?: string
  initializeOpen?: boolean
  inputValue: string | undefined
  label?: string
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onInputChange: React.ChangeEventHandler<HTMLInputElement>
  onSelectChange: (item: DropdownOptionProps) => void
  options: DropdownOptionProps[]
  selectedOption: string
  helpText?: string
  inputRef?: React.RefObject<HTMLInputElement>
}
