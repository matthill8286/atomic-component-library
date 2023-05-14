import { FC } from 'react'
import { ProductTileLayout, ProductTileProps } from '@/components/Organisms/ProductTile/ProductTile.interface'

import { ProductTileGridItem } from '@/components/Organisms/ProductTile/ProductTileGridItem'
import { ProductTileListItem } from '@/components/Organisms/ProductTile/ProductTileListItem'
import { ProductTileCompactTile } from '@/components/Organisms/ProductTile/ProductTileCompactTile'

export type ProductTileVariantProps = ProductTileProps

type ProductTileVariant = FC<ProductTileVariantProps>

const layouts: Record<ProductTileLayout, ProductTileVariant> = {
  [ProductTileLayout.auto]: ProductTileGridItem,
  [ProductTileLayout.listItem]: ProductTileListItem,
  [ProductTileLayout.gridItem]: ProductTileGridItem,
  [ProductTileLayout.compact]: ProductTileCompactTile,
}

export const useLayoutComponent = (layout: ProductTileLayout): ProductTileVariant => {
  const layoutComponent = layouts[layout]
  if (!layoutComponent) {
    throw new Error(`No component for layout '${JSON.stringify(layout)}'`)
  }
  return layoutComponent
}
