import { action } from '@storybook/addon-actions'
import { boolean, number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Cell, Grid, Row } from '@/components/Helper/Grid'
import { Product } from '@/types/product'
import { loveFilmProduct, microsoftProduct, mockProduct } from './mockProducts'
import { LazyProductCarousel } from './LazyProductCarousel'
import { ProductSponsoring, ProductStrategy, newProductStructuredMocks } from '@/components/Organisms/ProductTile'
import { CopyText, Heading } from '@/components/Atoms/Typography'
import { OtherBookmarkOutlined } from 'atomic-icon-library'
import { Icon } from '@/components/Atoms/Icon'

const mockProducts = {
  nexus: mockProduct,
  loveFilm: loveFilmProduct,
  microsoft: microsoftProduct,
}

const structuredProducts = [...newProductStructuredMocks]
const setCompleted = [...newProductStructuredMocks].map((product) => ({
  ...product,
  locked: false,
}))

export const productNames = ['nexus', 'loveFilm', 'microsoft']

const Placeholder: React.FC<{ tint?: boolean }> = ({ tint }) => {
  const styles = {
    padding: '1rem',
    background: tint ? '#444' : '#eee',
    minHeight: '375px',
  }

  return <div style={styles} />
}

Placeholder.displayName = 'Placeholder'

const customTitle = () => (
  <>
    <ProductSponsoring
      sponsoringDetails={{
        isSponsored: true,
        showUppercase: true,
        label: 'Recommendations',
        title: 'Notification Title',
        infoText: 'Some random content so we can showcase sponsored product content',
      }}
      layout="carousel"
    />
    <Heading bold scale="level-2" tag="h2" color="primary">
      Playlists
    </Heading>
  </>
)

const knobs = () => ({
  loading: boolean('Loading', false),
  arrows: boolean('Arrows', true),
  withOverflow: boolean('Overflow', true),
  withPadding: boolean('Add Padding', true),
  hideLeftOverflow: boolean('Hide Left Overflow', false),
  smallSlides: number('Slides in Small Viewport', 1),
  mediumSlides: number('Slides in Medium Viewport', 2),
  largeSlides: number('Slides in Large Viewport', 3),
  showArrows: boolean('Arrows', true),
  playlistOrientation: select('Playlist Orientation', ['portrait', 'landscape', undefined], 'portrait'),
  NoProductsComponent: <CopyText>No Products here</CopyText>,
  tileMargin: select('Tile Margin', ['xs', 'sm', 'md'], 'sm'),
  playlistView: select('Playlist Type', ['list', 'collection'], 'list'),
  title: boolean('With Title', true) ? customTitle() : undefined,
  tileWidth: number('TileWidth', 360),
  onProductClick: action('product'),
  onLockClick: action('lock'),
  onSlideChange: action('slide changed'),
  renderAddToBookmarkButton: () => (
    <Icon onClick={action('preBookmarkProps')}>
      <OtherBookmarkOutlined />
    </Icon>
  ),
  showNoProducts: boolean('With No Products', false),
  showCompleted: boolean('Set products completed', false),
})

const mockedProductsWithNames = () => {
  const products: Product[] = []

  for (let i = 0; i < productNames.length; i++) {
    products.push(mockProducts[productNames[i]])
  }

  return products
}

const fixedWidth = () => boolean('Fixed Column Width', false)

storiesOf('Design System/Organisms/LazyProductCarousel', module)
  .add('Default', () => {
    const products: Product[] = []

    for (let i = 0; i < productNames.length; i++) {
      products.push(mockProducts[productNames[i]])
    }

    if (fixedWidth()) {
      return (
        <Grid fixedColumnWidth>
          <Row>
            <Cell columns={12}>
              <LazyProductCarousel
                {...knobs()}
                context={'homepage'}
                strategyType={select(
                  'Playlist Strategy',
                  [ProductStrategy.structured, ProductStrategy.timebox, undefined],
                  undefined,
                )}
                products={[...products, ...products, ...products, ...products]}
              />
            </Cell>
          </Row>
        </Grid>
      )
    }

    return (
      <LazyProductCarousel
        {...knobs()}
        brightArrows
        context={'homepage'}
        strategyType={select(
          'Playlist Strategy',
          [ProductStrategy.structured, ProductStrategy.timebox, undefined],
          undefined,
        )}
        products={[...products, ...products, ...products, ...products]}
      />
    )
  })
  .add('Loading', () => {
    const products: Product[] = []

    for (let i = 0; i < productNames.length; i++) {
      products.push(mockProducts[productNames[i]])
    }

    return (
      <LazyProductCarousel
        {...knobs()}
        loading
        context={'homepage'}
        products={[...products, ...products, ...products, ...products]}
      />
    )
  })
  .add('Playlists with disabled indexes', () => {
    return (
      <Grid>
        <Row>
          <Cell columns={12}>
            <LazyProductCarousel
              {...knobs()}
              tileWidth={380}
              context="structured-products"
              sponsoringDetails={{
                isSponsored: true,
                showUppercase: true,
                label: 'Recommendations',
                title: 'Notification Title',
                infoText: 'Some random content so we can showcase sponsored product content',
              }}
              products={knobs().showCompleted ? setCompleted : knobs().showNoProducts ? [] : structuredProducts}
              strategyType={ProductStrategy.structured}
              largeSlides={knobs().playlistOrientation === 'landscape' ? 2 : 3}
              mediumSlides={2}
              smallSlides={1}
            />
          </Cell>
        </Row>
      </Grid>
    )
  })
