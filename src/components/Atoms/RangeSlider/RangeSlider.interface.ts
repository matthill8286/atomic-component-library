import { Props as RheostatProps } from 'rheostat'
import { BoxDimensions, Elevation } from '@/types'

export interface RangeSliderProps extends RheostatProps {
  className?: string
  margin?: BoxDimensions
  padding?: BoxDimensions
  buttonsElevation?: Elevation
  min: number
  max: number
  values: number[]
  unitMasked?: string
  searchParamsStr?: string | null
  unit?: string
  errorMessage: string
  disabled?: boolean
  onChange: (state: { min: number; max: number; values: number[]; changeMethod: 'text_input' | 'slider' }) => void
}
