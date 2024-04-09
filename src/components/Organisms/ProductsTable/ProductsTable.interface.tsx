export interface ProductsTableProps {
  tableHeading: TableHeadingDataProps[]
  tableContent: TableContentRow[]
  getProductUrl: (productTitle: string, productID: string) => string
  getImageUrl: (imageId: string) => string
  renderAddToBasketButton?: (productId: string) => JSX.Element
}

export interface TableHeadingDataProps {
  productId: string
  product: {
    title: string
    titleImageId: string
  }
  price: {
    price: number
    currency: string
  }
}

export interface TableContentRow {
  tableRow: TableRowDataProps[]
  __typename?: string
}

export interface TableRowDataProps {
  text: string
  image?: {
    url: string
    alt?: string
    __typename?: string
  }
  isFeatureName: boolean
  type: string
  __typename?: string
}
