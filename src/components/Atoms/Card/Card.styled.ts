import { darken } from 'polished'
import { media } from '@/styles'
import { css, styled } from '@/styles/styled'
import {
  Elevation,
  HorizontalMargin,
  HorizontalPadding,
  Margin,
  Padding,
  Position,
  ThemeColors,
  VerticalMargin,
  VerticalMarginMap,
  VerticalPadding,
  VerticalPaddingMap,
} from '@/types/theme'
import { Picture } from '../Picture'
import { Corners, Shape, StyledBadgeWrapperProps, StyledCardProps, StyledDividerProps, Surface } from './Card.interface'

export const StyledBadgeLineWrapper = styled.div<StyledBadgeWrapperProps>`
  position: absolute;
  left: 0;
  top: -14px;
  max-width: 100%;
  z-index: 1; /* required because transform interferes with z-order */

  ${media.maxMd} {
    > div > div:nth-child(n + 3) {
      display: none;
    }
  }
`

const handleElevation = (elevation: Elevation, surface: Surface = 'white') => {
  return ({ theme }) => {
    if (surface === 'selected') {
      const elevationAsStyleString = elevation ? `${theme.dimension[`elevationLevel${elevation}`]}, ` : ''
      return `${elevationAsStyleString}inset 0px 0px 0px 2px ${theme.color.primary}`
    }

    return theme.dimension[`elevationLevel${elevation}`]
  }
}

export const handlePadding = (
  baseSpacing: Record<string, unknown>,
  padding: VerticalPadding | VerticalPaddingMap | Padding,
): string => {
  let paddingCss = ''
  let responsivePaddingCss = ''
  const { top, right, bottom, left } = padding as Padding
  const overallPadding = padding as HorizontalPadding
  const { mobile, tablet, desktop } = padding as VerticalPaddingMap

  // set a padding for all sides if prop e.g. padding="sm"
  if (overallPadding && baseSpacing[overallPadding]) {
    paddingCss = `padding: ${baseSpacing[overallPadding]};`
  }

  // add padding for one side if prop has attribute: padding={{top: 'sm'}}
  if (top) {
    responsivePaddingCss = responsivePaddingCss + `padding-top: ${baseSpacing[top]};`
  }

  // add padding for one side if prop has attribute: padding={{right: 'lg'}}
  if (right) {
    responsivePaddingCss = responsivePaddingCss + `padding-right: ${baseSpacing[right]};`
  }

  // add padding for one side if prop has attribute: padding={{bottom: 'xxs'}}
  if (bottom) {
    responsivePaddingCss = responsivePaddingCss + `padding-bottom: ${baseSpacing[bottom]};`
  }

  // add padding for one side if prop has attribute: padding={{left: 'xl'}}
  if (left) {
    responsivePaddingCss = responsivePaddingCss + `padding-left: ${baseSpacing[left]};`
  }

  // add padding rule for mobile, if a single side was set above, only the other sides will be affected
  if (mobile) {
    paddingCss = paddingCss + `${media.mobile} {padding: ${baseSpacing[mobile]}; ${responsivePaddingCss}};`
  }

  // add padding rule for tablet, if a single side was set above, only the other sides will be affected
  if (tablet) {
    paddingCss = paddingCss + `${media.tablet} {padding: ${baseSpacing[tablet]}; ${responsivePaddingCss}};`
  }

  // add padding rule for desktop, if a single side was set above, only the other sides will be affected
  if (desktop) {
    paddingCss = paddingCss + `${media.desktop} {padding: ${baseSpacing[desktop]}; ${responsivePaddingCss}};`
  }

  return paddingCss || responsivePaddingCss
}

