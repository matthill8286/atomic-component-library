import * as React from 'react'
import { BadgeActionType, BadgeType } from '@/components/Atoms/Badge/Badge.interface'
import { Elevation } from '@/types'
import { ThemeColors } from '@/types/theme'
import { TeaserLink, TeaserOrientation, TeaserSize } from '../Teasers.interface'

export interface TeaserProps {
  /**  image padding for product images */
  badgeActionType?: BadgeActionType
  badges?: BadgeType[]
  color?: ThemeColors
  borderColor?: ThemeColors
  contentText?: React.ReactNode
  decorationColor?: ThemeColors
  dummyMainLink?: boolean
  elevation?: Elevation
  elevationHover?: Elevation
  foldable?: 'always' | 'mobile' | 'never'
  growHeadline?: boolean
  headline: string
  headlineLimitLines?: number
  headlineTag?: keyof JSX.IntrinsicElements
  icon?: React.ReactElement
  image?: string
  altText?: string
  lazyloadLowQuality?: boolean
  linkList?: TeaserLink[]
  loading?: boolean
  mainLink?: TeaserLink
  onClick?: (event: React.MouseEvent) => void
  orientation?: TeaserOrientation
  size?: TeaserSize
  withImagePadding?: boolean
  contentful?: boolean
}

export interface FoldableWrapperProps {
  isFoldable: boolean
  isOpen: boolean
}

export interface StyledResponsiveImageContainerProps {
  orientation: TeaserOrientation
  isSmall?: boolean
}

export interface StyledTeaserProps {
  hasLinkList: boolean
  isOpen: boolean
  orientation: TeaserOrientation
}

export interface LinkListProps {
  linkList?: TeaserLink[]
}

export interface TeaserContentTextProps {
  contentText: React.ReactNode
  loading: boolean
}

export interface ChevronProps {
  isFoldable: boolean
  isOpen: boolean
  isAlternate: boolean
  isSmall?: boolean
  mainLink?: TeaserLink
}

export interface MainLinkProps {
  color?: ThemeColors
  decorationColor?: ThemeColors
  dummyMainLink?: boolean
  isSmall?: boolean
  loading: boolean
  mainLink?: TeaserLink
}

export interface ImageProps {
  image?: string
  isSmall?: boolean
  loading: boolean
  orientation: TeaserOrientation
  withImagePadding: boolean
  alt?: string
}

export interface TeaserHeadingProps {
  headline: string
  headlineLimitLines?: number
  isSmall?: boolean
  loading: boolean
  orientation: TeaserOrientation
}

export interface StyledPictureContainerProps {
  isSmall?: boolean
  orientation: TeaserOrientation
  withImagePadding: boolean
}

export interface StyledTeaserContentContainerProps {
  isSmall?: boolean
}

export interface StyledTextLinkContainerProps {
  isSmall?: boolean
}

export interface StyledTextLinkContainerProps {
  isSmall?: boolean
}

export interface StyledIconProps {
  hasMarginLeft?: boolean
  hasMarginTop?: boolean
  isSmall?: boolean
}
