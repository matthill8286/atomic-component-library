import {
  BoxDimensions,
  ThemeColors,
  ThemeFontFamilies,
  ThemeFontLetterSpacing,
  ThemeFontLineHeight,
  ThemeFontSizes,
  ThemeFontWeights,
} from '@/types/theme'

export type TextAlign = 'left' | 'right' | 'center'
export type BorderRadius = 'borderRadius0' | 'borderRadius1' | 'borderRadius2'

export interface FontSizeMap {
  mobile: ThemeFontSizes
  tablet?: ThemeFontSizes
  desktop?: ThemeFontSizes
}

export interface TypoProps {
  tag?: keyof JSX.IntrinsicElements
  className?: string
  display?: string
  style?: React.CSSProperties
  background?: string
  borderRadius?: BorderRadius
  fontSize?: ThemeFontSizes | FontSizeMap
  fontFamily?: ThemeFontFamilies
  color?: ThemeColors
  weight?: ThemeFontWeights
  underline?: boolean
  lineHeight?: ThemeFontLineHeight
  limitLines?: number
  limitWidth?: string
  spacing?: ThemeFontLetterSpacing
  margin?: BoxDimensions
  padding?: BoxDimensions
  textAlign?: TextAlign
  itemProp?: string
  toUpperCase?: boolean
  showCursor?: boolean
  children?: React.ReactNode
}

export interface StyledInfoTextProps {
  as: string
  tag: string
  display?: string
  background?: string
  borderRadius?: BorderRadius
  fontSize?: ThemeFontSizes | FontSizeMap
  fontFamily?: ThemeFontFamilies
  color?: ThemeColors
  weight?: ThemeFontWeights
  underline?: boolean
  lineHeight?: ThemeFontLineHeight
  limitLines?: number
  spacing?: ThemeFontLetterSpacing
  margin?: BoxDimensions
  padding?: BoxDimensions
  textAlign?: TextAlign
  toUpperCase?: boolean
  showCursor?: boolean
}
