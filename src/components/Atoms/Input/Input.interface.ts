import {
  ReactElement,
  ReactNode,
  Ref,
  FocusEventHandler,
  MouseEventHandler,
  TextareaHTMLAttributes,
  ChangeEventHandler,
  InputHTMLAttributes,
  KeyboardEventHandler,
} from 'react'
import { IconProps } from '@/components/Atoms/Icon'
import { TranslatedText } from '@/types/global'
import { BoxDimensions, ThemeColors } from '@/types/theme'

export type HTMLText = HTMLInputElement

export type InputMode = 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
export type InputState = 'idle' | 'valid' | 'error' | 'disabled'
export type InputStyle = 'default' | 'dense' | 'large'
export type InputType = 'text' | 'date' | 'password' | 'number' | 'tel' | 'email'
export type InputValue = string | number

export type MapStateToColor = {
  [key in InputState]: ThemeColors
}

export interface InputEvents {
  onBlur?: FocusEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  onClick?: MouseEventHandler<HTMLInputElement>
  onClickIcon?: MouseEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>
  onMouseEnter?: MouseEventHandler<HTMLInputElement>
  onMouseLeave?: MouseEventHandler<HTMLInputElement>
}
export interface TextAreaEvents {
  onBlur?: FocusEventHandler<HTMLTextAreaElement>
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  onClick?: MouseEventHandler<HTMLTextAreaElement>
  onClickIcon?: MouseEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLTextAreaElement>
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>
  onKeyUp?: KeyboardEventHandler<HTMLTextAreaElement>
  onMouseEnter?: MouseEventHandler<HTMLTextAreaElement>
  onMouseLeave?: MouseEventHandler<HTMLTextAreaElement>
}

export interface IconSize {
  height: number
  width: number
}

export interface InputProps extends InputEvents {
  autofocus?: boolean
  className?: string
  errorMessage?: TranslatedText
  helper?: ReactNode
  helpText?: string
  iconLabel?: TranslatedText // TODO - a11y: make required once teams have been informed
  inputIcon?: ReactElement<IconProps>
  inputIconSize?: IconSize
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  inputRef?: Ref<HTMLInputElement>
  inputStyle?: InputStyle
  inputType?: InputType
  label?: TranslatedText
  margin?: BoxDimensions
  padding?: BoxDimensions
  placeholder?: TranslatedText
  state?: InputState
  value?: InputValue
}

export interface InputAreaProps extends TextAreaEvents {
  autofocus?: boolean
  className?: string
  errorMessage?: TranslatedText
  helper?: ReactNode
  helpText?: string
  iconLabel?: TranslatedText // TODO - a11y: make required once teams have been informed
  inputIcon?: ReactElement<IconProps>
  inputProps?: TextareaHTMLAttributes<HTMLTextAreaElement>
  inputRef?: Ref<HTMLTextAreaElement>
  inputStyle?: InputStyle
  inputType?: InputType
  label?: TranslatedText
  margin?: BoxDimensions
  padding?: BoxDimensions
  placeholder?: TranslatedText
  rows?: number
  state?: InputState
  value?: InputValue
}
