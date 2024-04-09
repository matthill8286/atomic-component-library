import { Card } from '@/components/Atoms/Card'
import {
  StyledFeaturedProductsContainer,
  StyledCard as ExternalStyledCard,
  StyledCardWrapper as ExternalCardWrapper,
} from '@/components/Atoms/Card/Card.styled'
import { Link } from '@/components/Atoms/Link'
import { StyledPicture } from '@/components/Atoms/Picture/Picture.styled'
import { StyledTagWrapper } from '@/components/Atoms/Tag/Tag.styled'
import { css, media, ALTERNATE, DANONE, styled } from '@/styles'
import {
  StyledTopTeaserInfoContainerProps,
  StyledTopTeaserMainContainerProps,
  StyledTopTeaserProductContainerProps,
  StyledTopTeaserRectProps,
  StyledTopTeaserTongueProps,
  StyledTopTeaserUpsetRectProps,
  StyledTopTeaserTagWrapperProps,
  StyledInfoContainerContentProps,
} from './ProductTeaser.interface'

export const TOP_CAROUSEL_HEIGHT_DESKTOP = 354
export const TOP_CAROUSEL_HEIGHT_MOBILE = 250

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;

  ${StyledFeaturedProductsContainer} {
    position: absolute;
    display: flex;
    z-index: 1;
    right: 0;
    top: 0;
    transform: translateY(-50%);
    filter: drop-shadow(0 1px 1px gray);
    justify-content: flex-end;

    ${media.sm} {
      display: flex;
    }
  }

  ${ExternalCardWrapper}:hover ${StyledFeaturedProductsContainer} {
    transform: translateY(-50%);
  }
`

export const StyledCard = styled(Card)(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    outline: none;
    ${ExternalStyledCard} {
      overflow: visible;
      ${theme.name === DANONE && `overflow-x: hidden;`}
    }
  `,
)

export const StyledBadgeWrapper = styled.div(
  ({ theme }) => css`
    ${theme.name === ALTERNATE &&
    `
    margin: 0 0 0 -1em;
    transform: translateY(-50%);
  `}
    ${theme.name === DANONE &&
    `
    margin: 0 0 1em 0;
  `}
  `,
)

export const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  align-items: flex-start;
`

export const StyledMainContainer = styled.div<StyledTopTeaserMainContainerProps>(
  ({ isClickable }) => css`
    ${isClickable ? 'cursor: pointer;' : 'cursor: initial;'}
    display: flex;
    width: 100%;
    flex-direction: column-reverse;
    justify-content: flex-end;
    transform: translateY(0px);

    ${media.md} {
      flex-direction: row;
    }
  `,
)

export const StyledInfoContainer = styled.div<StyledTopTeaserInfoContainerProps>(
  ({ hasProduct, theme }) => css`
    display: flex;
    flex-direction: column;
    hyphens: auto;
    ${hasProduct && `height: 100%;`}
    padding: ${theme.spacing.base.sm} 0 0 0;

    ${media.md} {
      flex: 1;
      padding: 0 ${theme.spacing.base.md} 0 0;
    }

    ${theme.name === ALTERNATE &&
    `
      background: ${theme.color.white};
      padding: ${theme.spacing.base.md} ${theme.spacing.base.sm};

      ${media.md} {
        padding: ${theme.spacing.base.sm};
        padding-top: 0;
      }
    `}
  `,
)

export const StyledInfoContainerContent = styled.div<StyledInfoContainerContentProps>(
  ({ hasBadges, theme }) => css`
     {
      text-align: left;
      ${media.md} {
        width: ${theme.name === ALTERNATE ? `calc(100% + 40px)` : `100%`};
        position: relative;
        ${!hasBadges && `padding-top: ${theme.spacing.base.md};`}
        z-index: 2;
      }
    }
  `,
)

export const StyledInfoTextContainer = styled.div(
  ({ theme }) => css`
    margin: ${theme.spacing.base.xs} 0 0 0;

    ${media.md} {
      margin: ${theme.spacing.base.sm} 0 0 0;

      ${theme.name === ALTERNATE && `padding-right: ${theme.spacing.base.xs}`}
    }
  `,
)

const getProductContainerHeight = (fixedImageHeight: boolean) => {
  return css`
    ${`height: ${TOP_CAROUSEL_HEIGHT_MOBILE}px;`}
    ${
      !fixedImageHeight &&
      `
      ${media.md} {
        height: ${TOP_CAROUSEL_HEIGHT_DESKTOP}px;
      `
    };
    }

    img {
      object-fit: contain;
      max-height: 200px;

      ${media.md} {
        max-height: 300px;
        padding: 0;
      }
    }
  `
}

export const StyledProductContainer = styled.div<StyledTopTeaserProductContainerProps>(
  ({ theme, fixedImageHeight }) => css`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    min-height: 250px;
    ${getProductContainerHeight(fixedImageHeight)}

    ${media.md} {
      flex: ${theme.name === ALTERNATE ? 4 : 2};
    }
    ${media.xl} {
      flex: ${theme.name === ALTERNATE ? 3 : 2};
    }
  `,
)

const topTeaserLazyLoadPictureStyle = css`
  ${StyledPicture} {
    height: 100%;
  }
