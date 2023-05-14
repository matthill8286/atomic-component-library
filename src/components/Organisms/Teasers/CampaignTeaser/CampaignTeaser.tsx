import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Tag } from '@/components/Atoms/Tag'
import { CopyText, Heading, HeadingFeatured } from '@/components/Atoms/Typography'
import { useWindowDimensions } from '@/components/Helper/useWindowDimensions'
import { LazyLoadImage } from '@/components/Molecules/LazyLoadImage'
import { media, ALTERNATE, styled } from '@/styles'
import { breakpoints } from '@/styles/sc-vars-global'
import { Theme, ThemeFontLineHeight, ThemeFontSizes } from '@/types/theme'
import {
  BackgroundProps,
  CampaignTeaserProps,
  CampaignTeaserSize,
  InfoProps,
  TagsProps,
} from './CampaignTeaser.interface'
import {
  StyledBackgroundImage,
  StyledCampaignTeaserTagWrapper,
  StyledCard,
  StyledFlexBottomContainer,
  StyledInfoContainer,
  StyledInfoContainerContent,
  StyledInfoTextContainer,
  StyledLink,
  StyledMainContainer,
  StyledPictureContainer,
  StyledProductContainer,
  StyledRect,
  StyledTongue,
  StyledUpsetRect,
  StyledWrapper,
} from './CampaignTeaser.styled'
import { useTheme } from 'styled-components'

const StyledSaiyanLogo = styled.div`
  display: none;
  ${({ theme }) =>
    theme.name === ALTERNATE &&
    `
  ${media.md} {
    display: block;
  }

  > svg {
    position: absolute;
    left: -1px;
    bottom: 0;
    z-index: 1;
    height: 92px;
    width: auto;

    ${media.ie11} {
      width: 95px;
      top: -7px;
    }
  }`}
`

const Info: React.FC<InfoProps> = ({ isPortrait, limitLines, size, contentText, tags }) => {
  if (!isPortrait && contentText) {
    return (
      <StyledInfoTextContainer>
        <CopyText
          fontSize={getValueBySize<ThemeFontSizes>(isPortrait, size, 'sm', 'sm', 'lg')}
          lineHeight={getValueBySize<ThemeFontLineHeight>(isPortrait, size, 'md', 'md', 'lg')}
          limitLines={limitLines ? limitLines : tags && tags.length > 0 ? 3 : 5}
          tag="span"
        >
          {contentText}
        </CopyText>
      </StyledInfoTextContainer>
    )
  } else {
    return null
  }
}

const Tags: React.FC<TagsProps> = ({ isPortrait, tags, tagsOnMobile }) => {
  if (tags && tags.length > 0) {
    return (
      <StyledFlexBottomContainer>
        <StyledCampaignTeaserTagWrapper isPortrait={isPortrait} tagsOnMobile={tagsOnMobile} limitLines={2}>
          {tags.map((t, index) => {
            return t && t.trim().length > 0 ? (
              <Tag key={'Tag_' + t + index} text={t} marginBottom marginRight />
            ) : undefined
          })}
        </StyledCampaignTeaserTagWrapper>
      </StyledFlexBottomContainer>
    )
  } else {
    return null
  }
}

