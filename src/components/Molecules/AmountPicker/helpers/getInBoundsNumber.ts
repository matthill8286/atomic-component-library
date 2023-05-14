export const getInBoundsNumber = (quantity: number, min: number, max: number): number => {
  return Math.min(Math.max(quantity, min), max)
}
