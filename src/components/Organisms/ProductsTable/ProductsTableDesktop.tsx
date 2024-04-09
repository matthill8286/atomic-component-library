import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/Atoms/Table'
import { CopyText } from '@/components/Atoms/Typography'
import { convertPrice } from '@/utils/convertPrice'
import { IconOrText } from './IconOrText'
import { ImageAndTextCell } from './ImageAndTextCell'
import { ProductCell } from './ProductCell'
import {
  ProductsTableProps,
  TableContentRow,
  TableHeadingDataProps,
  TableRowDataProps,
} from './ProductsTable.interface'
import { EmptyCell, StyledDesktopTable } from './ProductsTableDesktop.styled'

export const ProductsTableDesktop: React.FC<ProductsTableProps> = ({
  tableHeading,
  tableContent,
  getProductUrl,
  getImageUrl,
  renderAddToBasketButton,
}) => {
  return (
    <StyledDesktopTable>
      <Table layout={'auto'}>
        <TableHead>
          <TableRow>
            <TableCell key={'blank cell'} cellType="th">
              &nbsp;
            </TableCell>
            {tableHeading &&
              tableHeading.length &&
              tableHeading.map((productElement: TableHeadingDataProps) => {
                if (!productElement.product) {
                  return (
                    <TableCell key={'empty'}>
                      <EmptyCell>&nbsp;</EmptyCell>
                    </TableCell>
                  )
                }
                const { title, titleImageId } = productElement.product
                const linkUrl = getProductUrl(title, productElement.productId)
                return (
                  <TableCell key={productElement.productId} cellType="th">
                    {productElement.product && (
                      <ProductCell linkUrl={linkUrl}>
                        <img src={getImageUrl(titleImageId)} alt={title} />
                        <CopyText tag={'span'} fontSize={'sm'} weight="semibold">
                          {title.slice(0, 30)}
                        </CopyText>
                        <CopyText tag={'span'} fontSize={'sm'}>
                          {convertPrice(
                            productElement?.price?.price,
                            productElement?.price?.currency,
                            '',
                            false
                          )}
                        </CopyText>
                      </ProductCell>
                    )}
                  </TableCell>
                )
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableContent.map((row: TableContentRow, rowIndex: number) => {
            return (
              row.tableRow && (
                <TableRow key={'feature-' + rowIndex}>
                  {row.tableRow.map((featureCell: TableRowDataProps, index) => {
                    return (
                      <TableCell
                        key={index + featureCell.text}
                        cellType={featureCell.isFeatureName ? 'th' : 'td'}>
                        {featureCell.isFeatureName ? (
                          <ImageAndTextCell>
                            {featureCell.image && <img src={featureCell.image.url} alt="" />}
                            <CopyText tag={'span'} fontSize={'sm'}>
                              {featureCell.text}
                            </CopyText>
                          </ImageAndTextCell>
                        ) : (
                          <IconOrText textType={featureCell.text} />
                        )}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            )
          })}
          {/* Render A2C Buttons */}
          {renderAddToBasketButton && (
            <TableRow>
              <TableCell key="blank" cellType="th" noBorder>
                &nbsp;
              </TableCell>
              {tableHeading &&
                tableHeading.length &&
                tableHeading.map((product: TableHeadingDataProps, index) => {
                  return (
                    <TableCell key={product.productId + index} noBorder>
                      {renderAddToBasketButton(product.productId)}
                    </TableCell>
                  )
                })}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </StyledDesktopTable>
  )
}
