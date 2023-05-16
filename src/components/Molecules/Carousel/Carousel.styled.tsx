import { media } from '@/styles/media'
import { css, styled } from '@/styles/styled'
import { CarouselProps } from './Carousel.interface'

export const StyledCarousel = styled.div<CarouselProps>`
  width: 100%;
  position: relative;
  margin: 0 auto;

  ${({ theme, boxShadow }) =>
    boxShadow &&
    `
      & .slick-list {
        box-shadow: ${theme.dimension.elevationLevel2};
      }
  `}

  & .slick-slider.mms-th-slider {
    ${media.sm} {
      margin-top: ${({ theme }) => theme.spacing.base.lg};
    }

    & .slick-list {
      width: 90%;
      margin: 0 auto;
      box-sizing: content-box;

      & .slick-track {
        & .slick-current {
          border: 2px solid ${({ theme }) => theme.color.error} !important;
          box-shadow: ${({ theme }) => theme.dimension.elevationLevel2};
        }
        & .slick-slide {
          margin: 0 ${({ theme }) => theme.spacing.base.sm};
          padding: ${({ theme }) => theme.spacing.base.sm};
          box-sizing: border-box;
          border: 1px solid ${({ theme }) => theme.color.grey2};
          border-radius: ${({ theme }) => theme.dimension.borderRadius1};

          & div[tabindex] {
            outline: 0;
          }
        }
      }
    }

    & div[tabindex] {
      outline: 0;
      position: relative;
      > img {
        position: absolute;
        width: 40%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }

  & .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;

    ${media.xl} {
      &:hover {
        & .slick-arrow {
          &.slick-prev,
          &.slick-next {
            display: block !important;
          }
        }
      }
    }

    & .slick-list {
      position: relative;
      padding: ${({ theme }) => `0 0 ${theme.spacing.base.sm} 0`};
      transform: translate3d(0, 0, 0);
      box-sizing: content-box;
      overflow: ${({ hasOverflow }) => (hasOverflow ? 'visible' : 'hidden')};
      margin: ${({ hasPadding }) => (hasPadding ? '0 -10px' : '0')};

      & .slick-track {
        display: flex;
        position: relative;
        top: 0;
        left: 0;
        transform: translate3d(0, 0, 0);

        & .slick-slide {
          ${({ hasPadding }) => hasPadding && 'margin: 0 10px'};

          display: flex;
          align-items: center;
          justify-content: center;
          -webkit-justify-content: center;
          ${({ fullHeight }) =>
            fullHeight &&
            css`
              & > div {
                height: 100%;
                & > div {
                  height: 100%;
                }
              }
            `}
          height: auto;
          position: relative;
          float: left;

          & img {
            display: block;
            margin: auto;
            max-width: 100%;
          }

          & > div {
            width: 100%;
            height: 100%;
            display: flex;
          }
        }
      }
    }

    ${({ hasThumbnails }) =>
      !hasThumbnails
        ? `
      & .slick-next, & .slick-prev {
        display: none !important;
      }
      :hover{
        & .slick-next, & .slick-prev {
          display: block !important;
        }
      }
    `
        : `
        & .slick-next, & .slick-prev {
          display: none !important;
          ${media.sm} {
          display: block !important;
        }
      }
    `}

    & .slick-dots {
      position: relative;
      list-style: none;
      display: block;
      float: left;
      margin: ${({ theme }) => `-${theme.spacing.base.sm} 0 0 0`};
      padding: ${({ theme }) => theme.spacing.base.sm} 0;

      & li {
        position: relative;
        display: inline-block;
        padding: 0;
        padding-bottom: ${({ theme }) => theme.spacing.base.xxs};
        margin-left: ${({ theme }) => theme.spacing.base.xs};
        margin-right: ${({ theme }) => theme.spacing.base.xs};

        ${media.lg} {
          &:hover {
            padding-bottom: 0;

            margin-left: ${({ theme }) => theme.spacing.base.xxs};
            margin-right: ${({ theme }) => theme.spacing.base.xxs};

            &:first-child {
              margin-left: 0;
            }

            & div {
              background-color: ${({ theme }) => theme.color.primary};
              border-color: ${({ theme }) => theme.color.primary};

              height: ${({ theme }) => theme.spacing.base.sm};
              width: ${({ theme }) => theme.spacing.base.sm};

              cursor: pointer;
            }
          }
        }

        &:first-child {
          margin-left: ${({ theme }) => theme.spacing.base.xxs};
        }

        & div {
          border: 0;
          background-color: ${({ theme }) => theme.color.grey2};
          border-color: ${({ theme }) => theme.color.grey2};
          border-radius: ${({ theme }) => theme.spacing.base.xs};
          display: block;
          height: ${({ theme }) => theme.spacing.base.xs};
          width: ${({ theme }) => theme.spacing.base.xs};
          outline: none;
          color: transparent;
          border-style: solid;
          border-width: 1px;
          box-sizing: border-box;
        }

        &.slick-active {
          padding-bottom: 0;

          margin-left: ${({ theme }) => theme.spacing.base.xxs};
          margin-right: ${({ theme }) => theme.spacing.base.xxs};

          &:first-child {
            margin-left: 0;
          }

          & div {
            background-color: ${({ theme }) => theme.color.primary};
            border-color: ${({ theme }) => theme.color.primary};

            height: ${({ theme }) => theme.spacing.base.sm};
            width: ${({ theme }) => theme.spacing.base.sm};

            opacity: 1;
          }
        }
      }
    }

    & > .slick-arrow {
      z-index: 1;
      position: absolute;
      top: calc(50% + 16px);
      outline: 0;
      transform: translateY(-50%);
      margin-top: ${({ theme, hasThumbnails }) => (hasThumbnails ? 0 : `-${theme.spacing.base.md}`)};
      border: none;
      height: ${({ theme }) => theme.spacing.base.lg};
      width: ${({ theme }) => theme.spacing.base.lg};
      border-radius: ${({ theme }) => theme.dimension.borderRadius1};
      background: ${({ theme, hasThumbnails }) => (hasThumbnails ? `transparent` : `${theme.color.black}`)};

      & svg {
        position: relative;
        cursor: pointer;
        top: ${({ theme }) => theme.spacing.base.xxs};
        left: ${({ theme }) => theme.spacing.base.xxs};
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
        right: ${({ theme, hasThumbnails }) => (hasThumbnails ? theme.spacing.base.sm : 0)};

        ${media.md} {
          right: ${({ theme, hasThumbnails }) => (hasThumbnails ? 0 : `-${theme.spacing.base.sm}`)};
        }

        display: none !important;
      }

      &.slick-prev {
        right: ${({ theme, hasThumbnails }) => (hasThumbnails ? theme.spacing.base.sm : 0)};

        ${media.md} {
          left: ${({ theme, hasThumbnails }) => (hasThumbnails ? 0 : `-${theme.spacing.base.sm}`)};
        }

        display: none !important;
      }
    }
  }

  ${({ whiteDots, theme }) =>
    whiteDots &&
    `
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

export const StyledCarouselHandler = styled.div`
  outline: none;
`
