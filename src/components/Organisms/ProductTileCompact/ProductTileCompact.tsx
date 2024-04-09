import React from 'react'
import { ProductTileCompactProps } from './ProductTileCompact.interface'
import { StyledContentList, StyledProductTileCompactWrapper } from './ProductTileCompact.styled'
import { ProductImage } from '@/components/Organisms/ProductTileCompact/elements'

export const ProductTileCompact: React.FC<ProductTileCompactProps> = ({
  children,
  productImage,
  imageWidth = 132,
  imageHeight = 74,
  imageMaxWidth,
  imageMinWidth,
  lazyLoadImage,
  loading = false,
  showImage = true,
  onClick,
  title,
  embedUrl,
  unsupportedMedia,
  imageLink,
  isVideo,
  ...props
}) => {
  return (
    <StyledProductTileCompactWrapper data-test="compact-wrapper" {...props}>
      {showImage && (
        <ProductImage
          loading={loading}
          onPictureClick={onClick}
          title={title}
          width="172px"
          height="74px"
          productImage={productImage}
        />
      )}
      <StyledContentList onClick={onClick}>{children}</StyledContentList>
    </StyledProductTileCompactWrapper>
  )
}
