export interface CounterProps extends CounterValues, CounterAppearance {}

export type CounterSize = 'sm' | 'lg'

export interface CounterValues {
  days: number
  hours: number
  minutes: number
  seconds: number
}
export interface TimestampsProps {
  from?: Date
  toUTC?: string
}
export interface CounterAppearance {
  showSeconds?: boolean
  maxSize?: CounterSize
  colors?: CounterItemColors
  outline?: boolean
  lastDayShowSecondsHideDays?: boolean
  maxDaysRange?: number
  loading?: boolean
}

export interface CounterItemColors {
  fontColor?: string
  circleColor?: string
  progressColor?: string
  fill?: string
}
