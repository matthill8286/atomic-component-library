import { ThemeColors } from '@/types/theme'

export type FilterType = 'default' | 'selected' | 'active'

export interface FilterProps {
  type: FilterType
  label: string
  onClick: (event?: React.MouseEvent) => void
  onClear?: (event?: React.MouseEvent) => void
}

export type FilterBorderColor = {
  [key in FilterType]: ThemeColors
}
