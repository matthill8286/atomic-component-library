import React from 'react'
import { TranslatedText } from '@/types/global'

export type OnQuantityChangeEvent = React.MouseEvent | React.KeyboardEvent

export type ButtonTypes = 'plus' | 'minus'

export interface AmountPickerA11yAttrs {
  label: TranslatedText
  minusLabel: TranslatedText
  plusLabel: TranslatedText
}

export type OnQuantityChange = (event: OnQuantityChangeEvent, quantity: number, oldQuantity: number) => void

export interface AmountPickerProps extends AmountPickerA11yAttrs {
  max: number
  min: number
  onDisabledQuantityClick?: (event: React.MouseEvent, btnType: ButtonTypes) => void
  onQuantityChange: OnQuantityChange
  quantity: number
}
