import React from 'react'
import { ThemeColors } from '@/types/theme'
import { TypoProps } from '../Typo/Typo.interface'

export interface CopyTextProps extends TypoProps, React.HTMLProps<HTMLElement> {
  withMargins?: boolean
  color?: ThemeColors
  bold?: boolean
  tag?: keyof JSX.IntrinsicElements
}
