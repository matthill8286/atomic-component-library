import { media } from '@/styles'
import { BoxDimensions, MarginMap, PaddingMap, Size, Theme, VerticalMarginMap, VerticalPaddingMap } from '@/types/theme'

/**
 * @description utility function to calc the values of margin and padding
 * @deprecated getBoxDimension is replaced by margin-function and padding-function in order to achieve a consistent working method with margin props and padding props
 */
export const getBoxDimension = (theme: Theme, boxDimensions: BoxDimensions = ''): BoxDimensions => {
  if (boxDimensions && boxDimensions.split) {
    const result = boxDimensions.split(' ').map((m) => theme.spacing.base[m] || m)

    if (result.length) {
      return result.join(' ')
    }
  }
  return boxDimensions
}

export const margin = ({ theme, margin }: { theme: Theme; margin?: MarginMap }) => {
  if (!margin) return
  return handleBoxDimensions({ theme, dimensions: margin, propertyName: 'margin' })
}

export const padding = ({ theme, padding }: { theme: Theme; padding?: PaddingMap }) => {
  if (!padding) return
  return handleBoxDimensions({ theme, dimensions: padding, propertyName: 'padding' })
}

export const handleBoxDimensions = (props: {
  theme: Theme
  dimensions: MarginMap | PaddingMap | string
  propertyName: 'margin' | 'padding'
}) => {
  const { theme, dimensions, propertyName } = props
  const boxDimensionsIsString = typeof dimensions === 'string'

  if (boxDimensionsIsString) {
    return `${propertyName}: ${getBoxDimensionStrings(theme, dimensions as string)};`
  }

  return getBoxDimensionResponsiveObjects(theme, dimensions as VerticalMarginMap | VerticalPaddingMap, propertyName)
}

export const getBoxDimensionStrings = (theme: Theme, dimensions: BoxDimensions = '') => {
  if (dimensions.split) {
    const result = dimensions.split(' ').map((d) => theme.spacing.base[d] || d)
    if (result.length) {
      return result.join(' ')
    }
  }
}

export const getBoxDimensionResponsiveObjects = (
  theme: Theme,
  boxDimensions: VerticalMarginMap | VerticalPaddingMap,
  propertyName: 'margin' | 'padding',
) => {
  const mobileStyle = `${propertyName}: ${getBoxDimensionStrings(theme, boxDimensions.mobile)};`
  const tabletStyle = `${media.tablet}{${propertyName}: ${getBoxDimensionStrings(theme, boxDimensions.tablet)};}`
  const desktopStyle = ` ${media.desktop}{${propertyName}: ${getBoxDimensionStrings(theme, boxDimensions.desktop)};}`

  const mobile = boxDimensions?.mobile && mobileStyle
  const tablet = boxDimensions?.tablet && tabletStyle
  const desktop = boxDimensions?.desktop && desktopStyle

  return [mobile, tablet, desktop].filter((style) => !!style).join('')
}

export const getSizeInPx = (size: number | keyof Omit<Size, 'xxxs'>, themeSizes: Omit<Size, 'xxxs'>): string => {
  if (typeof size === 'number') {
    return `${size}px`
  } else {
    return themeSizes[size] || themeSizes['sm']
  }
}
