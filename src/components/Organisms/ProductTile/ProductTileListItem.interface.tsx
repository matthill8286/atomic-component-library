import { ReactNode, MouseEvent } from 'react'
import { FontSizeMap } from '@/components/Atoms/Typography/Typo/Typo.interface'
import { Product, ThemeFontSizes } from '@/types'

export interface StyledColumnProps {
  hasIcon: boolean
}

export interface StyledWrapperProps {
  hasSublineDescription?: boolean
}

export interface ProductTileListItemProps {
  imageHeight?: string
  imageMaxWidth?: number
  imageMinWidth?: number
  imageWidth?: string
  loading?: boolean
  productImage?: string
  showImage?: boolean
  imageLink?: string
  lazyLoadImage?: boolean
}

export interface ProductTileListItemChildProps {
  headerFontSize?: ThemeFontSizes | FontSizeMap
  loading?: boolean
  provider?: string
  interaction?: string
  completed?: boolean
  bookmarked?: boolean
  showComplete?: boolean
  showBookmark?: boolean
  iconsComponent?: ReactNode
  iconsRight?: boolean
  interactionShippingInfo?: string
  sellerLink?: JSX.Element
  showImage?: boolean
  hasTitleIcon?: boolean
  showInteractions?: boolean
  showProvider?: boolean
  description?: string
  sublinePrice?: boolean
  title: string
  titleIconOnClick?: (
    event: MouseEvent,
    {
      product,
      index,
      productsPerSlide,
      pageNumber,
      context,
    }: {
      product: Product
      index?: number
      productsPerSlide?: number
      pageNumber?: number
      context?: string
    },
  ) => void
  onClick?: (
    event: MouseEvent,
    {
      product,
      index,
      productsPerSlide,
      pageNumber,
      context,
    }: {
      product: Product
      index?: number
      productsPerSlide?: number
      pageNumber?: number
      context?: string
    },
  ) => void
  titleLink?: string
}
