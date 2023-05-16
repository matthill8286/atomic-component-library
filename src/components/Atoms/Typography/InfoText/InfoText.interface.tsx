import React from 'react'
import { ThemeColors } from '@/types/theme'
import { TypoProps } from '../Typo/Typo.interface'

export type TypographyScaleInfo = 'small' | 'small-highlighted' | 'extra-small'

export interface InfoTextProps extends TypoProps, React.HTMLProps<HTMLElement> {
  scale?: TypographyScaleInfo
  color?: ThemeColors
}
