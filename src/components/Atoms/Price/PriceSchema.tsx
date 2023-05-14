import React from 'react'
import { PriceProps } from './Price'
import { ProductAvailabilityState } from '@/types'

const checkAvailability = (type?: ProductAvailabilityState) =>
  type &&
  [
    ProductAvailabilityState.AVAILABLE,
    ProductAvailabilityState.TIME_CLUSTER,
    ProductAvailabilityState.LOWERTHRESHOLD,
    ProductAvailabilityState.UPPERTHRESHOLD,
  ].includes(type)

export const PriceSchema: React.FC<PriceProps> = ({ amount, availabilityType, children }) => (
  <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
    <meta itemProp="price" content={amount.toString()} />
    <meta itemProp="priceCurrency" content="EUR" />
    <meta
      itemProp="availability"
      content={checkAvailability(availabilityType) ? 'http://schema.org/InStock' : 'http://schema.org/OutOfStock'}
    />
    {children}
  </div>
)
