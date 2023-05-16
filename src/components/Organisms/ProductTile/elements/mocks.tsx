import { newProductMocks, newStaticProductMocks } from './mockProduct'
import { ProductTileLayout } from '@/components/Organisms/ProductTile/ProductTile.interface'

export const layout: ProductTileLayout[] = [
  ProductTileLayout.gridItem,
  ProductTileLayout.listItem,
  ProductTileLayout.compact,
  ProductTileLayout.auto,
]

export const mockProducts = {
  product1: newProductMocks[0],
  product2: newProductMocks[1],
  product3: newProductMocks[2],
  product4: newProductMocks[4], // screenshotOverride empty test, uses image as fallback
}

export const staticMockProducts = {
  product1: newStaticProductMocks[0],
  product2: newStaticProductMocks[1],
  product3: newStaticProductMocks[2],
  product4: newStaticProductMocks[3],
}

export const gridSelection = {
  '1 Item': 1,
  '2 Items': 2,
  '3 Items': 3,
}

export const productNames = ['product1', 'product2', 'product3']

export const productOptions = {
  '(Automatic)': 'product1',
  product1: 'product1',
  product2: 'product2',
  product3: 'product3',
}

export const featureOptions = {
  showSkills: 'showSkills',
  showBookmark: 'showBookmark',
  showLock: 'showLock',
  showProvider: 'showProvider',
  showProductMeta: 'showProductMeta',
  showFeatured: 'showFeatured',
}

export const baseProps = {}

export const presetProps = ['None', 'Reduced']
