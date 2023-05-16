import * as React from 'react'
import { Counter } from './Counter'
import { useCounter } from './Counter.hook'
import { CounterAppearance, TimestampsProps } from './Counter.interface'

interface CounterWithTimerProps extends TimestampsProps, Omit<CounterAppearance, 'loading'> {}

export const CounterWithTimer: React.FC<CounterWithTimerProps> = ({
  from = new Date(),
  toUTC,
  ...rest
}): JSX.Element => {
  const { loading, timeDiffValues } = useCounter({ from, toUTC })
  return <Counter loading={loading} {...timeDiffValues} {...rest} />
}
