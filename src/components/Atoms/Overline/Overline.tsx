import * as React from 'react'

export interface IDivider {
  className?: string
  width?: string
}

export const Overline = ({ className }: IDivider) => <div className={`the-overline ${className || ``}`} />
