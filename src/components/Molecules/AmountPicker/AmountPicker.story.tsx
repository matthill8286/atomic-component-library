import { AmountPicker } from './AmountPicker'
import Readme from './AmountPicker.readme.mdx'
import React from 'react'
import { OnQuantityChangeEvent } from './AmountPicker.interface'

export const Default = () => (
  <AmountPicker
    onQuantityChange={function (event: OnQuantityChangeEvent, quantity: number, oldQuantity: number): void {
      throw new Error('Function not implemented.')
    }}
    max={10}
    label="Quantity for Sony Braia TV"
    min={0}
    minusLabel="Decrease quantity"
    plusLabel="Increase quantity"
    quantity={0}
  />
)

Default.story = {
  parameters: { info: Readme },
}

export default {
  title: 'Design System/Molecules/AmountPicker',
}