export const handleMargin = (
  baseSpacing: Record<string, unknown>,
  margin: VerticalMarginMap | VerticalMargin | Margin,
): string => {
  let marginCss = ''
  let responsiveMarginCss = ''
  const { top, right, bottom, left } = margin as Margin
  const overallMargin = margin as HorizontalMargin
  const { mobile, tablet, desktop } = margin as VerticalMarginMap

  // set a margin for all sides if prop e.g. margin="sm"
  if (overallMargin && baseSpacing[overallMargin]) {
    marginCss = `margin: ${baseSpacing[overallMargin]};`
  }

  // add margin for one side if prop has attribute: margin={{top: 'sm'}}
  if (top) {
    responsiveMarginCss = responsiveMarginCss + `margin-top: ${baseSpacing[top]};`
  }

  // add margin for one side if prop has attribute: margin={{right: 'lg'}}
  if (right) {
    responsiveMarginCss = responsiveMarginCss + `margin-right: ${baseSpacing[right]};`
  }

  // add margin for one side if prop has attribute: margin={{bottom: 'xxs'}}
  if (bottom) {
    responsiveMarginCss = responsiveMarginCss + `margin-bottom: ${baseSpacing[bottom]};`
  }

  // add margin for one side if prop has attribute: margin={{left: 'xl'}}
  if (left) {
    responsiveMarginCss = responsiveMarginCss + `margin-left: ${baseSpacing[left]};`
  }

  // add margin rule for mobile, if a single side was set above, only the other sides will be affected
  if (mobile) {
    marginCss = marginCss + `${media.mobile} {margin: ${baseSpacing[mobile]}; ${responsiveMarginCss}};`
  }

  // add margin rule for tablet, if a single side was set above, only the other sides will be affected
  if (tablet) {
    marginCss = marginCss + `${media.tablet} {margin: ${baseSpacing[tablet]}; ${responsiveMarginCss}};`
  }

  // add margin rule for desktop, if a single side was set above, only the other sides will be affected
  if (desktop) {
    marginCss = marginCss + `${media.desktop} {margin: ${baseSpacing[desktop]}; ${responsiveMarginCss}};`
  }

  return marginCss || responsiveMarginCss
}

const handleBorder = (surface: Surface, borderWidth: number, borderColor?: ThemeColors) => {
  return ({ theme }) => {
    const surfaces = {
      white: theme.color.grey2,
      clear: theme.color.grey2,
      grey: theme.color.grey2,
      black: theme.color.grey5,
      primary: theme.color.primary,
      selected: theme.color.selected,
    }

    let finalBorderColor

    if (borderColor) {
      finalBorderColor = theme.color[borderColor]
    } else if (surface === 'primary') {
      finalBorderColor = darken(theme.polished.darken, theme.color.primary)
    } else {
      finalBorderColor = surfaces[surface]
    }
    return `${borderWidth}px solid ${finalBorderColor}`
  }
}

const handleColor = (textColor?: ThemeColors, surface?: Surface) => {
  return ({ theme }) => {
    switch (surface) {
      case 'black':
      case 'primary':
        return theme.color.white
      case 'selected':
        return theme.color.black
      default:
        return theme.color[textColor || 'black']
    }
  }
}

const isCornersShape = (shape: Shape | Corners<Shape>): shape is Corners<Shape> => {
  const typedShape = shape as Corners<Shape>
  return !!typedShape.bottomLeft || !!typedShape.bottomRight || !!typedShape.topLeft || !!typedShape.topRight
}

export const handleShape = (shape: Shape | Corners<Shape>) => {
  return ({ theme }) => {
    const borders = {
      sharp: theme.dimension.borderRadius0,
      'rounded-small': theme.dimension.borderRadius1,
      'rounded-big': theme.dimension.borderRadius2,
      'rounded-xl': theme.dimension.borderRadius3,
    }
    if (isCornersShape(shape)) {
      const { bottomRight, bottomLeft, topLeft, topRight } = shape
      return `
        ${topLeft && `border-top-left-radius: ${borders[topLeft]};`}
        ${topRight && `border-top-right-radius: ${borders[topRight]};`}
        ${bottomLeft && `border-bottom-left-radius: ${borders[bottomLeft]};`}
        ${bottomRight && `border-bottom-right-radius: ${borders[bottomRight]};`}
      `
    } else {
      return `border-radius: ${borders[shape]};`
    }
  }
}

const handleSurface = (surface?: Surface) => {
  return ({ theme }) => {
    const surfaces = {
      white: theme.color.white,
      grey: theme.color.grey4,
      black: theme.color.grey6,
      primary: theme.color.primary,
      selected: theme.color.white,
    }
    return 'background-color: ' + surfaces[surface ? surface : 'white'] + ';'
  }
}

