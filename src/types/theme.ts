import { defaultTheme } from '@/styles/sc-vars-default'

export type ThemeColors = keyof typeof defaultTheme.color | string
export type ThemeFontSizes = keyof typeof defaultTheme.font.size | string

export type ThemeFontWeights = keyof typeof defaultTheme.font.weight
export type ThemeFontFamilies = keyof typeof defaultTheme.font.family
export type ThemeFontLineHeight = keyof typeof defaultTheme.font.lineHeight | string
export type ThemeFontLetterSpacing = keyof typeof defaultTheme.font.spacing
export type BoxDimensions = string

export type Elevation = 0 | 1 | 2 | 3 | 4

export type ActionType = 'primary' | 'secondary' | 'ghost' | 'prominent' | 'inverted' | 'outlined' | undefined

export type Position = 'bottom' | 'left' | 'right' | 'top'

export interface Padding {
  bottom?: VerticalPadding
  left?: HorizontalPadding
  right?: HorizontalPadding
  top?: VerticalPadding
}

export interface Margin {
  bottom?: VerticalMargin
  left?: HorizontalMargin
  right?: HorizontalMargin
  top?: VerticalMargin
}

export type HorizontalPadding = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type HorizontalMargin = HorizontalPadding

export type VerticalPadding = 'xxs' | HorizontalPadding | 'xxl'
export type VerticalMargin = VerticalPadding

export interface VerticalPaddingMap {
  mobile?: VerticalPadding
  tablet?: VerticalPadding
  desktop?: VerticalPadding
}

export interface VerticalMarginMap {
  mobile?: VerticalMargin
  tablet?: VerticalMargin
  desktop?: VerticalMargin
}

export type MarginMap = VerticalMarginMap | VerticalMargin | string
export type PaddingMap = VerticalPaddingMap | VerticalPadding | string

export interface MarginProps {
  margin?: MarginMap
}
export interface PaddingProps {
  padding?: PaddingMap
}

export interface ImageMap {
  mobile: string
  tablet?: string
  desktop?: string
}

export interface HeightMap {
  mobile: number
  tablet?: number
  desktop?: number
}

export interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
  xxxl: number
}

export interface Color {
  primary: string
  secondary: string
  grey1: string
  grey2: string
  grey3: string
  grey4: string
  grey5: string
  grey6: string
  black: string
  white: string
  success: string
  alert: string
  error: string
  info: string
  selected: string
  textColor: string
  clear: string
}

export interface Body {
  background: string
}

export interface ButtonTheme {
  size: {
    sm: string
    md: string
    lg: string
  }
  isRound: boolean
}

export interface Container {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
  xxxl: number
  padding: string
}

export interface Header {
  background: ThemeColors
  statusType: 'black' | 'white'
  topBar: string
  color: ThemeColors
  height: string
  padding: PaddingMap
}

export type Footer = Omit<Header, 'topBar'>

export interface HeadingTheme {
  featured: {
    fontPadding: string
    textTransform: string
    fontSize: string
    lineHeight: {
      xl: string
      md: string
      xs: string
    }
  }
}

export interface HeroTheme {
  size: {
    sm: string
    md: string
    lg: string
  }
  family: ThemeFontFamilies
  color?: ThemeColors
  intro: {
    font: HeroFont
    textTransform: string
    background: string
  }
  copy: {
    font: HeroFont
    background: string
  }
}

export type HeroFont = {
  size?: ThemeFontSizes
  height?: ThemeFontLineHeight
  weight?: ThemeFontWeights
}

export interface SizeSL {
  small: ThemeFontSizes
  large: ThemeFontSizes
  responsive: string
}

export interface Size {
  xxxs: string
  xxs: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
  xxxl: string
  xxxxl: string
  xxxxxl: string
}

export interface Spacing {
  base: Omit<Size, 'xxxs'>
  baseMobile: Omit<Size, 'xxxs'>
  gap: { default: string; wide: string; narrow: string; extraWide: string }
}

export interface Dimension {
  borderWidth: string
  borderRadius0: string
  borderRadius1: string
  borderRadius2: string
  borderRadius3: string
  borderRadius4: string
  borderRadius5: string
  borderRadius6: string
  borderRadius7: string
  borderRadius8?: string
  elevationLevel1: string
  elevationLevel2: string
  elevationLevel3: string
  elevationLevel4: string
}

export interface Font {
  family: { default: string; meta: string; price: string; branded: string; featured: string }
  spacing: { half: string; base: string }
  size: Size
  lineHeight: Size
  weight: { semibold?: number; bold: number; regular: number; light?: number }
  textTransform: string
  superscript: {
    size: Size
    top: Size
  }
}

export interface Transition {
  short: string
  medium: string
  long: string
  defaultEasing: string
}

export interface PriceConfig {
  default: string
  invert: string
  shadow: string
  shadowInvert: number
  prefix: { shadow: string }
  branded: {
    color: { default: string; invert: string }
    size: SizeSL
    prefixSize: SizeSL
    letterSpacing: { small: string; large: string }
    lineHeight: { small: ThemeFontLineHeight; large: ThemeFontLineHeight }
    flexWrapper: {
      padding: {
        [key: string]: string
      }
    }
    prefix: {
      lineHeight: {
        [key: string]: string
      }
      fontSize: {
        [key: string]: string
      }
    }
    whole: {
      lineHeight: {
        [key: string]: string
      }
      fontSize: {
        [key: string]: string
      }
    }
    decimal: {
      lineHeight: {
        [key: string]: string
      }
      fontSize: {
        [key: string]: string
      }
      top: {
        [key: string]: string
      }
    }
  }
  regular: {
    color: { default: string; invert: string }
    size: SizeSL
    prefixSize: SizeSL
    lineHeight: { small: ThemeFontLineHeight; large: ThemeFontLineHeight }
    energyEfficiency: {
      marginTop: {
        small: string
        large: string
      }
    }
  }
  strikeInfo: {
    color: ThemeColors
    height: {
      [key: string]: string
    }
    superPrice: {
      fontSize: {
        [key: string]: string
      }
      left: {
        [key: string]: string
      }
    }
    priceWrapper: {
      paddingBottom: {
        [key: string]: string
      }
      bottom: {
        [key: string]: string
      }
      right: {
        [key: string]: string
      }
    }
  }
  strikePrice: {
    sup?: {
      small: string
      large: string
    }
    span?: {
      small: string
      large: string
    }
  }
}

export interface Polished {
  inactive: number
  darken: number
}

export type ThemeName = 'Saiyan' | 'Danone' | 'Alternate'

export interface Theme {
  [x: string]: unknown
  name: string
  breakpoints: Breakpoints
  color: Color
  body: Body
  container: Container
  header: Header
  footer: Footer
  heading: HeadingTheme
  hero: HeroTheme
  price: PriceConfig
  button: ButtonTheme
  defaultSpacing: number
  spacing: Spacing
  dimension: Dimension
  font: Font
  transition: Transition
  polished: Polished
}
