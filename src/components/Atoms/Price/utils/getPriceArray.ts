export const getPriceArray = (amount: string): string[] => {
  return amount.includes('.') && !amount.includes('.00') // if containes dot but no decimals
    ? amount.split('.').map((v, i) => (i === 0 ? `${v}.` : v.length === 2 ? v : `${v}0`)) // split on dot, add dot to first item
    : [amount.replace('.00', '') + '.–'] // remove dot decimals and add .-
}
