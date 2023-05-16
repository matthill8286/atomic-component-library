import { AvailabilityProps } from './Availability.interface'
import { ProductAvailabilityState } from '@/types'

const RE_DELIVERY_SPLIT = /<span>(.*)<\/span>(.*)/i

export const splitDeliveryInformation = (
  value: string,
  defaultText: string,
): { text: string; subtext: string | undefined } => {
  const match = RE_DELIVERY_SPLIT.exec(value) || []

  return {
    text: match[1] || defaultText,
    subtext: match[2],
  }
}

export const extractProductAvailabilities = (
  product: any,
  noMarketLabel = '',
  defaultOnlineLabel = '',
  defaultMarketLabel = '',
): AvailabilityProps[] => {
  const priceAvailability = {
    market: product?.price?.market || {
      deliveryInformation: noMarketLabel,
      type: '',
      outletId: null,
    },
    online: product?.price?.online || { deliveryInformation: '', type: '' },
  }

  if (!priceAvailability) {
    return []
  }

  const result: AvailabilityProps[] = []

  result.push(availabilityPropsFromProductAvailabily(priceAvailability.online, defaultOnlineLabel))
  result.push(availabilityPropsFromProductAvailabily(priceAvailability.market, defaultMarketLabel))

  return result
}

export const availabilityPropsFromProductAvailabily = (availability: any, defaultText: string): AvailabilityProps => {
  const { text, subtext } = splitDeliveryInformation(availability.deliveryInformation || '', defaultText)

  return {
    text,
    subtext,
    state: (availability.type as ProductAvailabilityState) || ProductAvailabilityState.NOT_AVAILABLE,
  }
}
