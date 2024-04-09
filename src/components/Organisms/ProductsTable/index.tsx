import React from 'react'
import { useWindowDimensions } from '@/components/Helper/useWindowDimensions'
import { breakpoints } from '@/styles'
import { ProductsTableProps } from './ProductsTable.interface'
import { ProductsTableDesktop } from './ProductsTableDesktop'
import { ProductsTableMobile } from './ProductsTableMobile'

export const ProductsTable: React.FC<ProductsTableProps> = props => {
  const { breakpoint } = useWindowDimensions()
  if (!props.tableHeading || !props.tableContent) {
    return null
  }
  return (
    <div className="mms-products-table">
      {breakpoint <= breakpoints.sm ? (
        <ProductsTableMobile {...props} />
      ) : (
        <ProductsTableDesktop {...props} />
      )}
    </div>
  )
}
