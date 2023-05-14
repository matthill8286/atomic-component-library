import * as React from 'react'

export const convertPrice = (
  amount: number | string | null | undefined,
  currency = 'EUR',
  freeLabel: React.ReactNode | string | React.ReactElement,
  showPlus = true,
  locale = 'de-DE',
): JSX.Element | null => {
  if (typeof amount === 'undefined' || amount === null) {
    return null
  }

  let price: JSX.Element
  if (amount === 0 || amount === '0' || isNaN(amount as number)) {
    price = <span>{freeLabel}</span>
  } else {
    price = (
      <span>
        {showPlus ? '+ ' : ''}
        {new Intl.NumberFormat(locale, {
          style: 'currency',
          currency,
        }).format(amount as number)}
      </span>
    )
  }
  return price
}