const Background: React.FC<BackgroundProps> = ({
  isPortrait,
  backgroundVariant,
  image,
  lazyloadBackgroundImage,
  size,
  hasProduct,
  theme,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  const hasQueryParams = image?.indexOf('?') !== -1

  const lowQualityImagePlaceholder = image ? `${image}${hasQueryParams ? '&' : '?'}q=1` : undefined

  if (theme === ALTERNATE) {
    return (
      <StyledRect
        ref={ref}
        image={image}
        inView={inView}
        lazyLoadImage={lowQualityImagePlaceholder}
        lazyLoading={lazyloadBackgroundImage}
      />
    )
  } else {
    switch (backgroundVariant) {
      case 'tongue':
        return (
          <StyledTongue
            ref={ref}
            height={getValueBySize<number>(isPortrait, size, 104, 144, 160)}
            isPortrait={isPortrait}
            hasProduct={hasProduct}
          >
            <StyledBackgroundImage
              image={image}
              inView={inView}
              lazyLoadImage={lowQualityImagePlaceholder}
              lazyLoading={lazyloadBackgroundImage}
              hasProduct={hasProduct}
            />
          </StyledTongue>
        )
      case 'upsetRect':
        return <StyledUpsetRect ref={ref} image={image} />
      case 'rect':
        return (
          <StyledRect
            ref={ref}
            image={image}
            inView={inView}
            lazyLoadImage={lowQualityImagePlaceholder}
            lazyLoading={lazyloadBackgroundImage}
          />
        )
      default:
        return null
    }
  }
}

export const CampaignTeaser: React.FC<CampaignTeaserProps> = ({
  smallHeadline,
  headline,
  contentText,
  productImage,
  backgroundImage,
  borderColor,
  lazyload,
  lazyloadBackgroundImage,
  lazyloadLowQuality,
  badges,
  badgeActionType = 'secondary',
  size = 'auto',
  orientation = 'auto',
  tags,
  backgroundVariant = 'upsetRect',
  elevation = 0,
  elevationHover,
  link,
  isStageTeaser = false,
  fixedImageHeight = false,
  tagsOnMobile = true,
  limitLines,
  onClick,
  clickableWithoutLink,
  ...rest
}) => {
  const { breakpoint: currentBreakpoint } = useWindowDimensions()

  const isMobile = currentBreakpoint < breakpoints.sm
  const isPortrait = orientation === 'portrait'
  const isClickable = (!!onClick && clickableWithoutLink) || !!link?.href
  const cardShape = 'rounded-big'

  const linkTarget = link?.isLinkBlank ? '_blank' : '_self'

  const theme = useTheme() as Theme
  return (
    <StyledLink to={link?.to} href={link?.href} onClick={onClick} underline={false} target={linkTarget}>
      <StyledWrapper hasProduct={!!productImage}>
        <StyledCard
          elevation={elevation}
          elevationHover={elevationHover}
          shape={cardShape}
          display="flex"
          badges={badges}
          badgeActionType={badgeActionType}
          borderColor={borderColor}
          fullHeight
          overflow="hidden"
          {...rest}
        >
          <StyledMainContainer isPortrait={isPortrait} isClickable={isClickable}>
            <StyledInfoContainer>
              <StyledInfoContainerContent>
                {smallHeadline && (
                  <Heading lineHeight="sm" margin={`0`} scale="level-5" tag="p" uppercase weight="semibold">
                    {smallHeadline}
                  </Heading>
                )}
                <HeadingFeatured fixedMdSize limitLines={2}>
                  {headline}
                </HeadingFeatured>
                <Info
                  contentText={contentText}
                  isPortrait={isPortrait}
                  limitLines={limitLines}
                  size={size}
                  tags={tags}
                />
                <Tags isPortrait={isPortrait} tagsOnMobile={tagsOnMobile} tags={tags} />
              </StyledInfoContainerContent>
            </StyledInfoContainer>
            <StyledProductContainer
              size={size}
              isPortrait={isPortrait}
              isStageTeaser={isStageTeaser}
              fixedImageHeight={fixedImageHeight}
              hasProduct={!!productImage}
            >
              <Background
                size={size}
                isPortrait={isPortrait}
                image={backgroundImage}
                lazyloadBackgroundImage={lazyloadBackgroundImage}
                lazyloadLowQuality={lazyloadLowQuality}
                backgroundVariant={backgroundVariant}
                hasProduct={!!productImage}
                theme={theme?.name}
              />
              {productImage && (
                <StyledPictureContainer isStageTeaser={isStageTeaser}>
                  <LazyLoadImage src={productImage} height={isMobile ? undefined : '100%'} lazyLoad={lazyload} />
                </StyledPictureContainer>
              )}
            </StyledProductContainer>
          </StyledMainContainer>
        </StyledCard>
      </StyledWrapper>
    </StyledLink>
  )
}

/**
 *
 * Decides which value (small|medium|large) should be used.
 * For the decision isPortrait and size is used.
 * If device is in portrait mode and size is automatic it will always return the small value.
 */
function getValueBySize<T>(isPortrait: boolean, size: CampaignTeaserSize, small: T, medium: T, large: T): T {
  // if the size is automatic and it's a mobile device
  if (size === 'auto' && isPortrait) {
    return small
  }

  switch (size) {
    case 'small':
      return small
    case 'medium':
      return medium
    case 'large':
      return large
    default:
      return medium
  }
}
