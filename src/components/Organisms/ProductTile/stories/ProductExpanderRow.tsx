import * as React from 'react'
import { Cell } from '@/components/Helper/Grid'
import { TwelveColumn } from '@/components/Helper/Grid/Grid.interface'
import { ProductTile } from '../ProductTile'
import { ProductTileProps } from '../ProductTile.interface'
import { Product } from '@/types'

interface ProductTileExpanderRowProps extends Omit<ProductTileProps, 'product'> {
  products: Product[]
}

export class ProductTileExpanderRow extends React.Component<ProductTileExpanderRowProps, { expanded: boolean }> {
  state = {
    expanded: false,
  }

  setExpanded(expanded: boolean) {
    this.setState({ expanded })
  }

  render() {
    return (
      <>
        {this.props.products.map((product, index) => (
          <Cell columns={(12 / this.props.products.length) as TwelveColumn} key={index}>
            <ProductTile {...this.props} layout={this.props.layout} product={product} />
          </Cell>
        ))}
      </>
    )
  }
}
