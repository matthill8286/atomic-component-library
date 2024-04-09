import { array, boolean, radios, select, text } from '@storybook/addon-knobs'
import * as React from 'react'
import { BadgeActionType } from '@/components/Atoms/Badge/Badge.interface'
import { Elevation } from '@/types'
import { TeaserOrientation } from '../Teasers.interface'
import { CampaignTeaser } from './CampaignTeaser'
import { CampaignTeaserProps, CampaignTeaserSize, TeaserBackgroundVariant } from './CampaignTeaser.interface'
import { getTransformedImageVersion } from '@/utils/useGraphCmsImages'

const actionTypes: { [key: string]: BadgeActionType } = {
  disabled: 'disabled',
  prominent: 'prominent',
  secondary: 'secondary',
}

const sizes: { [key: string]: CampaignTeaserSize } = {
  auto: 'auto',
  small: 'small',
  medium: 'medium',
  large: 'large',
}

const orientations: { [key: string]: TeaserOrientation } = {
  auto: 'auto',
  portrait: 'portrait',
}

const elevations: Elevation[] = [0, 1, 2, 3, 4]

const backgroundVariants: { [key: string]: TeaserBackgroundVariant } = {
  tongue: 'tongue',
  upsetRect: 'upsetRect',
  rect: 'rect',
}

const productImages: { [key: string]: string | undefined } = {
  none: '',
  Example1: getTransformedImageVersion('EDBzqhE5TZqIt0CEliLe'),
  Example2: getTransformedImageVersion('XhMIsyGQCa35lOttXGbA'),
  Example3: getTransformedImageVersion('t0fyQbrNS8MT58anN0L1'),
  Example4: getTransformedImageVersion('Y6qb9VRp6F3PYl22H8gw'),
}

const backgroundImages: { [key: string]: string | undefined } = {
  none: '',
  Example1: getTransformedImageVersion('9mSN32ckQzORsQnMC7Zc'),
  Example2: getTransformedImageVersion('NPgqQFqR0uJ1XhB00sGg'),
}

const featuredProductImages = [
  { image: 'public/images/featured_products/featured_product_danone.png' },
  { image: 'public/images/featured_products/featured_product_lxp.jpg' },
]

export default {
  title: 'Design System/Organisms/Teasers/CampaignTeaser',
}

export const Default = () => {
  const withFeaturedProducts = boolean('With Featured Products', true)

  const knobs = (): CampaignTeaserProps => {
    return {
      isStageTeaser: boolean('Show as StageTeaser', false),
      fixedImageHeight: boolean('Fixed Image Height', false),
      smallHeadline: text('smallHeadline', 'Sponsored Playlist'),
      elevation: select('Elevation', elevations, 0),
      elevationHover: select('Elevation on Hover', elevations, 1),
      headline: text('Headline', 'High standards require sensible processes'),
      contentText: text(
        'ContentText',
        'Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking.',
      ),
      productImage: radios('Product Image', productImages, productImages['none']),
      backgroundImage: radios('Background Image', backgroundImages, backgroundImages['Example1']),
      lazyloadBackgroundImage: boolean('Lazyload Image', true),
      backgroundVariant: radios('Background Variants', backgroundVariants, backgroundVariants['tongue']),
      featuredProductImages: withFeaturedProducts ? featuredProductImages : undefined,
      badges: [
        { id: 1, name: 'Featured' },
        { id: 2, name: 'Sponsored', actionType: 'disabled' },
        { id: 3, name: 'Third Badge' },
        { id: 3, name: 'Fourth Badge' },
      ],
      badgeActionType: radios('Badge type', actionTypes, actionTypes['secondary']),
      size: radios('Size', sizes, sizes['auto']),
      orientation: radios('Orientation', orientations, orientations['auto']),
      tags: array('Tags', ['73 products', '23hours 18minutes', '3% completed'], ','),
    }
  }

  return (
    <>
      <CampaignTeaser {...knobs()} />
    </>
  )
}

export const LessContent = () => {
  const knobs = (): CampaignTeaserProps => {
    return {
      headline: text('Headline', 'High standards require sensible processes'),
      contentText: text(
        'ContentText',
        'Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking.',
      ),
      elevation: 0,
      productImage: radios('Product Image', productImages, productImages['none']),
      backgroundImage: getTransformedImageVersion('9mSN32ckQzORsQnMC7Zc'),
      badgeActionType: 'secondary',
      size: radios('Size', sizes, sizes['auto']),
      orientation: 'auto',
    }
  }

  return (
    <>
      <CampaignTeaser {...knobs()} />
    </>
  )
}

LessContent.story = {
  name: 'Less content',
}
