import React from 'react'
import { Input } from '@/components/Atoms/Input'
import { DropdownOptionProps, SearchableDropdownProps } from './Dropdown.interface'
import { StyledList, StyledSearchableDropdownWrapper } from './Dropdown.styled'
import { DropdownOption } from './DropdownOption'
import { findNextOption } from './helpers/findNextOption'
import { OtherSearch } from '@matthill8286/atomic-icon-library'

export const SearchableDropdown: React.FC<SearchableDropdownProps> = (props) => {
  const {
    className,
    errorMessage,
    helpText,
    id,
    initializeOpen = false,
    inputRef,
    inputValue,
    label,
    name,
    onBlur,
    onInputChange,
    onSelectChange,
    options = [],
    selectedOption,
  } = props

  const ref = React.useRef<HTMLDivElement>(null)
  const listRef = React.useRef<HTMLOListElement>(null)
  const [isOpen, setOpen] = React.useState(initializeOpen)
  const [filteredOptions, setFilteredOptions] = React.useState(options)
  const [focusedOption, setFocusedOption] = React.useState<null | DropdownOptionProps>(null)
  const dropdownId = id || name
  const dropdownListId = `${dropdownId}-list`

  // Handle loading of options after mounted
  React.useEffect(() => {
    setFilteredOptions(options)
  }, [options])

  const handleClickOutside = (event: Event): void => {
    if (!ref.current?.contains(event.target as Node)) {
      closeDropDown()
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  const getOptionId = (option: DropdownOptionProps) => {
    return option.id || option.label
  }

  const focusOnOption = (opt: DropdownOptionProps | undefined) => {
    if (opt === undefined) {
      return
    }

    const optId = getOptionId(opt)
    setFocusedOption(opt)

    if (listRef.current !== null) {
      const optElement = document.getElementById(`${dropdownId}-opt-${optId}`)

      if (optElement !== null) {
        const optPos = optElement.getBoundingClientRect()
        const listPos = listRef.current.getBoundingClientRect()
        let isScrollRequired = false

        if (optPos.top < listPos.top) {
          isScrollRequired = true
        } else if (optPos.bottom > listPos.bottom) {
          isScrollRequired = true
        }

        if (isScrollRequired) {
          listRef.current.scrollTop = optPos.top - listPos.top
        }
      }
    }
  }

  const closeDropDown = () => {
    setOpen(false)
    setFocusedOption(null)
  }

  const focusOnInput = () => {
    if (inputRef !== undefined && inputRef !== null && inputRef.current !== null) {
      inputRef.current.focus()
    }
  }

  const handleInputFocus = () => {
    setFilteredOptions(options)
    setOpen(true)
    const opt = filteredOptions.find((opt) => getOptionId(opt) === selectedOption)
    if (opt) {
      focusOnOption(opt)
    } else {
      focusOnOption(filteredOptions[0])
    }
  }

  const handleOptionClick = (item: DropdownOptionProps) => {
    closeDropDown()
    onSelectChange(item)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setFilteredOptions(
      value ? options.filter((option) => option.label.toLowerCase().includes(value.toLowerCase())) : options,
    )

    onInputChange(event)
  }

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      setOpen(true)
      focusOnOption(findNextOption(filteredOptions, focusedOption, event.key))
    } else if (event.key === 'Escape') {
      closeDropDown()
    } else if (event.key === 'Tab') {
      closeDropDown()
    } else if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
      if (focusedOption) {
        handleOptionClick(focusedOption)
        focusOnInput()
      }
    }
  }

  const handleInputKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  // NB - leave the // eslint-disable-next-line rule in - the structure we have is valid for Aria 1.1
  // See https://www.w3.org/TR/wai-aria-practices-1.1/examples/combobox/aria1.1pattern/listbox-combo.html
  // TODO - A11y - Find out how to change linter rules to aria 1.1
  return (
    <StyledSearchableDropdownWrapper className={className} ref={ref}>
      <div aria-haspopup="listbox" aria-expanded={isOpen} aria-owns={dropdownListId} role="combobox">
        <Input
          aria-activedescendant={focusedOption ? `${dropdownId}-opt-${getOptionId(focusedOption)}` : ''}
          aria-autocomplete="both"
          aria-controls={dropdownListId}
          aria-labelledby={`${dropdownId}-label`}
          errorMessage={errorMessage}
          helpText={helpText}
          inputIcon={<OtherSearch />}
          inputProps={{
            id: dropdownId,
            name: name ? `${name}__input` : undefined,
          }}
          inputRef={inputRef}
          inputType="text"
          label={label}
          onBlur={onBlur}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleInputKeyDown}
          onKeyUp={handleInputKeyUp}
          state={errorMessage ? 'error' : 'idle'}
          value={inputValue}
        />
      </div>
      <StyledList
        active={isOpen}
        aria-labelledby={`${dropdownId}-label`}
        data-test={`${dropdownId}-dropdown-list`}
        id={dropdownListId}
        isSearchable
        ref={listRef}
        role="listbox"
      >
        {filteredOptions.map((item) => {
          const id = getOptionId(item)
          const isFocused = !!(focusedOption !== null && focusedOption.id === id)

          return (
            <DropdownOption
              active={id === selectedOption}
              isFocused={isFocused}
              id={`${dropdownId}-opt-${id}`}
              key={id}
              label={item.label}
              onClick={() => handleOptionClick(item)}
            />
          )
        })}
      </StyledList>
    </StyledSearchableDropdownWrapper>
  )
}

SearchableDropdown.displayName = 'SearchableDropdown'
