import React from 'react'
import { CopyText } from '@/components/Atoms/Typography'
import { DropdownOptionProps, StyledDropdownOptionProps } from './Dropdown.interface'
import { StyledDropdownOption } from './Dropdown.styled'

export const DropdownOption: React.FC<DropdownOptionProps & StyledDropdownOptionProps> = ({
  active,
  id,
  isFocused = false,
  label,
  onClick,
}) => {
  return (
    <StyledDropdownOption
      active={active}
      aria-selected={isFocused ? 'true' : undefined}
      id={id ?? label}
      isFocused={isFocused}
      onClick={onClick}
      role="option"
    >
      <CopyText tag="strong" color={active ? 'primary' : 'grey5'} fontSize="sm">
        {label}
      </CopyText>
    </StyledDropdownOption>
  )
}

DropdownOption.displayName = 'DropdownOption'
