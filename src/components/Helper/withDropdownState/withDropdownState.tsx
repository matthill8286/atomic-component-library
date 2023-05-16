import React, { useEffect, useRef, useState } from 'react'
import { DropdownProps } from '@/components/Molecules/Dropdown/Dropdown.interface'

export interface DropDownEnhancementProps {
  showDropdown: boolean
  toggleDropdown: () => void
}

export const withDropdownState = (WrappedComponent, { displayName = 'ComponentName' }) => {
  const WrapperComponent = (props: DropdownProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const [showDropdown, setShowDropdown] = useState<boolean>(false)

    const toggleDropdown = (): void => {
      setShowDropdown(!showDropdown)
    }

    const handleClickOutside = (event: Event): void => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    useEffect(() => {
      document.addEventListener('click', handleClickOutside, true)

      return () => {
        document.removeEventListener('click', handleClickOutside, true)
      }
    })

    return (
      <div ref={wrapperRef}>
        <WrappedComponent showDropdown={showDropdown} toggleDropdown={toggleDropdown} {...props} />
      </div>
    )
  }

  WrapperComponent.displayName = displayName

  return WrapperComponent
}
