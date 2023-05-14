import { useEffect, useRef, useState } from 'react'

/**
 * Provides the current state of a dropdown, a function to toggle it and a
 * reference container.
 *
 * Usage: call the hook in your FunctionComponent and provide an element type
 * as generic argument. E.g: useDropdownState<HTMLDivElement>()
 * Then attach the ref container to the DOM element of your dropdown-component.
 * E.g.: <div ref={element}>...
 */

export const useDropdownState = <T extends HTMLElement>(initial = false) => {
  const [showDropdown, setShowDropdown] = useState(initial)
  const toggleDropdown = () => setShowDropdown(!showDropdown)

  const element = useRef<T>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!showDropdown) {
        return
      }
      // If click is inside the ref element, do nothing
      if (element.current && event.target instanceof Node && element.current.contains(event.target)) {
        return
      }
      // Else, close dropdown
      setShowDropdown(false)
    }
    // Use capture phase. Reason: There can be cases (e.g. Header search box) where
    // the click target (clear button) gets removed from the DOM before this handler
    // here is called which would wrongly close the dropdown.
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick)
  }, [element.current, showDropdown, setShowDropdown])

  return {
    showDropdown,
    toggleDropdown,
    element,
  }
}
