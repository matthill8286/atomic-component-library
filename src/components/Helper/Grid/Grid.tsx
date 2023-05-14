import React, { FunctionComponent } from 'react'
import { media } from '@/styles/media'
import { css, styled } from '@/styles/styled'
import { fixedColumnValues, gridMargins } from './constants'
import { GridProps, StyledGridProps } from './Grid.interface'

export const handleGridPadding = (noPadding: boolean) => {
  if (noPadding) {
    return css`
      padding: 0;
    `
  } else {
    return css`
      padding: 0 ${gridMargins.xs}px;
      ${media.sm} {
        padding: 0 ${gridMargins.sm}px;
      }
      ${media.md} {
        padding: 0 ${gridMargins.md}px;
      }
      ${media.lg} {
        padding: 0 ${gridMargins.lg}px;
      }
      ${media.xl} {
        padding: 0 ${gridMargins.xl}px;
      }
    `
  }
}

const StyledGrid = styled.div<StyledGridProps>`
  box-sizing: border-box;
  margin: 0 auto;
  ${({ fullWidth }) => !fullWidth && `max-width: 1472px;`};
  ${({ noPadding }) => handleGridPadding(!!noPadding)}

  ${({ align }) => {
    if (align === 'left') {
      return `
    margin-right: auto;
    margin-left: 0;
  `
    }
    if (align === 'right') {
      return `
    margin-left: auto;
    margin-right: 0;
  `
    }
  }}
  ${({ fixedColumnWidth }) =>
    fixedColumnWidth &&
    css`
      width: ${fixedColumnValues.xs.totalWidth}px;
      ${media.sm} {
        width: ${fixedColumnValues.sm.totalWidth}px;
      }
      ${media.md} {
        width: ${fixedColumnValues.md.totalWidth}px;
      }
      ${media.lg} {
        width: ${fixedColumnValues.lg.totalWidth}px;
      }
      ${media.xl} {
        width: ${fixedColumnValues.xl.totalWidth}px;
      }
    `}
`

export const Grid: FunctionComponent<GridProps> = ({ tag = 'div', fullWidth = false, ...rest }) => {
  return <StyledGrid as={tag} fullWidth={fullWidth} {...rest} />
}
