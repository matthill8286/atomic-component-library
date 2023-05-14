import React from 'react'
import { LazyLoadImage } from '@/components/Molecules/LazyLoadImage'
import { media, spacing } from '@/styles'
import { styled } from '@/styles/styled'

interface ItemProps {
  order: number
}

export const StyledText = styled.div`
  flex-basis: 100%;
  padding: 0 ${spacing.base.sm};
  margin-top: ${spacing.base.xs};
  h3 {
    margin: 0;
  }
  ${media.md} {
    flex-basis: calc(50% - 2 * ${spacing.base.sm});
    padding: 0 ${spacing.base.sm};
    margin-top: 0;
  }
`

export const StyledImage = styled.div<ItemProps>`
  flex-basis: 100%;
  order: unset;
  padding: 0 ${spacing.base.sm};
  ${media.md} {
    flex-basis: calc(50% - 2 * ${spacing.base.sm});
    order: ${({ order }) => order};
    justify-content: center;
    display: flex;
  }
`

export const StyledRow = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin: ${spacing.base.sm} -${spacing.base.sm};
  align-items: center;
  justify-content: space-between;
`

export type ImageAlignment = 'right' | 'left'

export interface Image {
  alt: string | null
  url: string
  mobile?: {
    url: string
  }
  tablet?: {
    url: string
  }
}

export interface ImageAndTextProps {
  image: Image
  imageAlignment: ImageAlignment
  withLQIP?: boolean
  contentful?: boolean
}

function getPrismicLqipParams(imageUrl, contentful) {
  const hasQueryParams = imageUrl?.indexOf('?') !== -1

  return imageUrl
    ? contentful
      ? `${imageUrl}${hasQueryParams ? '&' : '?'}q=1`
      : `${imageUrl}${hasQueryParams ? '&' : '?'}blur=400&px=8`
    : undefined
}

export const ImageAndText: React.FC<ImageAndTextProps> = ({
  children,
  image,
  imageAlignment,
  withLQIP = false,
  contentful = false,
  ...props
}) => (
  <StyledRow>
    <StyledImage order={imageAlignment === 'right' ? 1 : -1}>
      <LazyLoadImage
        {...props}
        withLQIP={withLQIP}
        src={image.url}
        lowResSrc={getPrismicLqipParams(image.url, contentful)}
        srcSm={image?.mobile?.url}
        lowResSrcSm={getPrismicLqipParams(image?.mobile?.url, contentful)}
        srcMd={image?.tablet?.url}
        lowResSrcMd={getPrismicLqipParams(image?.tablet?.url, contentful)}
        alt={image.alt}
        rounded
      />
    </StyledImage>
    <StyledText>{children}</StyledText>
  </StyledRow>
)
