import React, { FC, useState } from 'react'
import { InputDivider as Divider } from '@/components/Atoms/Input/InputDivider'
import { CopyText } from '@/components/Atoms/Typography'
import { withDropdownState } from '@/components/Helper/withDropdownState'
import { DropdownPropsEnhanced } from './Dropdown.interface'
import {
  StyledContainer,
  StyledDropdown,
  StyledDropdownSelect,
  StyledFieldWrapper,
  StyledIcon,
  StyledList,
  StyledTypo,
} from './Dropdown.styled'
import { DropdownOption } from './DropdownOption'
import { OtherArrow } from '@matthill8286/atomic-icon-library'

const DropdownWithoutState: FC<DropdownPropsEnhanced> = (props) => {
  const {
    autoComplete,
    initialIndex,
    label,
    listType = 'custom',
    onChange,
    options = [],
    showDropdown,
    toggleDropdown,
  } = props

  let setupCurrentIndex = -1
  const lastIndexOfOptions = options.length - 1

  if (initialIndex === 0 || !!initialIndex) {
    if (initialIndex >= 0 && initialIndex <= lastIndexOfOptions) {
      setupCurrentIndex = initialIndex
    }
  }

  const [currentIndex, setCurrentIndex] = useState<number>(setupCurrentIndex)
  const [isFilled, setFill] = useState<boolean>(() => currentIndex !== -1)

  const handleItemClick = (index: number) => () => {
    setCurrentIndex(index)
    setFill(true)
    if (onChange) onChange(index)
  }

  const handleSelectChange = (ev: React.ChangeEvent<HTMLSelectElement>): void => {
    const index = options.findIndex(({ id }) => id === ev.target.value)
    if (index !== -1) {
      handleItemClick(index)()
    }
  }

  const selectedItem = options.find((o, i) => i === currentIndex)

  return (
    <StyledContainer onClick={toggleDropdown}>
      {label && (
        <CopyText tag="label" color={isFilled ? 'grey5' : 'grey2'} data-label-filled={isFilled}>
          {label}
        </CopyText>
      )}
      {listType === 'custom' ? (
        <StyledDropdown hasLabel={!!label}>
          {currentIndex !== -1 && (
            <StyledTypo fontSize="sm" limitLines={1} lineHeight="sm" tag="span">
              {options[currentIndex].label}
            </StyledTypo>
          )}
          <StyledIcon width={16} height={16} rotate={showDropdown ? 270 : 90}>
            <OtherArrow />
          </StyledIcon>

          <StyledList active={!!showDropdown} isSearchable={false}>
            {options.map((item, index) => (
              <DropdownOption
                key={index}
                isFocused={false}
                active={index === currentIndex}
                label={item.label}
                onClick={handleItemClick(index)}
              />
            ))}
          </StyledList>
        </StyledDropdown>
      ) : (
        <StyledFieldWrapper hasLabel={!!label}>
          <StyledDropdownSelect
            onChange={handleSelectChange}
            {...(selectedItem?.id ? { value: selectedItem.id } : {})}
            {...(autoComplete ? { autoComplete } : {})}
          >
            {options.map((item, i) => {
              return (
                <option key={item.id || `dropdown-${i}`} value={item.id}>
                  {item.label}
                </option>
              )
            })}
          </StyledDropdownSelect>
          <StyledIcon width={16} height={16} rotate={90}>
            <OtherArrow />
          </StyledIcon>
        </StyledFieldWrapper>
      )}
      <Divider color="grey3" />
    </StyledContainer>
  )
}

export const Dropdown = withDropdownState(DropdownWithoutState, { displayName: 'Dropdown' })
