import React, { useState } from 'react'
import { useWindowDimensions } from '@/components/Helper/useWindowDimensions'
import { SimpleCarousel } from '@/components/Molecules/SimpleCarousel'
import { breakpoints } from '@/styles'
import { Product } from '@/types/product'
import { ProductTile, ProductTileLayout } from '../ProductTile'
import { ProductCarouselProps, CarouselConfigProps } from './LazyProductCarousel.interface'
import { ClippingWrapper, StyledTileWrapper, StyledHeading } from './LazyProductCarousel.styled'
import { useBadges } from './useBadges'

export const LazyProductCarousel: React.FC<ProductCarouselProps> = ({
  loading = true,
  lazyLoad = true,
  products = [],
  context = 'homepage-product-carousel',
  withOverflow = true,
  withPadding = true,
  hideLeftOverflow = false,
  arrows = true,
  brightArrows = true,
  dots = true,
  title,
  smallSlides = 1,
  mediumSlides = 2,
  largeSlides = 4,
  smallConfig = {},
  mediumConfig = {},
  largeConfig = {},
  showBookmark = true,
  showSkills = true,
  showProvider,
  showLock = false,
  fixedWidth,
  tileWidth,
  playlistOrientation = 'portrait',
  playlistView = 'list',
  playlistLayout = ProductTileLayout.gridItem,
  strategyType = undefined,
  videoFallbackImage,
  renderAddToBookmarkButton,
  onProductClick = () => {
    return null
  },
  onLockClick = () => {
    return null
  },
  onSlideChange = () => {
    return null
  },
  customSlickSettings,
}) => {
  const { breakpoint } = useWindowDimensions()
  const [prevSlideIndex, setPrevSlideIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  if (!products) {
    return null
  }

  const productsPerSlideWithHook =
    breakpoint >= breakpoints.lg
      ? largeSlides
      : breakpoint >= breakpoints.md
      ? mediumSlides
      : smallSlides

  const currentConfig =
    breakpoint >= breakpoints.lg
      ? largeConfig
      : breakpoint >= breakpoints.md
      ? mediumConfig
      : smallConfig

  const getLeftOverflow = (config: CarouselConfigProps): boolean =>
    config.hideLeftOverflow ?? hideLeftOverflow

  const withArrows = (config: CarouselConfigProps): boolean => config.arrows ?? arrows
  const withDots = (config: CarouselConfigProps): boolean => config.dots ?? dots

  const handleSlideChange = (productsPerSlide: number) => (nextSlideIndex: number) => (
    products: Product[]
  ) => {
    setIsDragging(false)
    const direction = nextSlideIndex > prevSlideIndex ? 'Next' : 'Previous'
    const slideIndex = nextSlideIndex / productsPerSlide + 1
    const totalNumberOfPages = products.length / productsPerSlide

    setPrevSlideIndex(nextSlideIndex)

    const productsInSlide = products.slice(
      slideIndex * productsPerSlide,
      slideIndex * productsPerSlide + productsPerSlide
    )

    onSlideChange?.({
      products: productsInSlide,
      direction,
      productAmount: productsPerSlide,
      pageNumber: slideIndex,
      context,
      numberOfPages: totalNumberOfPages,
    })
  }

  const handleProductClick = (productsPerSlide: number) => (
    e: React.MouseEvent<HTMLElement>,
    product: Product,
    index: number,
    pageNumber: number
  ) => {
    if (isDragging) {
      e.preventDefault()
    } else {
      onProductClick({ product, index, productsPerSlide, pageNumber, context })
    }
  }

  const handleLockClick = (productsPerSlide: number) => (
    e: React.MouseEvent<HTMLElement>,
    product: Product,
    index: number,
    pageNumber: number
  ) => {
    if (isDragging) {
      e.preventDefault()
    } else {
      onLockClick?.({ product, index, productsPerSlide, pageNumber, context })
    }
  }

  const slickSettings = (config: CarouselConfigProps) => ({
    infinite: false,
    speed: 250,
    initialSlide: 0,
    dots: withDots(config),
    arrows: withArrows(config),
    beforeChange: (oldSlide: number, newSlide: number) => {
      if (oldSlide !== newSlide) {
        setIsDragging(true)
      }
    },
    ...customSlickSettings,
  })

  const carouselSettings = (config: CarouselConfigProps) => ({
    hasOverflow: config.withOverflow ?? withOverflow,
    hasPadding: config.withPadding ?? withPadding,
    fixedWidth: fixedWidth,
    brightArrows: brightArrows,
  })

  const tileSettings = {
    showBadges: true,
    loading: loading,
    isCompact: false,
    fontSize: 'xs',
    withEllipsis: true,
  }

  const renderProduct = (productsPerSlide: number) => (product: Product, index: number) => {
    const slideIndex = Math.floor(index / productsPerSlide)
    const isDummyTile = !withOverflow && !product.description
    const badges = useBadges({ product, playlistView })

    const loading = tileSettings.loading || isDummyTile

    return (
      <StyledTileWrapper key={index} withLabels>
        <ProductTile
          {...tileSettings}
          showProvider={showProvider}
          showSkills={showSkills}
          productIndex={slideIndex}
          isDisabled={product?.locked}
          videoFallbackImage={videoFallbackImage}
          isCollection={playlistView === 'collection'}
          orientation={playlistOrientation}
          badges={badges}
          sponsoringDetails={undefined} // TODO: allow sponsored products to curate custom content
          showBookmark={showBookmark}
          showLock={showLock}
          productView={playlistView}
          fontSize="sm"
          strategyType={strategyType}
          renderAddToBookmarkButton={renderAddToBookmarkButton}
          onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
            handleProductClick(productsPerSlide)(e, product, index, slideIndex)
          }
          onLockClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
            handleLockClick(productsPerSlide)(e, product, index, slideIndex)
          }
          loading={loading}
          layout={playlistLayout}
          product={product}
          lazyLoad={lazyLoad}
        />
      </StyledTileWrapper>
    )
  }

  return (
    <ClippingWrapper hideLeft={getLeftOverflow(currentConfig)}>
      {title ? <StyledHeading>{title}</StyledHeading> : null}
      <SimpleCarousel
        tileWidth={tileWidth}
        fixedWidth={fixedWidth}
        sliderSettings={{
          ...slickSettings(currentConfig),
          afterChange: (current: number) =>
            handleSlideChange(productsPerSlideWithHook)(current)(products),
          slidesToShow: productsPerSlideWithHook,
          slidesToScroll: productsPerSlideWithHook,
        }}
        items={products}
        renderSlide={renderProduct(productsPerSlideWithHook)}
        {...carouselSettings(currentConfig)}
      />
    </ClippingWrapper>
  )
}

LazyProductCarousel.displayName = 'LazyProductCarousel'
