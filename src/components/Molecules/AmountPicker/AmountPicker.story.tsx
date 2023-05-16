import { withState } from '@dump247/storybook-state'
import { AmountPicker } from './AmountPicker'
import Readme from './AmountPicker.readme.md'

export const Default = withState({ quantity: 1 }, (store) => (
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
))

Default.story = {
  parameters: { info: Readme },
}
