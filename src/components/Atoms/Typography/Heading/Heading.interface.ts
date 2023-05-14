import React from 'react'
import { ThemeColors, ThemeFontSizes } from '@/types/theme'
import { TypoProps } from '../Typo/Typo.interface'

export type TypographyScaleHeadline = 'level-1' | 'level-2' | 'level-3' | 'level-4' | 'level-5'

export interface HeadingProps extends TypoProps, React.HTMLProps<HTMLElement> {
  scale: TypographyScaleHeadline
  color?: ThemeColors
  bold?: boolean
  uppercase?: boolean
  showCursor?: boolean
  limitLines?: number
}

export interface HeadingFeaturedProps extends TypoProps, React.HTMLProps<HTMLElement> {
  color?: ThemeColors
  uppercase?: boolean
  limitLines?: number
  fixedSize?: ThemeFontSizes
  fixedMdSize?: boolean
}

export interface StyledHeadingFeaturedProps extends TypoProps, React.HTMLProps<HTMLElement> {
  fixedSize?: ThemeFontSizes
  fixedMdSize?: boolean
}
