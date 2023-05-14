import * as React from 'react'
import { BadgeActionType, BadgeType } from '@/components/Atoms/Badge/Badge.interface'
import { Elevation } from '@/types'
import { TeaserLink } from '../Teasers.interface'

export interface ImageTeaserProps {
  link: TeaserLink
  badges?: BadgeType[]
  badgeActionType?: BadgeActionType
  images: TeaserImages
  elevation?: Elevation
  elevationHover?: Elevation
  onClick?: (event: React.MouseEvent) => void
  lazyloadLowQuality?: boolean
  contentful?: boolean
}

type ImageTeaser = Omit<ImageTeaserProps, 'link' | 'lazyloadLowQuality' | 'contentful' | 'images'>

export interface ImageTeaserFCProps extends ImageTeaser {
  finalImages: (string | undefined)[]
}

export interface TeaserImages {
  xl: string | undefined
  lg: string | undefined
  md: string | undefined
  sm: string | undefined
}
