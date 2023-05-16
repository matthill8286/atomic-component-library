import * as H from 'history'
import { AnchorHTMLAttributes, ReactNode, MouseEvent } from 'react'

export type ButtonActionType =
  | 'ghost'
  | 'primary'
  | 'prominent'
  | 'secondary'
  | 'inverted'
  | 'outlined'
  | 'lightBorder'
  | 'darkBorder'

export type ButtonSize = 'lg' | 'md' | 'sm'

export type ButtonType = 'button' | 'reset' | 'submit'

export interface StyledButtonProps {
  actionType: ButtonActionType
  disabled: boolean
  isLoading: boolean
  isFlat?: boolean
  size: ButtonSize
  fullWidth?: boolean
  round?: boolean
  squared?: boolean
  curved?: boolean
  elevated?: boolean
  weight?: string
}

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
  actionType?: ButtonActionType
  children?: ReactNode
  disabled?: boolean
  fullWidth?: boolean
  classNameWrapper?: string
  isLoading?: boolean
  isFlat?: boolean
  onClick?: (ev: MouseEvent<HTMLElement>) => void
  size?: ButtonSize
  to?: H.LocationDescriptor
  type?: ButtonType
  round?: boolean
  squared?: boolean
  id?: string
  curved?: boolean
  elevated?: boolean
  weight?: string
  showCheckmark?: boolean
}
