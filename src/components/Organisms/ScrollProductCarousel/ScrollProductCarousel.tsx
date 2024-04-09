import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ScrollSnapSlider } from '@/components/Molecules/ScrollSnapSlider'
import { Product } from '@/types'
import { breakpoints } from '@/styles'
import {
  ProductSponsoring,
  ProductTile,
  ProductTileLayout,
  ProductTileProps,
} from '@/components/Organisms/ProductTile'
import { ScrollProductCarouselProps } from './ScrollProductCarousel.interface'
import { CarouselWrapper, TileFragment, TileWrapper } from './ScrollProductCarousel.styled'
import { useWindowDimensions } from '@/components/Helper'
import { BadgeType } from '@/components/Atoms/Badge'

export const ProductCarousel: React.FC<ScrollProductCarouselProps> = ({
  loading = true,
  lazyLoad = true,
  promoted,
  promotedIndex = 0,
  products = [],
  disabledProductIndexes = [],
  context = 'home-scroll-carousel',
  tileMargin = 'md',
  withOverflow = true,
  withGrid = false,
  showArrows = true,
  showBookmark = true,
  NoProductsComponent,
  showSkills = true,
  showProvider,
  sponsoringDetails,
  showLock = false,
  playlistOrientation = 'portrait',
  playlistView = 'list',
  playlistLayout = ProductTileLayout.gridItem,
  strategyType,
  videoFallbackImage,
  fixedArrowPosition = true,
  zeroArrowPosition = false,
  renderAddToBookmarkButton,
  title,
  tileWidth = 250,
  slidesPerPageSettings,
  hideDummies = false,
  dataTest,
  withLQIP,
  withNativeLoading,
  withScrollbar = true,
  onProductClick = () => {
    return null
  },
  onLockClick = () => {
    return null
  },
  onSlideChange = () => {
    return null
  },
  onInView,
  arrowPrevClass,
  arrowNextClass,
}): JSX.Element | null => {
  const [scrolled, scrolledSet] = useState<boolean>(false)
  const { breakpoint } = useWindowDimensions()
  const [prevSlideIndex, setPrevSlideIndex] = useState(0)

  const productsPerSlideWithHook =
    breakpoint >= breakpoints.lg
      ? slidesPerPageSettings.desktop
      : breakpoint >= breakpoints.md
      ? slidesPerPageSettings.tablet
      : slidesPerPageSettings.mobileBig

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: '50px 0px',
  })

  useEffect(() => {
    if (inView && onInView !== undefined && !loading && products.length > 0) {
      onInView({ context })
    }
  }, [inView, loading, onInView, context, products])

  if (!products || products.length < 1) {
    return !loading ? NoProductsComponent : null
  }

  const handleSlideChange = (productsPerSlide: number) => (nextSlideIndex: number) => {
    scrolledSet(false)
    const direction = nextSlideIndex > prevSlideIndex ? 'Next' : 'Previous'
    const slideIndex = nextSlideIndex / productsPerSlide
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
    })
  }

  const handleProductClick = (productsPerSlide: number) => (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    product: Product | Partial<Product>,
    index: number,
    pageNumber: number
  ) => {
    if (scrolled) {
      event.preventDefault()
    }

    if (!product.locked && onProductClick) {
      onProductClick({ product, index, productsPerSlide, pageNumber, context })
    }
  }

  const handleLockClick = (productsPerSlide: number) => (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    product: Product | Partial<Product>,
    index: number,
    pageNumber: number
  ) => {
    if (onLockClick) {
      onLockClick({ product, index, productsPerSlide, pageNumber, context })
    }
  }

  const tileSettings: Omit<ProductTileProps, 'product'> = {
    loading: loading,
    fontSize: 'sm',
    sponsoringDetails: undefined,
    withEllipsis: true,
  }

  const carouselOrientation =
    playlistLayout === ProductTileLayout.gridItem ? 'portrait' : 'landscape'
  const isGridLayout = playlistLayout === ProductTileLayout.gridItem

  const renderProduct = (productsPerSlide: number) => (
    product: Product | Partial<Product>,
    index: number
  ): JSX.Element => {
    const slideIndex = Math.floor(index / productsPerSlide)
    const isDummyTile = !withOverflow && !product.description

    const productTileProduct: Product | Partial<Product> = {
      ...product,
    }

    // no wrapper in case of sponsored product
    const Wrapper = sponsoringDetails?.isSponsored ? TileFragment : TileWrapper
    const productsWithSponsor = productTileProduct?.sponsored
    const loading = tileSettings.loading || isDummyTile
    const disabled = disabledProductIndexes.findIndex(x => x === index) !== -1

    return (
      <Wrapper
        hideDummy={isDummyTile && hideDummies && !scrolled}
        aria-rowindex={index}
        key={`ProductTile-${index}`}
        withLabels={productsWithSponsor}>
        <ProductTile
          {...tileSettings}
          showProvider={showProvider}
          showSkills={showSkills}
          badges={
            (playlistView === 'collection' &&
              product?.__typename &&
              ([{ name: product?.__typename, actionType: 'prominent' }] as BadgeType[])) ||
            []
          }
          videoFallbackImage={videoFallbackImage}
          isCollection={playlistView === 'collection'}
          orientation={carouselOrientation}
          sponsoringDetails={undefined} // todo: allow sponsored products to curate custom content
          showBookmark={showBookmark}
          showLock={showLock}
          isDisabled={disabled}
          productView={playlistView}
          productIndex={index}
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
          product={productTileProduct}
          lazyLoad={lazyLoad}
          inView={inView}
        />
      </Wrapper>
    )
  }

  const renderProducts = () => {
    if (!promoted)
      return [...products.map(renderProduct(productsPerSlideWithHook)), <div key="right-spacer" />]
    const promotedElement: (boolean | JSX.Element | null)[] = promoted ? [promoted] : []
    return [
      ...products.slice(0, promotedIndex).map(renderProduct(productsPerSlideWithHook)),
      ...promotedElement,
      ...products.slice(promotedIndex).map(renderProduct(productsPerSlideWithHook)),
      <div key="right-spacer" />,
    ]
  }

  return (
    <CarouselWrapper
      tileMargin={tileMargin}
      isGridLayout={isGridLayout}
      tileWidth={tileWidth}
      setFixedWidth={slidesPerPageSettings?.desktop >= 4 || products.length < 4}
      ref={ref}
      key={`Carousel-${products.length}`}
      {...(typeof dataTest !== 'undefined' && { 'data-test': dataTest })}>
      {sponsoringDetails ? (
        <ProductSponsoring layout="carousel" sponsoringDetails={sponsoringDetails} />
      ) : null}
      <ScrollSnapSlider
        slideWidth={tileWidth}
        isGridLayout={isGridLayout}
        withGrid={withGrid}
        showScrollbar={withScrollbar && products.length > 3}
        onScrollStart={() => {
          if (!scrolled) scrolledSet(true)
        }}
        onScrollEnd={handleSlideChange(productsPerSlideWithHook)}
        showArrows={showArrows && products.length > 3}
        arrowDataTest="scroll-snap-slider-arrow"
        arrowPrevClass={arrowPrevClass}
        arrowNextClass={arrowNextClass}
        fixedArrowPosition={fixedArrowPosition}
        zeroArrowPosition={zeroArrowPosition}
        slidesPerPageSettings={slidesPerPageSettings}
        title={title}>
        {renderProducts()}
      </ScrollSnapSlider>
    </CarouselWrapper>
  )
}
