import React from 'react'
import { breakpoints } from '@/styles'
import { NativeLazyLoadOptions, PictureObjectFit, PictureProps } from './Picture.interface'
import { StyledPicture } from './Picture.styled'
import { SkeletonBlockItem } from '@/components/Atoms/Skeleton'

export const Picture: React.FC<PictureProps> = ({
  width = '100%',
  height,
  src,
  srcLg,
  srcMd,
  srcSm,
  alt,
  children,
  objectFit,
  rounded,
  loading = NativeLazyLoadOptions.Eager,
  ...otherProps
}): React.ReactElement => {
  return (
    <StyledPicture
      width={width}
      height={height}
      objectFit={(objectFit as PictureObjectFit) || 'cover'}
      rounded={rounded}
      {...otherProps}
    >
      <picture style={{ width: '100%', height }}>
        {srcSm && <source media={`(max-width: ${breakpoints.sm - 1}px)`} srcSet={srcSm} />}
        {srcMd && <source media={`(max-width: ${breakpoints.md - 1}px)`} srcSet={srcMd} />}
        {srcLg && <source media={`(max-width: ${breakpoints.lg - 1}px)`} srcSet={srcLg} />}
        {src ? (
          <img src={src} alt={alt || 'image'} width={width} height={height} loading={loading} />
        ) : (
          <SkeletonBlockItem width={width} height={height} />
        )}
      </picture>
      {children}
    </StyledPicture>
  )
}
