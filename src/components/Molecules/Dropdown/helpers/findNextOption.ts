import { DropdownOptionProps } from '../Dropdown.interface'

export const findNextOption = (
  filteredOptions: DropdownOptionProps[],
  focusedOption: DropdownOptionProps | null,
  dir: 'ArrowDown' | 'ArrowUp',
): DropdownOptionProps => {
  const lastIndex = filteredOptions.length - 1

  if (focusedOption) {
    const currentIndex = filteredOptions.findIndex((opt) => opt.id === focusedOption.id)

    if (currentIndex > -1) {
      if (dir === 'ArrowDown' && currentIndex !== lastIndex) {
        return filteredOptions[currentIndex + 1]
      } else if (dir === 'ArrowUp' && currentIndex !== 0) {
        return filteredOptions[currentIndex - 1]
      }
    }
  }

  return dir === 'ArrowDown' ? filteredOptions[0] : filteredOptions[lastIndex]
}
