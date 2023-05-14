import { storiesOf } from '@storybook/react'
import React from 'react'
import { ProductsTable } from '@/components/Organisms/ProductsTable'
import { tableContentDataMock, tableHeadingDataMock } from './ProductsTable.mock'

storiesOf('Design System/Organisms/ProductsTable', module).add('Default', () => (
  <ProductsTable
    tableHeading={tableHeadingDataMock}
    tableContent={tableContentDataMock}
    getProductUrl={() => '/de/product/_koenic-kwm-71412-a3-2291622.html'}
    getImageUrl={(id: string) => id}
  />
))
