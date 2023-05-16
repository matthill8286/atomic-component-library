import * as React from 'react'
import { BrandedPrice } from './BrandedPrice'
import { UnbrandedPrice } from './UnbrandedPrice'
import { PriceSchema } from './PriceSchema'
import { ThemeFontLineHeight, EnergyEfficiencyInterface, ProductAvailabilityState } from '@/types'
import { TextAlign } from '@/components/Atoms/Typography/Typo/Typo.interface'

export interface PriceBrandingProps {
  size?: 'small' | 'large' | 'responsive'
  withBranding?: boolean
  withBackground?: boolean
}
export interface PriceProps extends PriceBrandingProps {
  /** @deprecated no longer used */
  additionalInfoAlign?: TextAlign
  /** @deprecated no longer used */
  atPrice?: boolean
  amount: number | string
  /** for price schema */
  availabilityType?: ProductAvailabilityState
  basePrice?: string
  className?: string
  /** @deprecated no longer used */
  currency?: string
  discountValue?: number | string
  energyEfficiency?: EnergyEfficiencyInterface | null
  /** @deprecated no longer used */
  isShippingInfoSpaceRequired?: boolean
  justify?: 'space-between' | 'flex-start' | 'flex-end'
  /** @deprecated no longer used */
  lineHeight?: ThemeFontLineHeight
  onEnergyEfficiencyClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  prefix?: string
  renderPriceSchema?: boolean
  shippingInfo?: string | React.ReactNode
  sideInfo?: string | React.ReactNode
  strikePricePrefix?: string
  strikePrice?: string
  strikePriceTooltip?: string
  strikePriceRight?: boolean
  showLoyaltyText?: boolean
}

export const Price: React.FC<PriceProps> = (props) => {
  const priceItem = props.withBranding ? <BrandedPrice {...props} /> : <UnbrandedPrice {...props} />

  return props.renderPriceSchema ? <PriceSchema {...props}>{priceItem}</PriceSchema> : priceItem
}
