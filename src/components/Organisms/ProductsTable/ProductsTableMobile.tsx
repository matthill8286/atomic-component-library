import zip from 'lodash/zip'
import React, { useMemo } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/Atoms/Table'
import { CopyText } from '@/components/Atoms/Typography'
import { convertPrice } from '@/utils/convertPrice'
import { IconOrText } from './IconOrText'
import { ImageAndTextCell } from './ImageAndTextCell'
import { ProductCell } from './ProductCell'
import { ProductsTableProps, TableRowDataProps } from './ProductsTable.interface'
import {
  StyledFixedTable,
  StyledMobileTable,
  StyledScrollTable,
} from './ProductsTableMobile.styled'

export const ProductsTableMobile: React.FC<ProductsTableProps> = ({
  tableHeading,
  tableContent,
  getProductUrl,
}) => {
  const renderTable = (features: TableRowDataProps[], content: TableRowDataProps[][]) => {
    return (
      <Table>
        <TableHead>
          <TableRow collapsible={false}>
            <TableCell key="blank" cellType="th" noBorder collapsible={false}>
              &nbsp;
            </TableCell>
            {features &&
              features.map((featureElement: TableRowDataProps, index) => (
                <TableCell
                  collapsible={false}
                  key={featureElement.text + index}
                  cellType={'th'}
                  borderDirection="right">
                  {featureElement.isFeatureName ? (
                    <ImageAndTextCell>
                      {featureElement.image && <img src={featureElement.image.url} alt="" />}
                      <CopyText tag={'span'} fontSize={'sm'}>
                        {featureElement.text}
                      </CopyText>
                    </ImageAndTextCell>
                  ) : (
                    <IconOrText textType={featureElement.text} />
                  )}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {content &&
            content.map((productRow: TableRowDataProps[], index) => {
              if (!productRow) {
                return null
              }
              const product = tableHeading[index]
              if (!product?.product) {
                return null
              }
              const productId = product.productId
              const { title } = product.product
              const linkUrl = getProductUrl(title, productId)
              return (
                <TableRow key={'feature-' + index} collapsible={false}>
                  <TableCell key={'product'} cellType={'th'} noBorder collapsible={false}>
                    <ProductCell linkUrl={linkUrl}>
                      <CopyText tag={'span'} fontSize={'sm'} weight="semibold">
                        {title.slice(0, 30)}
                      </CopyText>
                      <CopyText tag={'span'}>
                        {' '}
                        {convertPrice(product?.price?.price, product?.price?.currency, '', false)}
                      </CopyText>
                    </ProductCell>
                  </TableCell>
                  {productRow.map((feature: TableRowDataProps, index) => {
                    return (
                      <TableCell
                        key={feature.text + index}
                        borderDirection="right"
                        collapsible={false}>
                        <IconOrText textType={feature.text} />
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    )
  }

  // instead of feature-based rows as in the desktop table we want to have product-based rows
  // therefore we need to transpose the table content
  const transposedContent = content => {
    const contentMatrix = content
      ? content.map(({ tableRow }) => {
          return tableRow ? Object.values(tableRow) : null
        })
      : []

    const transposed = zip(...contentMatrix) as TableRowDataProps[][]
    const featureCells = transposed ? transposed[0] : []
    const contentCells = transposed ? transposed.slice(1, transposed.length) : []
    return { featureCells, contentCells }
  }

  const { featureCells, contentCells } = useMemo(() => transposedContent(tableContent), [
    tableContent,
  ])

  const mobileTable = renderTable(featureCells, contentCells)

  return (
    <StyledMobileTable>
      <StyledFixedTable>{mobileTable}</StyledFixedTable>
      <StyledScrollTable>{mobileTable}</StyledScrollTable>
    </StyledMobileTable>
  )
}
