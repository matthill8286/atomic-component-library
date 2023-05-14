import { boolean, select } from '@storybook/addon-knobs'
import * as React from 'react'
import { Cell, Grid, Offset, Row } from '@/components/Helper/Grid'
import { TwelveColumn } from '@/components/Helper/Grid/Grid.interface'
import { StorybookWrapper } from '@/utils/StorybookWrapper'
import { ProductTileLayout } from '../ProductTile.interface'

import {
  productNames,
  productOptions,
  baseProps,
  gridSelection,
  mockProducts,
} from '@/components/Organisms/ProductTile/elements/mocks'
import { Product } from '@/types'
import { action } from '@storybook/addon-actions'
import { ProductTile } from '@/components/Organisms/ProductTile'
import { StyledIconButton } from '@/components/Organisms/ProductTile/stories/ProductTileGridItemStory'
import { Icon } from '@/components/Atoms/Icon'
import { OtherBookmarkOutlined } from '@matthill8286/atomic-icon-library'

export const SingleProductStory = () => {
  const itemCount = select('Items per Row', gridSelection, 3) as TwelveColumn

  const selectedProductType = select('Product', productOptions, 'auto')
  const auto = selectedProductType === 'auto'

  const props = {
    ...baseProps,
    loading: boolean('Loading state', false),
    isDisabled: boolean('Disabled', false),
    videoFallbackImage: 'public/images/teasers/02.jpg',
  }

  const showLock = boolean('Locked state', false)
  const showFeatured = boolean('Featured Product', false)
  const sponsored = boolean('Sponsored product', false)

  const products: Product[] = []

  for (let i = 0; i < itemCount; i++) {
    products.push(mockProducts[(auto && productNames[i]) || selectedProductType])
  }

  const showProducts = showLock ? { ...products[0], locked: true } : { ...products[0] }

  return (
    <StorybookWrapper>
      <Grid>
        <Row>
          <Offset columns={3} />
          <Cell columns={6}>
            <ProductTile
              {...props}
              product={showProducts}
              showLock={showLock}
              showBookmark={!showLock}
              showFeatured={showFeatured}
              noBorder={[]}
              onLockClick={action('Lock clicked')}
              onClick={action('Tile clicked')}
              renderAddToBookmarkButton={() => (
                <StyledIconButton round isFlat>
                  <Icon color="grey5" height="md">
                    <OtherBookmarkOutlined />
                  </Icon>
                </StyledIconButton>
              )}
              layout={ProductTileLayout.gridItem}
              productSponsoring={{
                isSponsored: sponsored,
                showUppercase: false,
                label: 'Product Sponsor',
                title: 'Sponsored',
                infoText: 'Some random content so we can showcase sponsored product content',
              }}
            />
          </Cell>
        </Row>
      </Grid>
    </StorybookWrapper>
  )
}
