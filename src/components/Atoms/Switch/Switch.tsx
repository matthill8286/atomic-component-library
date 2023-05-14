import * as React from 'react'
import { SwitchProps } from './Switch.interface'
import { StyledSwitch, StyledSwitchButton } from './switch.styled'

export const Switch: React.FC<SwitchProps> = ({ ariaLabel, checked, disabled = false, id, onClick, inputRef }) => {
  const switchRef = React.useRef<HTMLSpanElement | null>(null)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      if (switchRef !== null && switchRef.current !== null) {
        switchRef.current.click()
      }
    }
  }

  return (
    <StyledSwitch
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      id={id}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      ref={switchRef}
      role="switch"
      tabIndex={0}
    >
      <StyledSwitchButton ariaChecked={checked} disabled={disabled}>
        <input checked={checked} disabled={disabled} id={`${id}__input`} ref={inputRef} type="checkbox" />
      </StyledSwitchButton>
    </StyledSwitch>
  )
}
