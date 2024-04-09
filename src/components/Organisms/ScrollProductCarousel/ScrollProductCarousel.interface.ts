import { Product, ProductType } from '@/types/product'
import React from 'react'
import {
  ProductStrategy,
  ProductTileLayout,
  ProductTileOrientation,
  ProductView,
  Provider,
  SponsoringDetails,
} from '@/components/Organisms/ProductTile'
import { SlidesPerPageSettings } from '@/components/Molecules/ScrollSnapSlider'
import { AnyStyledComponent } from 'styled-components'

export interface ConfigProps {
  withOverflow?: boolean
  withPadding?: boolean
  hideLeftOverflow?: boolean
}

export type ClickHandlerAvailableParams = {
  product: Product | Partial<Product>
  index: number
  productsPerSlide: number
  pageNumber: number
  context: string
}

export type ScrollProductCarouselProps = {
  NoProductsComponent: JSX.Element | null
  onProductClick?: ({
    product,
    index,
    productsPerSlide,
    pageNumber,
    context,
  }: {
    product: Product | Partial<Product>
    index: number
    productsPerSlide: number
    pageNumber: number
    context: string
  }) => void
  onSlideChange: ({
    products,
    direction,
    productAmount,
    pageNumber,
    context,
  }: {
    products: (Product | Partial<Product>)[]
    direction: string
    productAmount: number
    pageNumber: number
    context: string
  }) => void
  onInView?: ({ context }: { context: string }) => void
  onLockClick?: ({
    product,
    index,
    productsPerSlide,
    pageNumber,
    context,
  }: {
    product: Product | Partial<Product>
    index: number
    productsPerSlide: number
    pageNumber: number
    context: string
  }) => void
  headline?: string
  dataTest?: string
  redirectPath?: string
  withScrollbar?: boolean
} & ScrollProductCarouselDefaultProps

export interface ScrollProductCarouselDefaultProps {
  loading: boolean
  loadingOperation?: boolean
  promoted?: JSX.Element | boolean
  promotedIndex?: number
  products: (Product | Partial<Product>)[]
  sponsoringDetails?: SponsoringDetails | undefined
  withOverflow?: boolean
  withPadding?: boolean
  hideLeftOverflow?: boolean
  arrowPrevClass?: AnyStyledComponent
  arrowNextClass?: AnyStyledComponent
  context?: string
  playlistOrientation?: ProductTileOrientation
  title?: JSX.Element
  tileMargin?: string
  lazyLoad?: boolean
  withLQIP?: boolean
  withNativeLoading?: boolean
  showBadges?: boolean
  showBookmark?: boolean
  showSkills?: boolean
  showLock?: boolean
  showProvider?: boolean
  videoFallbackImage?: string
  playlistLayout?: ProductTileLayout
  playlistView?: ProductView
  strategyType?: ProductStrategy
  withGrid?: boolean
  showArrows?: boolean
  fixedArrowPosition?: boolean
  zeroArrowPosition?: boolean
  tileWidth?: number
  slidesPerPageSettings: SlidesPerPageSettings
  hideDummies?: boolean
  disabledProductIndexes?: number[]
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
  customSliderSettings?: Record<string, unknown>
}

export interface CarouselWrapperProps {
  tileMargin: string
  setFixedWidth?: boolean
  tileWidth?: number
}

export interface StyledTileWrapperProps {
  withLabels?: boolean
  hideDummy?: boolean
}
