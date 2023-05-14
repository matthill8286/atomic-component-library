import { Color } from 'csstype'
import { FlexAlignItemsOptions } from '@/components/Helper'
import { ThemeColors, ThemeFontWeights } from '@/types'

export interface ShowMoreProps {
  lineHeight: number
  numOfLines: number
  showMoreText: string
  showLessText: string
  labelAlignment?: FlexAlignItemsOptions
  labelNoLineHeight?: boolean
  noShowLess?: boolean
  fadeOutHeight?: number
  fadeOutBackgroundColor?: Color
  fontColor?: ThemeColors
  fontSize?: number
  fontWeight?: ThemeFontWeights
  padding?: number
  loading?: boolean
}

export interface WrapperProps {
  isCollapsed: boolean
  visibleHeight: number
}

export type LabelWrapperProps = Pick<
  ShowMoreProps,
  'labelAlignment' | 'fontColor' | 'fontSize' | 'fontWeight' | 'padding' | 'lineHeight'
>

export type FadeOutOverlayProps = Pick<ShowMoreProps, 'fadeOutHeight' | 'fadeOutBackgroundColor'>
