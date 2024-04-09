import React from 'react'
import { ProductsTable } from '@/components/Organisms/ProductsTable'
import { tableContentDataMock, tableHeadingDataMock } from './ProductsTable.mock'

export default {
  title: 'Design System/Organisms/ProductsTable',
}

export const Default = () => (
  <ProductsTable
    tableHeading={tableHeadingDataMock}
    tableContent={tableContentDataMock}
    getProductUrl={() => '/de/product/_koenic-kwm-71412-a3-2291622.html'}
    getImageUrl={(id: string) => id}
  />
)
