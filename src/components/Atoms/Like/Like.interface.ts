import { ComponentType, ReactElement } from 'react'
import { MouseEvent } from 'react'
import { ThemeColors, ThemeFontLineHeight, ThemeFontSizes } from '@/types/theme'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LikeAs = string | JSX.IntrinsicElements | ComponentType<any>
export type LikeSize = 'small' | 'large'
type CursorType = 'initial' | 'pointer'

export interface LikeProps {
  bold?: boolean
  className?: string
  cursor?: CursorType
  color?: ThemeColors
  decorationColor?: ThemeColors
  disabled?: boolean
  fontSize?: ThemeFontSizes
  iconLeft?: ReactElement
  iconRight?: ReactElement
  inline?: boolean
  lineHeight?: ThemeFontLineHeight
  onClick?: (e: MouseEvent<HTMLElement>) => void
  scale?: LikeSize
  copy?: string
  likes?: string
  underline?: boolean
  children?: ReactElement | string
}

export interface StyledLikeProps {
  color?: ThemeColors
  cursor?: CursorType
  hasIconLeft: boolean
  hasIconRight: boolean
  isBold: boolean
  isDisabled: boolean
  isInline: boolean
  isLarge: boolean
  isSmall: boolean
  isUnderlined?: boolean
  copy?: string
  likes?: string
}
