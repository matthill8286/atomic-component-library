import React from 'react'
import { SimpleCarousel } from '@/components/Molecules/SimpleCarousel'
import { mountWithTheme } from '@/testRenderer'
import { Product } from '@/types/product'
import { LazyProductCarousel } from './LazyProductCarousel'
import { productNames, mockProducts } from '@/components/Organisms/ProductTile'

const MockProductContextWrapperComponent: React.FC<any> = ({ children }) => children

describe('Lazy Product Carousel', () => {
  let carouselProps
  const products: Product[] = []

  for (let i = 0; i < productNames.length; i++) {
    products.push(mockProducts[productNames[i]])
  }

  beforeEach(() => {
    carouselProps = {
      ProductContextWrapperComponent: MockProductContextWrapperComponent,
      loading: false,
      lazyLoad: false,
      context: 'home',
      products: [...products],
      onProductClick: () => {},
      onEnergyClick: () => {},
      onSlideChange: () => {},
    }
  })

  it('renders without crashing', () => {
    const wrapper = mountWithTheme(<LazyProductCarousel {...carouselProps} />)
    expect(wrapper).toBeDefined()
  })

  it.skip('renders snapshot', () => {
    const wrapper = mountWithTheme(<LazyProductCarousel {...carouselProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('with ssr and client', () => {
    it.skip('renders for ssr', () => {
      const wrapper = mountWithTheme(<LazyProductCarousel {...carouselProps} ssr />)
      const carousels = wrapper.find(SimpleCarousel)
      expect(carousels.length).toBe(3)
    })

    it('renders for client', () => {
      const wrapper = mountWithTheme(<LazyProductCarousel {...carouselProps} />)
      const carousels = wrapper.find(SimpleCarousel)
      expect(carousels.length).toBe(1)
    })

    describe('with loading state', () => {
      it('renders as skeleton', () => {
        const wrapper = mountWithTheme(<LazyProductCarousel {...carouselProps} loading />)
        expect(wrapper).toBeDefined()
      })

      it('renders with lazyload', () => {
        const wrapper = mountWithTheme(<LazyProductCarousel {...carouselProps} loading lazyLoad />)
        expect(wrapper).toBeDefined()
      })
    })
  })
})
