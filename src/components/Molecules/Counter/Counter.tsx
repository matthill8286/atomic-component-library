import React from 'react'
import { useWindowDimensions } from '@/components/Helper/useWindowDimensions'
import { breakpoints } from '@/styles/sc-vars-global'
import { styled } from '@/styles/styled'
import { CounterProps, CounterSize } from './Counter.interface'
import { CounterItem } from './CounterItem'

const StyledCounter = styled.div<{ size: CounterSize }>(
  ({ size, theme }) => `
  display: flex;
  & > div:not(:last-child) {
    margin-right: ${size === 'sm' ? theme.spacing.base.sm : theme.spacing.base.md};
  }
`,
)

export const Counter: React.FC<CounterProps> = ({
  days,
  hours,
  minutes,
  seconds,
  maxDaysRange = 365,
  showSeconds = false,
  maxSize = 'lg',
  colors,
  outline,
  lastDayShowSecondsHideDays,
  loading,
  ...otherProps
}): JSX.Element => {
  const { breakpoint: currentBreakpoint } = useWindowDimensions()
  const size = currentBreakpoint < breakpoints.sm ? 'sm' : maxSize

  const showCounters = () => {
    // last day and small device
    if (days === 0 && currentBreakpoint < breakpoints.sm) {
      return { showDaysCounter: false, showSecondsCounter: true }
    }
    const showDaysCounter = days > 0 || lastDayShowSecondsHideDays === undefined ? true : !lastDayShowSecondsHideDays
    const showSecondsCounter =
      currentBreakpoint < breakpoints.sm ? !showDaysCounter : showSeconds || (days === 0 && lastDayShowSecondsHideDays)
    return { showDaysCounter, showSecondsCounter }
  }

  const { showDaysCounter, showSecondsCounter } = showCounters()

  return (
    <StyledCounter size={size} {...otherProps}>
      {showDaysCounter && (
        <CounterItem
          centerValue={days}
          label="Tage"
          maxValue={maxDaysRange}
          size={size}
          colors={colors}
          outline={outline}
          loading={loading}
        />
      )}
      <CounterItem
        centerValue={hours}
        label="Stunden"
        maxValue={24}
        size={size}
        colors={colors}
        outline={outline}
        loading={loading}
      />
      <CounterItem
        centerValue={minutes}
        label="Minuten"
        maxValue={60}
        size={size}
        colors={colors}
        outline={outline}
        loading={loading}
      />
      {showSecondsCounter && (
        <CounterItem
          centerValue={seconds}
          label="Sekunden"
          maxValue={60}
          size={size}
          colors={colors}
          outline={outline}
          loading={loading}
        />
      )}
    </StyledCounter>
  )
}
