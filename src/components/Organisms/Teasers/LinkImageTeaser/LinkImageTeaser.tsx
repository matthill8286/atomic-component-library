import React from 'react'
import { ImageTeaserProps } from '../ImageTeaser/ImageTeaser.interface'
import { useGraphCmsImages } from '@/utils/useGraphCmsImages'
import { Link } from '@/components/Atoms/Link'
import { ImageTeaser } from '../ImageTeaser/ImageTeaser'
import { styled } from '@/styles'

const StyledImageTeaser = styled.div`
  cursor: pointer;
  height: 100%;
`

const getLinkTargetValue = (isLinkBlank: boolean) => {
  return isLinkBlank ? '_blank' : '_self'
}

export const LinkImageTeaser: React.FC<ImageTeaserProps> = ({
  link,
  images,
  contentful,
  lazyloadLowQuality,
  onClick,
  ...otherImageTeaserProps
}) => {
  const [finalImages, ref] = useGraphCmsImages(
    [images.xl, images.lg, images.md, images.sm],
    !lazyloadLowQuality
  )

  const isRelativeUrl = link?.to
  const isAbsoluteUrl = !isRelativeUrl && link?.href

  return (
    <React.Fragment>
      {isRelativeUrl && (
        <Link to={link.to} target={getLinkTargetValue(!!link.isLinkBlank)}>
          <StyledImageTeaser data-test="link-wrapped-teaser" onClick={onClick} ref={ref}>
            <ImageTeaser {...otherImageTeaserProps} finalImages={finalImages} />
          </StyledImageTeaser>
        </Link>
      )}
      {isAbsoluteUrl && (
        <a href={link.href} target={getLinkTargetValue(!!link.isLinkBlank)}>
          <StyledImageTeaser onClick={onClick} ref={ref} data-test="anchor-wrapped-teaser">
            <ImageTeaser {...otherImageTeaserProps} finalImages={finalImages} />
          </StyledImageTeaser>
        </a>
      )}
      {!link && (
        <StyledImageTeaser onClick={onClick} ref={ref}>
          <ImageTeaser {...otherImageTeaserProps} finalImages={finalImages} />
        </StyledImageTeaser>
      )}
    </React.Fragment>
  )
}
