import { MouseEvent, ReactNode } from 'react'
import { NativeLazyLoadType } from '@/components/Atoms/Picture'
import { FontSizeMap } from '@/components/Atoms/Typography/Typo/Typo.interface'
import { ThemeFontSizes } from '@/types'

export interface ProductTileCompactProps {
  imageHeight?: string
  imageMaxWidth?: string
  imageMinWidth?: string
  imageWidth?: string
  loading?: boolean
  productImage?: string
  unsupportedMedia?: boolean
  isDisabled?: boolean
  showImage?: boolean
  onClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => void
  isVideo?: boolean
  title?: string
  embedUrl?: string | null
  imageLink?: string
  lazyLoadImage?: NativeLazyLoadType
  children?: ReactNode
}

export interface ProductTileCompactChildProps {
  headerFontSize?: ThemeFontSizes | FontSizeMap
  loading?: boolean
  interaction?: string
  completed?: boolean
  bookmarked?: boolean
  iconsComponent?: ReactNode
  mobile?: boolean
  showImage?: boolean
  showInteractions?: boolean
  description?: string | undefined
  title?: string | undefined
  titleIconOnClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => void
  onClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => void
  label?: string | undefined
  provider?: string | undefined
  type?: string | undefined
  competency?: string | undefined
  id?: string
  url?: string
  imageLink?: string
  children?: ReactNode
}
