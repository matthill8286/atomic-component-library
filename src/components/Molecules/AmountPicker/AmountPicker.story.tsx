import { withState } from '@dump247/storybook-state'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { AmountPicker } from './AmountPicker'
import Readme from './AmountPicker.readme.md'

const stories = storiesOf('Design System/Molecules/Form Fields/AmountPicker', module)

stories.add(
  'Default',
  withState({ quantity: 1 }, (store) => (
    <AmountPicker
      max={10}
      label="Quantity for Sony Braia TV"
      min={0}
      minusLabel="Decrease quantity"
      onQuantityChange={(event, newQuantity) => {
        store.set({ quantity: newQuantity })
      }}
      plusLabel="Increase quantity"
      {...store.state}
    />
  )),
  { info: Readme },
)
