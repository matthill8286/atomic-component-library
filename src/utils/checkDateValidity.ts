export const checkDateValidity = (startDate?: number, endDate?: number) => {
  // undefined Date means no time limits
  if ((!startDate && startDate != 0) || !endDate) {
    return true
  }
  const currentDate = Date.now()
  return startDate < currentDate && endDate > currentDate
}
