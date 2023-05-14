import { boolean, optionsKnob as options, select } from '@storybook/addon-knobs'
import * as React from 'react'
import { Grid, Row } from '@/components/Helper/Grid'
import { TwelveColumn } from '@/components/Helper/Grid/Grid.interface'
import { StorybookWrapper } from '@/utils/StorybookWrapper'
import { ProductTileLayout } from '../ProductTile.interface'
import { Reduced } from '../ProductTilePresetProps'
import {
  productNames,
  productOptions,
  baseProps,
  featureOptions,
  gridSelection,
  mockProducts,
  presetProps,
} from '@/components/Organisms/ProductTile/elements/mocks'
import { Product } from '@/types'
import { ProductTileExpanderRow } from '@/components/Organisms/ProductTile/stories/ProductExpanderRow'
import { action } from '@storybook/addon-actions'
import { ProductTileVariantProps } from '@/components/Organisms/ProductTile/helpers/layout'
import { Icon } from '@/components/Atoms/Icon'
import { OtherBookmarkOutlined } from '@matthill8286/atomic-icon-library'
import { StyledIconButton } from '@/components/Organisms/ProductTile/stories/ProductTileGridItemStory'

export const ProductTileListItemStory = () => {
  const itemCount = select('Items per Row', gridSelection, 1) as TwelveColumn

  const selectedProductType = select('Product', productOptions, 'auto')
  const auto = selectedProductType === 'auto'

  const props: Omit<ProductTileVariantProps, 'product'> = {
    ...baseProps,
    loading: boolean('Loading state', false),
    isDisabled: boolean('Disabled', false),
    orientation: select('Orientation', ['portrait', 'landscape', undefined], 'landscape'),
    renderAddToBookmarkButton: () => (
      <StyledIconButton round isFlat>
        <Icon color="grey5" height="md">
          <OtherBookmarkOutlined />
        </Icon>
      </StyledIconButton>
    ),
  }

  const preset = select('Presets', presetProps, 'None')
  const selectedFeatures = options('Features', featureOptions, Object.values(featureOptions), {
    display: 'check',
  })

  const features =
    preset !== 'None'
      ? Reduced
      : Object.values(featureOptions).reduce((a, v) => {
          a[v] = selectedFeatures.includes(v)
          return a
        }, {})

  const products: Product[] = []

  for (let i = 0; i < itemCount; i++) {
    products.push(mockProducts[(auto && productNames[i]) || selectedProductType])
  }

  return (
    <StorybookWrapper>
      <Grid>
        <Row>
          <ProductTileExpanderRow
            {...props}
            products={products}
            noBorder={[]}
            onLockClick={action('Lock clicked')}
            onClick={action('Tile clicked')}
            layout={ProductTileLayout.listItem}
            {...features}
          />
        </Row>
      </Grid>
    </StorybookWrapper>
  )
}
