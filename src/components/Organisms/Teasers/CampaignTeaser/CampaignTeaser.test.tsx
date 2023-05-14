import React from 'react'
import { Card } from '@/components/Atoms/Card'
import { mountWithThemeAndRouter, renderWithThemeAndRouter } from '@/testRenderer'
import { CampaignTeaser } from './CampaignTeaser'

describe('CampaignTeaser', () => {
  it('renders correctly: default CampaignTeaser with minimal configuration', () => {
    const tree = renderWithThemeAndRouter(
      <CampaignTeaser headline="High standards require sensible processes" elevation={0} lazyload={false} />,
    )
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly: default CampaignTeaser with maximum configuration', () => {
    const tree = renderWithThemeAndRouter(
      <CampaignTeaser
        backgroundImage="public/images/small.jpg"
        elevation={0}
        backgroundVariant="tongue"
        badgeActionType="prominent"
        badges={[
          { id: 1, name: 'Featured' },
          { id: 2, name: 'Sponsored' },
        ]}
        contentText="Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking."
        featuredProductImages={[
          { image: 'public/images/featured_products/featured_product_01.png' },
          { image: 'public/images/featured_products/featured_product_03.png' },
        ]}
        headline="High standards require sensible processes"
        orientation="auto"
        productImage="public/images/teasers/product02.png"
        size="auto"
        tags={['73 products', '23hours 18minutes', '3% completed']}
        lazyload={false}
      />,
    )
    expect(tree).toMatchSnapshot()
  })

  it('triggers click handler', () => {
    const clickHandler = jest.fn()

    const tree = mountWithThemeAndRouter(
      <CampaignTeaser
        elevation={0}
        headline="High standards require sensible processes"
        onClick={clickHandler}
        lazyload={false}
      />,
    )
    tree.find(Card).simulate('click')

    expect(clickHandler).toHaveBeenCalled()
  })
})
