import * as React from 'react'
import { BadgeActionType, BadgeType } from '@/components/Atoms/Badge/Badge.interface'
import { CardNoBorder, FeaturedProductProps } from '@/components/Atoms/Card'
import { Elevation, ThemeColors } from '@/types'
import { TeaserLink, TeaserOrientation, TeaserSize } from '../Teasers.interface'

export type TeaserBackgroundVariant = 'upsetRect' | 'tongue' | 'rect'
export type CampaignTeaserSize = 'medium' | TeaserSize

export interface CampaignTeaserProps {
  smallHeadline?: string
  headline: string
  contentText?: string
  productImage?: string
  backgroundImage?: string
  borderColor?: ThemeColors
  lazyload?: boolean
  lazyloadBackgroundImage?: boolean
  lazyloadLowQuality?: boolean
  featuredProductImages?: FeaturedProductProps[]
  badges?: BadgeType[]
  badgeActionType?: BadgeActionType
  size?: CampaignTeaserSize
  orientation?: TeaserOrientation
  tags?: string[]
  backgroundVariant?: TeaserBackgroundVariant
  elevation?: Elevation
  elevationHover?: Elevation
  link?: TeaserLink
  noBorder?: CardNoBorder
  isStageTeaser?: boolean
  fixedImageHeight?: boolean
  tagsOnMobile?: boolean
  limitLines?: number
  onClick?: (e: React.MouseEvent) => void
  clickableWithoutLink?: boolean
}

export interface StyledMainContainerProps {
  isPortrait: boolean
  isClickable: boolean
}

export interface InfoProps {
  isPortrait: boolean
  size: CampaignTeaserSize
  contentText?: string
  tags?: string[]
  limitLines?: number
}

export interface StyledTongueProps {
  height: number
  isPortrait: boolean
  hasProduct: boolean
}

export interface StyledUpsetRectProps {
  image?: string
}

export interface StyledRectProps {
  image?: string
  lazyLoading?: boolean
  lazyLoadImage?: string
  inView: boolean
}

export interface BackgroundProps {
  image?: string
  lazyloadBackgroundImage?: boolean
  lazyloadLowQuality?: boolean
  isPortrait: boolean
  backgroundVariant: TeaserBackgroundVariant
  size: CampaignTeaserSize
  hasProduct: boolean
  theme?: string
}

export interface StyledProductContainerProps {
  size: CampaignTeaserSize
  isPortrait: boolean
  isStageTeaser: boolean
  fixedImageHeight: boolean
  hasProduct: boolean
}

export interface StyledPriceContainerProps {
  isPortrait: boolean
}

export interface StyledCampaignTeaserTagWrapperProps {
  isPortrait: boolean
  tagsOnMobile: boolean
  limitLines: number
}

export interface TagsProps {
  isPortrait: boolean
  tags?: string[]
  tagsOnMobile: boolean
}
