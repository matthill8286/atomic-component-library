import React from 'react'
import { Product, ProductType } from '@/types/product'
import {
  ProductStrategy,
  ProductTileProduct,
  ProductTileLayout,
  ProductTileOrientation,
  ProductView,
  Provider,
  SponsoringDetails,
} from '@/components/Organisms/ProductTile'

export type ClickHandlerAvailable = {
  product: Product | Partial<Product>
  index: number
  productsPerSlide: number
  pageNumber: number
  context: string
}

export interface ProductWrapperProps {
  product: Product
  playlistView: ProductView
  showBadges?: boolean
}

export type ProductCarouselProps = {
  onProductClick?: ({
    product,
    index,
    productsPerSlide,
    pageNumber,
    context,
  }: {
    product: Product
    index: number
    productsPerSlide: number
    pageNumber: number
    context: string
  }) => void
  onSlideChange?: ({
    products,
    direction,
    productAmount,
    pageNumber,
    context,
    numberOfPages,
  }: {
    products: Product[]
    direction: string
    productAmount: number
    pageNumber: number
    context: string
    numberOfPages: number
  }) => void
  onLockClick?: ({
    product,
    index,
    productsPerSlide,
    pageNumber,
    context,
  }: {
    product: Product
    index: number
    productsPerSlide: number
    pageNumber: number
    context: string
  }) => void
  customSlickSettings?: Record<string, unknown>
} & ProductCarouselDefaultProps

export interface CarouselConfigProps {
  withOverflow?: boolean
  withPadding?: boolean
  hideLeftOverflow?: boolean
  arrows?: boolean
  dots?: boolean
  brightArrows?: boolean
}

export interface ProductCarouselDefaultProps {
  loading: boolean
  lazyLoad?: boolean
  products: Product[]
  context: string
  withOverflow?: boolean
  withPadding?: boolean
  hideLeftOverflow?: boolean
  smallSlides?: number
  mediumSlides?: number
  largeSlides?: number
  brightArrows?: boolean
  arrows?: boolean
  dots?: boolean
  promoted?: boolean
  tileWidth?: number
  title: JSX.Element | undefined
  fixedWidth?: boolean
  promotedIndex?: number
  showRating?: boolean
  smallConfig?: CarouselConfigProps
  mediumConfig?: CarouselConfigProps
  largeConfig?: CarouselConfigProps
  showBadges?: boolean
  showBookmark?: boolean
  showSkills?: boolean
  showLock?: boolean
  showProvider?: boolean
  videoFallbackImage?: string
  playlistLayout?: ProductTileLayout
  playlistView?: ProductView
  strategyType?: ProductStrategy | undefined
  playlistOrientation?: ProductTileOrientation
  disabledProductIndexes?: number[]
  sponsoringDetails?: SponsoringDetails | undefined
  renderAddToBookmarkButton?: (ProductForBookmarking: {
    id?: number | undefined
    bookmarked?: boolean
    title?: string
    provider?: Provider | undefined
    duration?: string | undefined
    type?: ProductType
    completed?: any
    productIndex?: number
    playlistId?: string | undefined
  }) => JSX.Element | React.ReactNode
}

export interface StyledProductTileWrapperProps {
  withLabels: boolean
}
