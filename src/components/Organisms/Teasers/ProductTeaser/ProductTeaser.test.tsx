import React from 'react'
import { Card } from '@/components/Atoms/Card'
import { mountWithThemeAndRouter, renderWithThemeAndRouter } from '@/testRenderer'
import { ProductTeaser } from './ProductTeaser'

describe('TopTeaser', () => {
  it('renders correctly: default ProductTeaser with minimal configuration', () => {
    const tree = renderWithThemeAndRouter(
      <ProductTeaser headline="High standards require sensible processes" elevation={0} />
    )
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly: default ProductTeaser with maximum configuration', () => {
    const tree = renderWithThemeAndRouter(
      <ProductTeaser
        backgroundImage="public/images/small.jpg"
        elevation={0}
        backgroundVariant="tongue"
        contentText="Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking."
        featuredProductImages={[
          { image: 'public/images/featured_products/featured_product_01.png' },
          { image: 'public/images/featured_products/featured_product_03.png' },
        ]}
        headline="High standards require sensible processes"
        productImage="public/images/teasers/product02.png"
        tags={['73 products', '23hours 18minutes', '3% completed']}
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly: ProductTeaser', () => {
    const tree = renderWithThemeAndRouter(
      <ProductTeaser
        backgroundImage="public/images/small.jpg"
        elevation={0}
        backgroundVariant="tongue"
        contentText="Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking."
        featuredProductImages={[
          { image: 'public/images/featured_products/featured_product_01.png' },
          { image: 'public/images/featured_products/featured_product_03.png' },
        ]}
        headline="High standards require sensible processes"
        tags={['73 products', '23hours 18minutes', '3% completed']}
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('triggers click handler', () => {
    const clickHandler = jest.fn()

    const tree = mountWithThemeAndRouter(
      <ProductTeaser
        elevation={0}
        headline="High standards require sensible processes"
        onClick={clickHandler}
      />
    )
    tree.find(Card).simulate('click')

    expect(clickHandler).toHaveBeenCalled()
  })
})
