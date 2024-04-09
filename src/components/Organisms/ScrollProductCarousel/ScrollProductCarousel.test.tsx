import 'jest-styled-components'
import React from 'react'
import { SkeletonBlockItem } from '@/components/Atoms/Skeleton'
import { ScrollSnapSlider } from '@/components/Molecules/ScrollSnapSlider'
import { mountWithThemeAndRouter, renderWithThemeAndRouter } from '@/testRenderer'
import { Product } from '@/types/product'
import { productNames, mockProducts } from '../ProductTile/elements/mocks'
import { ProductCarousel } from './ScrollProductCarousel'
import { ScrollProductCarouselProps } from './ScrollProductCarousel.interface'

describe('Product Carousel', () => {
  let carouselProps: ScrollProductCarouselProps
  const products: Product[] = []

  for (let i = 0; i < productNames.length; i++) {
    products.push(mockProducts[productNames[i]])
  }

  beforeEach(() => {
    carouselProps = {
      loading: false,
      lazyLoad: true,
      tileWidth: 375,
      context: 'dashboard',
      products: [...products],
      slidesPerPageSettings: { desktop: 3, tablet: 2, mobileSmall: 1, mobileBig: 1 },
      NoProductsComponent: null,
      onProductClick: () => {},
      onSlideChange: () => {},
    }
  })

  it('renders the Scroll Snap Slider', () => {
    const wrapper = renderWithThemeAndRouter(<ProductCarousel {...carouselProps} />)
    expect(wrapper).toBeDefined()
  })

  describe('with loading state', () => {
    it.skip('renders as skeleton', () => {
      const wrapper = mountWithThemeAndRouter(<ProductCarousel {...carouselProps} loading={true} />)
      expect(wrapper).toBeDefined()
      expect(wrapper.find(ScrollSnapSlider)).toBeDefined()
      expect(wrapper.find(SkeletonBlockItem).length).toEqual(3)
    })
  })

  describe('with promoted element', () => {
    const PromotedElement: React.FC = () => <div>I am Promoted</div>
    it('renders given element', () => {
      const wrapper = mountWithThemeAndRouter(
        <ProductCarousel {...carouselProps} promotedIndex={2} promoted={<PromotedElement />} />
      )
      expect(wrapper).toBeDefined()
      expect(wrapper.find(PromotedElement)).toBeDefined()
    })
  })
})
