import { array, boolean, radios, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { StorybookRouterWrapper } from '@/utils/StorybookWrapper'
import { ProductTeaser } from './ProductTeaser'
import { TopTeaserBackgroundVariant, TopTeaserProps } from './ProductTeaser.interface'
import { getTransformedImageVersion } from '@/utils/useGraphCmsImages'

const backgroundVariants: { [key: string]: TopTeaserBackgroundVariant } = {
  tongue: 'tongue',
  upsetRect: 'upsetRect',
  rect: 'rect',
}

const productImages: { [key: string]: string | undefined } = {
  none: '',
  Example1: getTransformedImageVersion('EDBzqhE5TZqIt0CEliLe'),
  Example2: getTransformedImageVersion('Qtv2VI72SrST9sPBGuuR'),
  Example3: getTransformedImageVersion('t0fyQbrNS8MT58anN0L1'),
  Example4: getTransformedImageVersion('Y6qb9VRp6F3PYl22H8gw'),
  Example5: getTransformedImageVersion('eT8kBosCTv2nQDoJdrpG'),
  Example6: getTransformedImageVersion('N1lYTvtBQo6DErnIwgpa'),
}

const backgroundImages: { [key: string]: string | undefined } = {
  none: '',
  Example1: getTransformedImageVersion('9mSN32ckQzORsQnMC7Zc'),
  Example2: getTransformedImageVersion('SdO6Eo51RZucKUK83Um7'),
}

const backgroundImagesDesktop: { [key: string]: string | undefined } = {
  none: '',
  Example1: getTransformedImageVersion('9Tb7RERLG05a2NplB7Sw'),
  Example2: getTransformedImageVersion('1FfvDDFERwWh35wkpNky'),
}

const featuredProductImages = [
  { image: 'public/images/featured_products/featured_product_danone.png' },
  { image: 'public/images/featured_products/featured_product_lxp.jpg' },
]

storiesOf('Design System/Organisms/Teasers/Product Teaser', module).add('Default', () => {
  const knobs = (): TopTeaserProps => {
    return {
      smallHeadline: text('smallHeadline', 'Featured Content'),
      headline: text('Headline', 'High standards require sensible processes'),
      contentText: text(
        'ContentText',
        'Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking.',
      ),
      productImage: radios('Product Image', productImages, productImages['none']),
      backgroundImage: radios('Background Image', backgroundImages, backgroundImages['Example1']),
      backgroundImageDesktop: radios(
        'Background Image Desktop',
        backgroundImagesDesktop,
        backgroundImagesDesktop['none'],
      ),
      backgroundVariant: radios('Background Variants', backgroundVariants, backgroundVariants['tongue']),
      featuredProductImages: featuredProductImages,
      badges: [{ id: 1, name: 'Playlist', actionType: 'prominent' }],
      tags: array('Tags', ['73 products', '23hours 18minutes', '3% completed'], ','),
    }
  }

  return (
    <StorybookRouterWrapper>
      <ProductTeaser {...knobs()} background="white" />
    </StorybookRouterWrapper>
  )
})
