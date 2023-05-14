import { media } from '@/styles/media'
import { css, styled } from '@/styles/styled'
import { gutterWidth } from './constants'
import { StyledCellProps, TwelveColumn } from './Grid.interface'

const getXsCols = ({ columns, colsXs }: Pick<StyledCellProps, 'columns' | 'colsXs'>) => {
  const cols = colsXs !== undefined ? colsXs : columns
  if (cols !== undefined) {
    switch (cols) {
      case 0:
        return `
          display: none;
        `
      case 1:
        return css`
          width: calc(25% - ${gutterWidth.xs}px);

          @supports (display: grid) {
            width: auto;
            grid-column-end: span 1;
          }
        `
      case 2:
        return css`
          width: calc(50% - ${gutterWidth.xs}px);

          @supports (display: grid) {
            width: auto;
            grid-column-end: span 2;
          }
        `
      case 3:
        return css`
          width: calc(75% - ${gutterWidth.xs}px);

          @supports (display: grid) {
            width: auto;
            grid-column-end: span 3;
          }
        `
      default:
        return css`
          width: calc(100% - ${gutterWidth.xs}px);

          @supports (display: grid) {
            width: auto;
            grid-column-end: span 4;
          }
        `
    }
  }
}

const getSmMdCols =
  (md: boolean) =>
  ({ columns, colsSm, colsMd }: Pick<StyledCellProps, 'columns' | 'colsSm' | 'colsMd'>) => {
    let cols: TwelveColumn | undefined
    if (md) {
      cols = colsMd !== undefined ? colsMd : columns
    } else {
      cols = colsSm !== undefined ? colsSm : columns
    }
    const gutter = md ? gutterWidth.md : gutterWidth.sm
    if (cols !== undefined) {
      switch (cols) {
        case 0:
          return `
          display: none;
        `
        case 1:
          return css`
            width: calc(12.5% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 1;
            }
          `
        case 2:
          return css`
            width: calc(25% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 2;
            }
          `
        case 3:
          return css`
            width: calc(37.5% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 3;
            }
          `
        case 4:
          return css`
            width: calc(50% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 4;
            }
          `
        case 5:
          return css`
            width: calc(62.5% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 5;
            }
          `
        case 6:
          return css`
            width: calc(75% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 6;
            }
          `
        case 7:
          return css`
            width: calc(87.5% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 7;
            }
          `
        default:
          return css`
            width: calc(100% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 8;
            }
          `
      }
    }
  }

const getLgXlCols =
  (xl: boolean) =>
  ({ columns, colsLg, colsXl }: Pick<StyledCellProps, 'columns' | 'colsLg' | 'colsXl'>) => {
    let cols: TwelveColumn | undefined
    if (xl) {
      cols = colsXl !== undefined ? colsXl : columns
    } else {
      cols = colsLg !== undefined ? colsLg : columns
    }
    const gutter = xl ? gutterWidth.xl : gutterWidth.lg
    if (cols !== undefined) {
      switch (cols) {
        case 0:
          return `
          display: none;
        `
        case 1:
          return css`
            width: calc(8.33333% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 1;
            }
          `
        case 2:
          return css`
            width: calc(16.66667% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 2;
            }
          `
        case 3:
          return css`
            width: calc(25% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 3;
            }
          `
        case 4:
          return css`
            width: calc(33.33333% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 4;
            }
          `
        case 5:
          return css`
            width: calc(41.66667% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 5;
            }
          `
        case 6:
          return css`
            width: calc(50% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 6;
            }
          `
        case 7:
          return css`
            width: calc(58.33333% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 7;
            }
          `
        case 8:
          return css`
            width: calc(66.66667% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 8;
            }
          `
        case 9:
          return css`
            width: calc(75% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 9;
            }
          `
        case 10:
          return css`
            width: calc(83.33333% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 10;
            }
          `
        case 11:
          return css`
            width: calc(91.66667% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 11;
            }
          `
        default:
          return css`
            width: calc(100% - ${gutter}px);

            @supports (display: grid) {
              width: auto;
              grid-column-end: span 12;
            }
          `
      }
    }
  }

export const StyledCell = styled.div<StyledCellProps>`
  flex-grow: 1;
  box-sizing: border-box;
  margin: calc(${gutterWidth.xs}px / 2);
  width: calc(100% - ${gutterWidth.xs}px);

  @supports (display: grid) {
    margin: 0;
    width: auto;
    grid-column-end: span 4;
  }

  ${getXsCols}

  ${media.sm} {
    display: ${({ alignHeight }) => (alignHeight ? `flex` : `block`)};
    margin: calc(${gutterWidth.sm}px / 2);
    width: calc(50% - ${gutterWidth.sm}px);

    @supports (display: grid) {
      margin: 0;
      width: auto;
      grid-column-end: span 4;
    }

    ${getSmMdCols(false)}
  }

  ${media.md} {
    display: ${({ alignHeight }) => (alignHeight ? `flex` : `block`)};
    margin: calc(${gutterWidth.md}px / 2);
    width: calc(50% - ${gutterWidth.md}px);

    @supports (display: grid) {
      margin: 0;
      width: auto;
      grid-column-end: span 4;
    }

    ${getSmMdCols(true)}
  }

  ${media.lg} {
    display: ${({ alignHeight }) => (alignHeight ? `flex` : `block`)};
    margin: calc(${gutterWidth.lg}px / 2);
    width: calc(33.33333% - ${gutterWidth.lg}px);

    @supports (display: grid) {
      margin: 0;
      width: auto;
      grid-column-end: span 4;
    }

    ${getLgXlCols(false)}
  }

  ${media.xl} {
    display: ${({ alignHeight }) => (alignHeight ? `flex` : `block`)};
    margin: calc(${gutterWidth.xl}px / 2);
    width: calc(33.33333% - ${gutterWidth.xl}px);

    @supports (display: grid) {
      margin: 0;
      width: auto;
      grid-column-end: span 4;
    }

    ${getLgXlCols(true)}
  }

  ${media.ie11} {
    ${({ noMargin }) =>
      noMargin &&
      `
        margin: 0;
    `}
  }

  ${({ order }) =>
    order &&
    css`
      order: ${order};
    `}

  ${({ align }) => {
    if (align) {
      switch (align) {
        case 'bottom':
          return `
            align-self: flex-end;

            @supports (display: grid) {
              align-self: end;
            }
            `
        case 'middle':
          return `
            align-self: center;
          `
        case 'top':
          return `
          align-self: flex-start;

            @supports (display: grid) {
              align-self: start;
            }
          `
        default:
          return ''
      }
    }
  }}

  
  ${({ justify }) => {
    if (justify) {
      switch (justify) {
        case 'flex-end':
          return `
            justify-self: flex-end;

            @supports (display: grid) {
              justify-self: end;
            }
            `
        case 'stretch':
          return `
            justify-self: stretch;
          `
        case 'center':
          return `
            justify-self: center;
          `
        case 'flex-start':
          return `
          justify-self: flex-start;

            @supports (display: grid) {
              justify-self: start;
            }
          `
        default:
          return ''
      }
    }
  }}

  ${({ alignHeight }) =>
    alignHeight &&
    `display: flex;
      > div {
        flex: 1
      }`}
`
