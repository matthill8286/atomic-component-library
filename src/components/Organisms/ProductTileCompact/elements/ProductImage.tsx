import React from 'react'
import { Link } from '@/components/Atoms/Link'
import { NativeLazyLoadOptions, NativeLazyLoadType, Picture } from '@/components/Atoms/Picture'
import { SkeletonBlockItem } from '@/components/Atoms/Skeleton'
import { media } from '@/styles/media'
import { styled } from '@/styles/styled'

export interface ProductImageProps {
  width?: string
  height?: string
  productImage?: string
  title?: string
  loading?: boolean
  onPictureClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  imageLink?: string
  lazyLoad?: NativeLazyLoadType
}

const StyledPictureWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-left: 12px;

  ${media.md} {
    text-align: unset;
  }
`

export const ProductImage: React.FC<ProductImageProps> = ({
  productImage,
  children,
  width,
  height,
  title,
  onPictureClick,
  lazyLoad = NativeLazyLoadOptions.Eager,
  loading = false,
  imageLink,
  ...props
}) => {
  const ProductPicture: React.FC = () => (
    <Picture rounded src={productImage} alt={title} width={width} height={height} loading={lazyLoad}>
      {children}
    </Picture>
  )

  return (
    <StyledPictureWrapper onClick={onPictureClick} {...props}>
      {productImage && !loading ? (
        imageLink ? (
          <Link to={imageLink} inline={false} underline={false}>
            <ProductPicture />
          </Link>
        ) : (
          <ProductPicture />
        )
      ) : (
        <SkeletonBlockItem width={width} height={height} />
      )}
    </StyledPictureWrapper>
  )
}
