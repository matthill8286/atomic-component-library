import * as React from 'react'
import { useInterval } from '@/utils'
import { TimestampsProps } from './Counter.interface'
import { getTimeDiff, TimeDiff } from './getTimeDiff'

export function useCounter({ from = new Date(), toUTC }: TimestampsProps) {
  const initToDate = toUTC ? new Date(parseDate(toUTC)) : new Date(new Date().getTime())

  const [timeDiffValues, setTimeDiffValues] = React.useState<TimeDiff>(getTimeDiff(from, initToDate))
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    if (toUTC) {
      setTimeDiffValues(getTimeDiff(from, new Date(parseDate(toUTC))))
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [toUTC])

  useInterval(() => {
    if (toUTC) {
      setTimeDiffValues(getTimeDiff(from, new Date(parseDate(toUTC))))
    }
  }, 1000)
  return { timeDiffValues, loading }
}

function parseDate(date: string) {
  const parsed = Date.parse(date)
  if (!isNaN(parsed)) {
    return parsed
  }

  return Date.parse(date.replace(/-/g, '/').replace(/[a-z]+/gi, ' '))
}
