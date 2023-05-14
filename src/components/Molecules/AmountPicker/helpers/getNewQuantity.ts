import { ButtonTypes } from '../AmountPicker.interface'
import { getInBoundsNumber } from './getInBoundsNumber'

export const getNewQuantity = (buttonType: ButtonTypes, quantity: number, min: number, max: number): number => {
  const newQuantity: number = buttonType === 'minus' ? quantity - 1 : quantity + 1
  return getInBoundsNumber(newQuantity, min, max)
}
