import { ThemeFontSizes } from '@/types'

export type ServicesVariant = 'light' | 'dark'

export interface ServicesItemProps {
  withOverline?: boolean
  title?: string
  number?: string
  description?: string
  variant: ServicesVariant
  backgroundImage?: string
  limitLines?: number
  fixedSize?: ThemeFontSizes
}
