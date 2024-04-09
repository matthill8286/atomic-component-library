import React from 'react'
import { ProductTileVariantProps } from '@/components/Organisms/ProductTile/helpers/layout'
import { ProductTileGridItem } from '@/components/Organisms/ProductTile/ProductTileGridItem'

export const ProductTileListItem: React.FC<ProductTileVariantProps> = ({
  orientation = 'landscape',
  ...props
}) => {
  return <ProductTileGridItem orientation={orientation} {...props} />
}
