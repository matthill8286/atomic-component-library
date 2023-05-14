export interface TimeDiff {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const getTimeDiff = (start: Date, end: Date): TimeDiff => {
  const diffInSeconds = Math.floor((end.getTime() - start.getTime()) / 1000)
  if (diffInSeconds <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
  return {
    days: Math.floor(diffInSeconds / 86400),
    hours: Math.floor((diffInSeconds / 3600) % 24),
    minutes: Math.floor((diffInSeconds / 60) % 60),
    seconds: Math.floor(diffInSeconds % 60),
  }
}
