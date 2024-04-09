import { Card } from '@/components/Atoms/Card'
import { StyledFeaturedProductsContainer } from '@/components/Atoms/Card/Card.styled'
import { Link } from '@/components/Atoms/Link'
import { StyledTagWrapper } from '@/components/Atoms/Tag/Tag.styled'
import { css, media, ALTERNATE, styled } from '@/styles'
import { Theme } from '@/types'
import {
  StyledCampaignTeaserTagWrapperProps,
  StyledMainContainerProps,
  StyledPriceContainerProps,
  StyledProductContainerProps,
  StyledRectProps,
  StyledTongueProps,
  StyledUpsetRectProps,
} from './CampaignTeaser.interface'

export const TOP_CAROUSEL_HEIGHT_DESKTOP = 320
export const TOP_CAROUSEL_HEIGHT_MOBILE = 160

const campaignTeaserProducts = () => css`
  ${StyledFeaturedProductsContainer} {
    display: flex;
    position: absolute;
    z-index: 1;
    right: 0;
    top: -24px;
    justify-content: flex-end;

    & > div {
      display: none;

      ${media.tablet} {
        display: block;
      }
    }

    & > div:first-child {
      display: block;
    }
  }
`

export const StyledWrapper = styled.div<{ hasProduct: boolean }>(
  ({ hasProduct }) => css`
    display: flex;
    height: 100%;
    width: 100%;
    transform: translateY(0px);
    flex: 1;
    ${hasProduct ? campaignTeaserProducts : ''}

    ${media.ie11} {
      ${StyledFeaturedProductsContainer} {
        img {
          width: 100%;
        }
      }
    }
  `
)

export const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
`

export const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
  outline: none;
`

export const StyledMainContainer = styled.div<StyledMainContainerProps>(
  ({ isPortrait, isClickable }) => css`
    ${isClickable ? 'cursor: pointer;' : 'cursor: initial;'}
    display: flex;
    width: 100%;
    flex-direction: column-reverse;
    justify-content: flex-end;
    transform: translateY(0px);

    ${media.md} {
      flex-direction: ${isPortrait ? 'column-reverse' : 'row'};
    }
  `
)

const styledInfoContainerPadding = (theme: Theme) => css`
  padding: ${theme.spacing.base.xs} ${theme.spacing.base.sm};

  ${media.md} {
    padding: ${theme.spacing.base.lg} ${theme.spacing.base.md};
  }
`

export const StyledInfoContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    hyphens: auto;

    ${media.md} {
      flex: 1;
    }
    ${styledInfoContainerPadding(theme)}

    ${theme.name === ALTERNATE &&
      `
      background: ${theme.color.white};
      padding: ${theme.spacing.base.md} ${theme.spacing.base.sm};
      
      ${media.md} {
        padding: ${theme.spacing.base.sm};
      }
    `}
  `
)

export const StyledInfoContainerContent = styled.div`
  text-align: left;
  ${media.md} {
    width: ${({ theme }) => (theme.name === ALTERNATE ? `calc(100% + 10px)` : `100%`)};
    position: relative;
    z-index: 2;
  }
