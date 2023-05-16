import { select, text } from '@storybook/addon-knobs'
import * as React from 'react'
import { ProductAvailabilityState } from '@/types/availabilityState'
import { Availability } from './Availability'
import { AvailabilityProps, AvailabilitySize } from './Availability.interface'
import Readme from './Availability.readme.md'
import { OtherShop } from 'atomic-icon-library'

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

export default {
  title: 'Design System/Molecules/Availability',
}

export const Default = () => {
  const knobs = (): AvailabilityProps => {
    return {
      scale: select('Type scale', scaleOptions, scaleOptions[0]) as AvailabilitySize,
      state: select('State', states, states[0]),
      text: text('Content', 'Ready to Pickup'),
    }
  }
  return <Availability {...knobs()} />
}

Default.story = {
  parameters: { info: Readme },
}

export const WithPrice = () => {
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
}

WithPrice.story = {
  parameters: { info: Readme },
}

export const WithHtmlAsSubtext = () => {
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
}

WithHtmlAsSubtext.story = {
  name: 'With HTML as subtext',
  parameters: { info: Readme },
}

export const WithAvailabilityIcon = () => {
  const knobs = (): AvailabilityProps => {
    return {
      scale: select('Type scale', scaleOptions, scaleOptions[0]) as AvailabilitySize,
      state: select('State', states, states[0]),
      text: text('Content', 'Ready to Pickup'),
    }
  }
  return <Availability {...knobs()} infoIconOnClick={() => {}} />
}

WithAvailabilityIcon.story = {
  name: 'With availability icon',
  parameters: { info: Readme },
}

export const WithIcon = () => {
  const knobs = (): AvailabilityProps => {
    return {
      scale: select('Type scale', scaleOptions, scaleOptions[0]) as AvailabilitySize,
      state: select('State', states, states[0]),
      text: text('Content', 'Ready to Pickup'),
      subtext: <a href="http://mediamarkt.de">MediaMarkt München-Euroindustriepark</a>,
    }
  }
  return <Availability {...knobs()} CustomIcon={OtherShop} />
}

WithIcon.story = {
  parameters: { info: Readme },
}
