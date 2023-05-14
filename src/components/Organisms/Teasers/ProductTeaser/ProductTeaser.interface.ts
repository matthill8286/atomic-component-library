import * as React from 'react'
import { CardNoBorder, FeaturedProductProps } from '@/components/Atoms/Card'
import { Elevation } from '@/types'
import { TeaserLink } from '../Teasers.interface'
import { BadgeType } from '@/components/Atoms/Badge'

export type TopTeaserBackgroundVariant = 'upsetRect' | 'tongue' | 'rect'

export interface TopTeaserProps {
  smallHeadline?: string
  background?: string
  headline: string
  contentText?: string
  productImage?: string
  backgroundImage?: string
  backgroundImageDesktop?: string
  lazyload?: boolean
  lazyloadBackgroundImage?: boolean
  lazyloadLowQuality?: boolean
  featuredProductImages?: FeaturedProductProps[]
  limitLines?: number
  tags?: string[]
  backgroundVariant?: TopTeaserBackgroundVariant
  elevation?: Elevation
  elevationHover?: Elevation
  link?: TeaserLink
  noBorder?: CardNoBorder
  fixedImageHeight?: boolean
  onClick?: (e: React.MouseEvent) => void
  clickableWithoutLink?: boolean
  contentful?: boolean
  inView?: boolean
  badges?: BadgeType[]
}

export interface StyledTopTeaserMainContainerProps {
  isClickable: boolean
}

export interface TopTeaserInfoProps {
  contentText?: string
  tags?: string[]
  limitLines?: number
}

export interface StyledTopTeaserTongueProps {
  height: number
}

export interface StyledTopTeaserUpsetRectProps {
  image?: string
  imageDesktop?: string
  hasProduct: boolean
}

export interface StyledTopTeaserRectProps {
  image?: string
  imageDesktop?: string
  inView?: boolean
  lazyLoadImage?: string
  lazyLoading?: boolean
  hasProduct?: boolean
  lazyloadBackgroundImage?: boolean
}

export interface TopTeaserBackgroundProps {
  image?: string
  imageDesktop?: string
  lazyloadBackgroundImage?: boolean
  backgroundVariant: TopTeaserBackgroundVariant
  hasProduct: boolean
  theme?: string
}

export interface TopTeaserMainHeadingProps {
  headline: string
  themeName?: string
  limitLines: number
}

export interface StyledTopTeaserProductContainerProps {
  fixedImageHeight: boolean
}

export interface StyledTopTeaserTagWrapperProps {
  limitLines: number
}

export interface TopTeaserTagsProps {
  tags?: string[]
}

export interface StyledTopTeaserTagWrapper {
  limitLines: number
}

export interface StyledTopTeaserInfoContainerProps {
  hasTags: boolean
  hasProduct: boolean
  backgroundVariant: TopTeaserBackgroundVariant
}
export interface StyledInfoContainerContentProps {
  hasBadges: boolean
}