`

export const StyledPictureContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    z-index: 1;
    padding: 8px;
    height: 250px;

    ${media.md} {
      margin: 0 ${theme.spacing.base.md} 0 ${theme.spacing.base.xl};
      height: unset;
    }

    img {
      height: 100%;
    }

    ${topTeaserLazyLoadPictureStyle}
  `}
`

export const StyledBackgroundImage = styled.div<{
  image?: string
  inView?: boolean
  lazyLoadImage?: string
  hasProduct?: boolean
  lazyloadBackgroundImage?: boolean
}>(
  ({ image, theme, inView, lazyLoadImage, hasProduct, lazyloadBackgroundImage }) => css`
    position: absolute;
    width: calc(100% + 16px);

    right: 16px;
    height: 100%;
    transform: skew(-10.3deg);

    ::after {
      content: '';
      ${StyledRectCommonStyles}
      ${(inView || !lazyloadBackgroundImage) && image !== undefined && `background-image: url('${image}');`}
    }
    ::before {
      content: '';
      ${StyledRectCommonStyles}
      ${!hasProduct && `filter: blur(8px);`}
      ${lazyLoadImage !== undefined && `background-image: url('${lazyLoadImage}');`}
      background-color: ${theme.color.primary};
    }
  `,
)

export const StyledTongue = styled.div<StyledTopTeaserTongueProps>(
  () => css`
    overflow: hidden;
    position: absolute;
    right: -24px;
    width: 100%;
    transform: skew(10.3deg);
    margin-top: 0;
    height: ${TOP_CAROUSEL_HEIGHT_MOBILE}px;
    border-bottom-left-radius: ${TOP_CAROUSEL_HEIGHT_MOBILE / 5}px;
    border-top-left-radius: ${TOP_CAROUSEL_HEIGHT_MOBILE / 25}px;

    ${media.md} {
      right: -32px;
      height: ${TOP_CAROUSEL_HEIGHT_DESKTOP}px;
      border-bottom-left-radius: ${TOP_CAROUSEL_HEIGHT_DESKTOP / 5}px;
      border-top-left-radius: ${TOP_CAROUSEL_HEIGHT_DESKTOP / 25}px;
    }
  `,
)

export const StyledUpsetRect = styled.div<StyledTopTeaserUpsetRectProps>(
  ({ image, imageDesktop, theme, hasProduct }) => css`
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('${image}');
    background-position: 50%;
    background-color: ${theme.color.primary};
    width: 100%;
    height: 100%;
    z-index: -1;
    min-height: 256px;

    ${media.ie11} {
      left: 0;
    }

    ${imageDesktop &&
    `
      ${media.md} {
        background-image: url(${imageDesktop});
      }`}

    ::before {
      content: '';
      position: absolute;
      display: block;
      background: #fff;
      width: 100%;
      height: ${hasProduct ? '150px' : '65px'};
      bottom: ${hasProduct ? '-60px' : '-45px'};
      transform: ${hasProduct ? 'skew(0,-10.3deg)' : 'skew(0,-2.5deg)'};

      ${media.md} {
        width: 100%;
        height: ${hasProduct ? '150px' : '65px'};
        bottom: ${hasProduct ? '-70px' : '-55px'};
        transform: ${hasProduct ? 'skew(0,-10.3deg);' : 'skew(0,-2.5deg);'};
        top: auto;
        left: auto;
      }
    }
  `,
)

const StyledRectCommonStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const StyledRect = styled.div<StyledTopTeaserRectProps>(
  ({ image, theme, inView, lazyLoadImage, hasProduct, lazyloadBackgroundImage }) => css`
    overflow: hidden;
    ${StyledRectCommonStyles}
    ::after {
      content: '';
      ${StyledRectCommonStyles}
      ${(inView || !lazyloadBackgroundImage) && image !== undefined && `background-image: url('${image}');`}
    }
    ::before {
      content: '';
      ${StyledRectCommonStyles}
      ${!hasProduct && `filter: blur(8px);`}
      ${lazyLoadImage !== undefined && `background-image: url('${lazyLoadImage}');`}
      background-color: ${theme.color.primary};
    }
  `,
)

export const StyledFlexBottomContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex: 1;
    margin-top: auto;
    flex-direction: column;
    padding-top: ${theme.spacing.base.xs};
  `,
)

export const StyledTopTeaserTagWrapper = styled.div<StyledTopTeaserTagWrapperProps>(
  ({ theme, limitLines }) => css`
    max-height: calc(${theme.spacing.base.lg} * ${limitLines});
    overflow: hidden;
    flex-wrap: wrap;

    ${theme.name === ALTERNATE &&
    `
      ${media.xl} {
        max-width: 85%;
      }`}

    ${StyledTagWrapper} {
      display: inline-flex;
      margin-bottom: 0;
      margin-top: 8px;
    }
  `,
)
