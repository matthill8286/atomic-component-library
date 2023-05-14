import * as React from 'react'
import { ProductAvailabilityState } from '@/types/availabilityState'

export interface StyledAvailabilityTypoProps {
  hasIcon: boolean
}

export type TranslatedText = React.ReactNode | string

export type AvailabilitySize = 'small' | 'large'

export interface AvailabilityProps {
  currency?: string
  freeLabel?: string
  loading?: boolean
  infoIconOnClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  price?: number | string | null
  scale?: AvailabilitySize
  state?: ProductAvailabilityState
  subtext?: TranslatedText
  text?: TranslatedText
  CustomIcon?: React.MemoExoticComponent<(props: React.SVGProps<SVGSVGElement>) => JSX.Element>
}

export interface AvailabilityStatusProps {
  state?: ProductAvailabilityState
}