const handleNoBorder = (noBorder: Position | Position[] | 'none'): string => {
  if (noBorder === 'none') {
    return `border: none;`
  }

  if (Array.isArray(noBorder)) {
    return noBorder.map((position) => `border-${position}-width: 0px;`).join('')
  } else {
    return `border-${noBorder}-width: 0px;`
  }
}

const handleElevationHover = (
  elevationHover: Elevation,
  elevation: Elevation,
  surface?: Surface,
) => css<StyledCardProps>`
  cursor: pointer;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
  transition-property: border-color, box-shadow, transform;

  ${media.tablet} {
    &:hover {
      transform: ${elevationHover > 0 && elevationHover !== elevation ? 'translateY(-1px)' : 'none'};
      box-shadow: ${handleElevation(elevationHover, surface)};
      border-color: rgba(0, 0, 0, 0);
    }
  }
`

export const StyledCard = styled.div<StyledCardProps>(
  ({
    borderColor,
    borderWidth,
    center,
    display,
    elevation,
    elevationHover,
    margin,
    noBorder,
    overflow,
    padding,
    cardHeight,
    flexDirection,
    shape,
    surface,
    textColor,
    theme,
  }) => css<StyledCardProps>`
    ${display && `display: ${display};`};
    ${flexDirection && `flex-direction: ${flexDirection};`};
    box-sizing: border-box;
    line-height: 1.43;
    overflow: ${overflow ? overflow : 'hidden'};
    ${!!padding && handlePadding(theme.spacing.base, padding as VerticalPaddingMap)};
    ${!!margin && handleMargin(theme.spacing.base, margin)};
    box-shadow: ${handleElevation(elevation, surface)};
    color: ${handleColor(textColor, surface)};
    border: ${elevation === 0 && handleBorder(surface ?? 'white', borderWidth, borderColor)};
    ${surface && handleSurface(surface)}
    ${noBorder && handleNoBorder(noBorder)}
    ${!!elevationHover && handleElevationHover(elevationHover, elevation, surface)}
    ${shape && handleShape(shape)}
    ${center && `text-align: center;`}
    height: ${cardHeight ? cardHeight : '100%'};
    width: 100%;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${(surface === 'grey' || surface === 'primary' || surface === 'black') && theme.color.white};
    }
  `,
)

export const StyledFeaturedProductsPicture = styled(Picture)`
  & img {
    display: block;
    /* Need to set max width on products here because it's overwritten in multiple places by carousel styles :-() */
    max-width: 128px !important;
  }
`

export const StyledFeaturedProductsContainer = styled.div`
  display: none;
  ${media.tablet} {
    position: absolute;
    display: flex;
    z-index: 1;
    right: 0;
    top: -24px;
    justify-content: flex-end;
  }
`

export const StyledFeaturedProductSpacing = styled.div(
  ({ theme }) => css`
    margin-left: ${theme.spacing.base.xs};
  `,
)

export const StyledDivider = styled.div<StyledDividerProps>(
  ({ dividerWidth, theme }) =>
    css<StyledDividerProps>`
      position: absolute;
      bottom: 1px;
      left: calc(calc(100% - ${dividerWidth}) / 2);
      display: flex;
      width: ${dividerWidth};
      margin: 0 auto;
      z-index: 1;
      background: ${theme.color.grey2};
      height: 1px;
    `,
)

export const StyledCardWrapper = styled.div<{
  fullHeight: boolean
  elevationHover?: Elevation
  cardHeight?: string
}>`
  position: relative;
  outline: none;
  width: 100%;

  ${StyledBadgeLineWrapper} {
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
    transition-property: transform;
  }

  ${media.tablet} {
    &:hover {
      ${StyledBadgeLineWrapper}, ${StyledFeaturedProductsContainer} {
        transform: ${({ elevationHover }) => (elevationHover && elevationHover > 0 ? 'translateY(-1px)' : 'none')};
      }
    }
  }

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `}

  ${({ cardHeight }) =>
    cardHeight &&
    css`
      height: ${cardHeight};
    `}
`
