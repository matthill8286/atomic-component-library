import { css, styled } from '@/styles/styled'
import { CarouselProps } from './SimpleCarousel.interface'

const StyledArrow = css<CarouselProps>`
  ${({ theme, arrowsSurfaceColor, brightArrows = false }) => css`
    background: ${brightArrows ? theme.color.white : theme.color.black};

    display: none !important;
    :hover {
      display: block !important;
    }
    & svg {
      fill: ${brightArrows ? theme.color.black : theme.color.white} !important;
    }

    ${arrowsSurfaceColor &&
    css`
      background-color: ${theme.color[arrowsSurfaceColor]};
    `}
  `}
`

export const StyledCarouselHandler = styled.div`
  outline: none;
`

export const StyledCarousel = styled.div<CarouselProps>`
  width: 100%;
  position: relative;
  margin: 0 auto;

  ${({ theme, boxShadow }) =>
    boxShadow &&
    css`
      & .slick-list {
        box-shadow: ${theme.dimension.elevationLevel2};
      }
    `}

  & .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;

    & .slick-list {
      position: relative;
      padding: ${({ theme }) => `0 0 ${theme.spacing.base.sm} 0`};
      transform: translate3d(0, 0, 0);
      box-sizing: content-box;
      overflow: ${({ hasOverflow }) => (hasOverflow ? 'visible' : 'hidden')};
      margin: ${({ hasPadding }) => (hasPadding ? '0 -12px' : '0')};

      & .slick-track {
        display: flex;
        justify-content: center;
        position: relative;
        top: 0;
        left: 0;
        transform: translate3d(0, 0, 0);
        margin-left: 0;
        margin-right: auto;

        & .slick-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          -webkit-justify-content: center;
          height: auto;
          position: relative;
          float: left;
          ${({ hasPadding }) => hasPadding && 'margin: 0 12px'};
          ${({ fixedWidth, tileWidth }) => fixedWidth && `min-width: ${tileWidth}px !important`};

          & img {
            display: block;
            margin: auto;
            max-width: 100%;
          }

          & > div {
            width: ${({ fixedWidth, tileWidth }) => (fixedWidth ? `${tileWidth}px` ?? '100%' : '100%')};
            height: 100%;
            display: flex;
          }
        }
      }
    }

    :hover {
      & .slick-next,
      & .slick-prev {
        display: block !important;
      }
      & .slick-next {
        right: -1%;
      }
      & .slick-prev {
        left: -1%;
      }
    }

    & .slick-dots {
      position: absolute;
      top: 0;
      right: ${({ theme }) => theme.spacing.base.xs};
      max-height: ${({ theme }) => theme.spacing.base.sm};
      width: fit-content;
      list-style: none;
      display: block;
      text-align: center;
      margin: ${({ theme }) => `-${theme.spacing.base.sm} auto 0 auto`};

      & li {
        position: relative;
        display: inline-block;
        padding: 0;
        margin-right: ${({ theme }) => theme.spacing.base.sm};

        & div {
          background-color: transparent;
          border-color: ${({ theme }) => theme.color.primary};
          border-radius: ${({ theme }) => theme.spacing.base.xs};
          display: block;
          height: ${({ theme }) => theme.spacing.base.xs};
          width: ${({ theme }) => theme.spacing.base.xs};
          outline: none;
          color: transparent;
          border-style: solid;
          border-width: 1px;
          box-sizing: border-box;
          &:hover {
            cursor: pointer;
          }
        }

        &.slick-active div {
          background: ${({ theme }) => theme.color.primary};
          opacity: 1;
        }
      }
    }
  }
  & .slick-arrow {
    /* reset the default behaviour */
    ::before {
      content: unset;
    }
    z-index: 1;
    position: absolute;
    top: 50%;
    outline: 0;
    transform: translateY(
      calc(-50% - 19px)
    ); /* -19px because of the additional space that is needed for the slick-slider dots */
    border: none;

    & svg {
      position: relative;
    }

    &:hover {
      cursor: pointer;
    }

    &.slick-disabled {
      opacity: 0;
      &:hover {
        cursor: default;
      }
    }

    &.slick-next {
      ${StyledArrow};
      right: 3%;
      border-radius: ${({ theme }) => theme.dimension.borderRadius5};
    }

    &.slick-prev {
      ${StyledArrow};
      left: 3%;
      border-radius: ${({ theme }) => theme.dimension.borderRadius5};
    }
  }

  ${({ whiteDots, theme }) =>
    whiteDots &&
    css`
      & .slick-dots {
        top: 85%;
        padding: 0 !important;
      }
      & .slick-dots > li > div {
        border-color: ${theme.color.white} !important;
        background-color: transparent;
      }
      & .slick-dots .slick-active > div {
        background-color: ${theme.color.white} !important;
        border-color: ${theme.color.white} !important;
      }
    `}
`
export const StyledNavArrow = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.color.white};
  fill: ${({ theme }) => theme.color.grey6};
  border-radius: ${({ theme }) => theme.dimension.borderRadius7};
  box-shadow: ${({ theme }) => theme.dimension.elevationLevel3};
  height: ${({ theme }) => theme.spacing.base.xxxl};
  width: ${({ theme }) => theme.spacing.base.xxxl};

  cursor: pointer;
  z-index: 3;
  display: none;
`