`

export const StyledInfoTextContainer = styled.div(
  ({ theme }) => css`
    margin: ${theme.spacing.base.xs} 0 0 0;
    ${media.md} {
      margin: ${theme.spacing.base.sm} 0 0 0;

      ${theme.name === ALTERNATE && `padding-right: ${theme.spacing.base.xl}`}
    }
  `
)

const getProductContainerHeight = (
  size: string,
  isPortrait: boolean,
  fixedImageHeight: boolean,
  hasProduct: boolean
) => {
  if (fixedImageHeight) {
    return css`
      ${hasProduct ? '' : 'min-height: 230px;'}
      ${media.md} {
        ${!fixedImageHeight &&
          css`
            height: ${TOP_CAROUSEL_HEIGHT_DESKTOP}px;
          `};
      }
      img {
        object-fit: contain;
        max-height: 500px;
        ${media.md} {
          max-height: 500px;
          padding: 0;
        }
      }
    `
  }

  return css`
    min-height: 256px;
    ${media.md} {
      min-height: ${isPortrait ? '256px' : size === 'large' ? '400px' : '352px'};
    }
  `
}

export const StyledProductContainer = styled.div<StyledProductContainerProps>(
  ({ theme, size, isPortrait, isStageTeaser, fixedImageHeight, hasProduct }) => css`
    display: flex;
    justify-content: center;
    ${isStageTeaser
      ? css`
          flex: 1 0 15%;
        `
      : css`
          ${media.md} {
            flex: 2;
          }
        `}
    position: relative;
    width: 100%;
    ${getProductContainerHeight(size, isPortrait, fixedImageHeight, hasProduct)}
  `
)

export const StyledPictureContainer = styled.div<{ isStageTeaser: boolean }>(
  ({ theme, isStageTeaser }) => css`
    display: flex;
    z-index: 2;
    ${!isStageTeaser &&
      css`
        ${media.maxMd} {
          padding: 8px;
        }
      `}

    ${media.md} {
      margin: ${theme.spacing.base.md};
      margin-left: ${theme.spacing.base.xl};
    }
    img {
      object-fit: contain;
      max-height: 250px;

      ${media.md} {
        max-height: 300px;
      }
    }
    ${isStageTeaser &&
      css`
        margin: ${theme.spacing.base.md};

        ${media.md} {
          display: flex;
          flex-direction: column;
          justify-content: center;

          margin: ${theme.spacing.base.lg};
          margin-right: ${theme.spacing.base.md};
        }

        /* Enforce max height on stage teaser product images */
        img {
          max-height: 320px;
        }
      `}
  `
)

const getPricePosition = (theme: Theme, isPortrait: boolean) => {
  return css`
    right: ${theme.spacing.base.sm};
    bottom: 0;

    ${media.md} {
      right: ${isPortrait ? theme.spacing.base.sm : theme.spacing.base.md};
      bottom: ${isPortrait ? '0px' : theme.spacing.base.lg};
    }

    ${media.ie11} {
      left: 0;
    }
  `
}

export const StyledPriceContainer = styled.div<StyledPriceContainerProps>(
  ({ theme, isPortrait }) => css`
    position: absolute;
    z-index: 2;
    ${getPricePosition(theme, isPortrait)}
  `
)

const getTongueHeightAndPosition = (theme: Theme, hasProduct: boolean, height: number) => {
  return css`
    border-bottom-left-radius: ${height / 5}px;
    border-top-left-radius: ${height / 25}px;
    margin-top: ${theme.spacing.base.xxxxl};
    height: ${height}px;
  `
}

const StyledBackgroundCommonStyles = css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const StyledBackgroundImage = styled.div<{
  image?: string
  inView: boolean
  lazyLoading?: boolean
  lazyLoadImage?: string
  hasProduct: boolean
}>(
  ({ image, theme, inView, lazyLoadImage, hasProduct, lazyLoading = false }) => css`
    position: absolute;

    width: calc(100% + 16px);
    right: 16px;
    height: 100%;
    transform: skew(-10.3deg);

    ::after {
      content: '';
      ${StyledBackgroundCommonStyles}
      ${(inView || !lazyLoading) && image !== undefined && `background-image: url('${image}');`}
    }
    ::before {
      content: '';
      ${StyledBackgroundCommonStyles}
      ${!hasProduct && lazyLoadImage !== undefined && `filter: blur(8px);`}
      ${lazyLoadImage !== undefined && `background-image: url('${lazyLoadImage}');`}
      background-color: ${theme.color.primary};
    }
  `
)

export const StyledTongue = styled.div<StyledTongueProps>(
  ({ height, theme, hasProduct }) => css`
    overflow: hidden;
    position: absolute;
    right: -16px;
    width: 100%;
    ${getTongueHeightAndPosition(theme, hasProduct, height)}
    transform: skew(10.3deg);
  `
)

export const StyledUpsetRect = styled.div<StyledUpsetRectProps>(
  ({ image, theme }) => css`
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    ${css`
      background-image: url('${image}');
    `};
    background-position: 50%;
    background-color: ${theme.color.primary};
    width: 100%;
    height: 100%;
    z-index: -1;
    min-height: 256px;

    ${media.ie11} {
      left: 0;
    }
  `
)

export const StyledRect = styled.div<StyledRectProps>(
  ({ image, theme, inView, lazyLoadImage, lazyLoading }) => css`
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    ::after {
      content: '';
      ${StyledBackgroundCommonStyles}
      ${(inView || !lazyLoading) && image !== undefined && `background-image: url('${image}');`}
    }
    ::before {
      content: '';
      ${StyledBackgroundCommonStyles}
      ${lazyLoadImage !== undefined && `filter: blur(8px);`}
      ${lazyLoadImage !== undefined && `background-image: url('${lazyLoadImage}');`}
      background-color: ${theme.color.primary};
    }
  `
)

export const StyledFlexBottomContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: auto;
  flex-direction: column-reverse;
`

const tagWrapperStyles = (theme: Theme, isPortrait: boolean) => {
  return css`
    margin-top: ${theme.spacing.base.sm};
    ${media.md} {
      margin-top: ${isPortrait ? theme.spacing.base.sm : theme.spacing.base.lg};
    }
  `
}

export const StyledCampaignTeaserTagWrapper = styled.div<StyledCampaignTeaserTagWrapperProps>(
  ({ theme, isPortrait, tagsOnMobile, limitLines }) => css`
    max-height: calc((${theme.spacing.base.lg} - 1px) * ${limitLines});
    overflow: hidden;
    ${theme.name === ALTERNATE && `max-width: 85%;`}
    ${StyledTagWrapper} {
      display: inline-flex;
    }
    ${!tagsOnMobile &&
      `
      display: none;

      ${media.md} {
        display: block;
      }
    `}
    flex-wrap: wrap;
    ${tagWrapperStyles(theme, isPortrait)}
  `
)
