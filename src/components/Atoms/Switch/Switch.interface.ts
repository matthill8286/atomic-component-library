import * as React from 'react'
import { TranslatedText } from '@/types/global'

export interface SwitchA11yProps {
  checked: boolean
  ariaLabel?: TranslatedText
  id: string
}

export interface StyledSwitchProps {
  disabled?: boolean
}

export interface SwitchButtonProps {
  ariaChecked: boolean
  disabled?: boolean
  inputRef?: React.Ref<HTMLInputElement>
}

export interface SwitchProps extends SwitchA11yProps {
  disabled?: boolean
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  inputRef?: React.Ref<HTMLInputElement>
}
