import React from 'react'
import { SkeletonBlockItem } from '@/components/Atoms/Skeleton'
import { StyledMediaContainer, StyledLinearGradient } from '../ProductTile.styled'
import { MediaProps } from '@/components/Organisms/ProductTile'

export const ProductMediaTile: React.FC<MediaProps> = ({
  ProductMediaWrapper,
  children,
  orientation,
  height,
  width,
  minWidth,
  minHeight,
  isCompact,
  loading = false,
  unsupportedMedia,
  isDisabled,
  onMediaClick,
  productImage,
  videoFallbackImage,
  mediaType,
  title,
  ...props
}) => {
  const inputProps = mediaType === 'Video' ? { src: videoFallbackImage } : { src: productImage }
  return (
    <StyledMediaContainer
      imageHeight={height}
      width={width}
      isDisabled={isDisabled}
      isCompact={isCompact}
      onClick={onMediaClick}
      orientation={orientation}
    >
      {loading || !productImage ? (
        <SkeletonBlockItem height="100%" width="100%" />
      ) : (
        <ProductMediaWrapper src={productImage} rounded height={height} width={width} title={title}>
          {!isCompact && <StyledLinearGradient />}
          {children}
        </ProductMediaWrapper>
      )}
    </StyledMediaContainer>
  )
}
