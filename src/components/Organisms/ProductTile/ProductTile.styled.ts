import { Divider } from '@/components/Atoms/Divider'
import { css, media, spacing, styled } from '@/styles'
import { Icon } from '@/components/Atoms/Icon'
import {
  ProductTileOrientation,
  StyledContentContainerProps,
  StyledResponsiveContainerProps,
  StyledTileProps,
} from './ProductTile.interface'

/**
 * Small helper function which returns `true` ifProductTile is in landscape mode
 */
export const isPortrait = (orientation: ProductTileOrientation) => {
  return orientation === 'portrait'
}

export const StyledTile = styled.div<StyledTileProps>`
  ${({ orientation, theme }) => css`
    height: ${isPortrait(orientation) ? `calc(100% - ${theme.spacing.base.sm})` : `100%`};
  `}
  display: flex;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.base.sm};
  ${({ orientation }) => css`
    flex-direction: ${isPortrait(orientation) ? 'row' : 'column'};
  `}

  ${media.md} {
    ${({ orientation, theme }) => css`
      height: ${isPortrait(orientation) ? `calc(100% - ${theme.spacing.base.sm})` : `100%`};
    `}
  }
`

export const StyledResponsiveContainer = styled.div<StyledResponsiveContainerProps>`
  display: flex;
  position: relative;

  ${({ orientation }) => css`
    flex-direction: ${isPortrait(orientation) ? 'column' : 'row'};
    height: ${!isPortrait(orientation) ? 'auto' : '100%'};
    min-height: ${!isPortrait(orientation) ? '300px' : '100%'};
  `}

  width: 100%;

  ${media.maxSm} {
    ${({ orientation }) => css`
      flex-direction: column;
    `}
  }
`

export const StyledMediaContainer = styled.div<{
  orientation: ProductTileOrientation
  imageHeight?: string
  width?: string
  isDisabled?: boolean
  isCompact?: boolean
}>`
  ${({ orientation, isCompact, width }) => css`
    flex-direction: row;
    flex: ${isCompact ? 0 : isPortrait(orientation) ? 1 : 1};
    ${isCompact &&
    `
    margin-left: ${spacing.base.sm}
    width: ${width}
    `};
  `}

  padding: 0;
  width: 100%;
  cursor: pointer;
  align-self: center;
  height: ${({ imageHeight, orientation, isCompact }) => (!isPortrait(orientation) ? '100%' : imageHeight)};
  ${media.md} {
    max-width: 100%;
  }

  ${({ isDisabled }) => `
    ${
      isDisabled
        ? `
        -ms-filter: grayscale(100%);
        filter: grayscale(100%);
        opacity: 0.4;
        pointer-events: none;
      `
        : ''
    }
  `};
`

export const StyledCardWrapper = styled.div<{ isDisabled?: boolean }>`
  ${({ isDisabled }) => css`
    justify-content: space-between;
    position: relative;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;

    ${isDisabled &&
    `       
      -ms-filter: grayscale(100%);
        filter: grayscale(100%);
        opacity: 0.4;
        `}
  `}
`

export const StyledLinearGradient = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 75px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
`

export const StyledContentContainer = styled.div<StyledContentContainerProps>(
  ({ theme }) => css`
    flex: 1;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;

    padding: calc(${theme.spacing.base.md} - 2px);

    ${media.md} {
      padding: ${theme.spacing.base.md};
    }
  `,
)

export const StyledHeadingContainer = styled.div<{ isDisabled?: boolean; onClick?: any }>`
  ${({ theme, isDisabled }) => css`
    display: flex;
    flex-direction: row;
    text-transform: ${({ theme }) => theme.heading.featured.textTransform};
    justify-content: flex-start;
    cursor: ${isDisabled ? 'none' : 'pointer'};
    flex-grow: initial;
  `}
`

export const StyledAdditionalContent = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.base.sm};
  `}
`

export const StyledDivider = styled(Divider)`
  margin: 0;
`
