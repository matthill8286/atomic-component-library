import React, { FunctionComponent } from 'react'
import { StyledCell } from './Cell.styled'
import { CellProps, OffsetProps } from './Grid.interface'

export const Cell: FunctionComponent<CellProps> = ({ tag = 'div', children, ...rest }) => (
  <StyledCell as={tag} {...rest}>
    {children}
  </StyledCell>
)

export const Offset: FunctionComponent<OffsetProps> = ({ tag = 'div', ...rest }) => {
  let offsetProps: Omit<OffsetProps, 'tag' | 'children'>

  // According to the unit tests the Offset component defaulted to display: none if no props are given
  if (rest.columns) {
    offsetProps = rest
  } else {
    offsetProps = {
      ...rest,
      colsXs: rest.colsXs || 0,
      colsSm: rest.colsSm || 0,
      colsMd: rest.colsMd || 0,
      colsLg: rest.colsLg || 0,
      colsXl: rest.colsXl || 0,
    }
  }
  return <StyledCell as={tag} {...offsetProps} />
}
