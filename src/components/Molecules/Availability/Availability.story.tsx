import { select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { ProductAvailabilityState } from '@/types/availabilityState'
import { Availability } from './Availability'
import { AvailabilityProps, AvailabilitySize } from './Availability.interface'
import Readme from './Availability.readme.md'
import { OtherShop } from '@matthill8286/atomic-icon-library'

const states: ProductAvailabilityState[] = [
  ProductAvailabilityState.TIME_CLUSTER,
  ProductAvailabilityState.AVAILABLE,
  ProductAvailabilityState.NOT_AVAILABLE,
  ProductAvailabilityState.LOWERTHRESHOLD,
  ProductAvailabilityState.UPPERTHRESHOLD,
  ProductAvailabilityState.NOONLINESTOCK,
]
const prices = [100.99, 'Free', 0]
const scaleOptions = ['large', 'small']

storiesOf('Design System/Molecules/Availability', module)
  .add(
    'Default',
    () => {
      const knobs = (): AvailabilityProps => {
        return {
          scale: select('Type scale', scaleOptions, scaleOptions[0]) as AvailabilitySize,
          state: select('State', states, states[0]),
          text: text('Content', 'Ready to Pickup'),
        }
      }
      return <Availability {...knobs()} />
    },
    { info: Readme },
  )
  .add(
    'With Price',
    () => {
      const knobs = (): AvailabilityProps => {
        return {
          scale: select('Type scale', scaleOptions, scaleOptions[0]) as AvailabilitySize,
          state: select('State', states, states[1]),
          text: text('Content', 'Delivery to your address in 1-3 working days'),
          price: select('Price', prices, prices[0]),
          subtext: text('Content', 'Calculated with Standard Delivery'),
          freeLabel: text('Free Label', 'Gratis'),
        }
      }
      return <Availability {...knobs()} />
    },
    { info: Readme },
  )
  .add(
    'With HTML as subtext',
    () => {
      const knobs = (): AvailabilityProps => {
        return {
          scale: select('Type scale', scaleOptions, scaleOptions[0]) as AvailabilitySize,
          state: select('State', states, states[2]),
          text: text('Content', 'Delivery not available'),
          price: select('Price', prices, prices[0]),
          subtext: <a href="http://mediamarkt.de">MediaMarkt München-Euroindustriepark</a>,
        }
      }
      return <Availability {...knobs()} />
    },
    { info: Readme },
  )
  .add(
    'With availability icon',
    () => {
      const knobs = (): AvailabilityProps => {
        return {
          scale: select('Type scale', scaleOptions, scaleOptions[0]) as AvailabilitySize,
          state: select('State', states, states[0]),
          text: text('Content', 'Ready to Pickup'),
        }
      }
      return <Availability {...knobs()} infoIconOnClick={() => {}} />
    },
    { info: Readme },
  )
  .add(
    'With Icon',
    () => {
      const knobs = (): AvailabilityProps => {
        return {
          scale: select('Type scale', scaleOptions, scaleOptions[0]) as AvailabilitySize,
          state: select('State', states, states[0]),
          text: text('Content', 'Ready to Pickup'),
          subtext: <a href="http://mediamarkt.de">MediaMarkt München-Euroindustriepark</a>,
        }
      }
      return <Availability {...knobs()} CustomIcon={OtherShop} />
    },
    { info: Readme },
  )
