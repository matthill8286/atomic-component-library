import * as React from 'react'

export interface LabelProps {
  htmlFor: string
}

export const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return <label htmlFor={htmlFor}>{children}</label>
}
