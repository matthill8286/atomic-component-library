import React from 'react'
import { css, styled } from '@/styles/styled'
import { isdefaultTheme } from '@/utils/helper'
import { ThemeColors } from '@/types'

export interface TableHeadProps {
  children: React.ReactNode
  isMainTheme?: boolean
  isOutlineRequired?: boolean
  className?: string
  backgroundColor?: ThemeColors
  borderColor?: ThemeColors
}

const StyledTableHeadMedia = css<TableHeadProps>`
  ${({ isOutlineRequired, theme, backgroundColor = 'grey1', borderColor = 'grey2' }) => `
    ${isOutlineRequired ? `border: 1px solid ${theme.color[borderColor]}` : ''};
    background-color: ${theme.color[backgroundColor]};
    th:first-child {
      border-top-left-radius: ${theme.dimension.borderRadius2};
    }
    th:last-child {
      border-top-right-radius: ${theme.dimension.borderRadius2};
    }
  `}
`

const StyledTableHeadSaturn = css<TableHeadProps>`
  ${({ isOutlineRequired, theme, backgroundColor = 'grey2', borderColor = 'grey3' }) => `
      ${isOutlineRequired ? `border: 1px solid ${theme.color[borderColor]}` : ''};
      background-color: ${theme.color[backgroundColor]};
  `}
`

const StyledTableHead = styled.thead<TableHeadProps>`
  display: table-header-group;
  ${({ isMainTheme }) => (isMainTheme ? StyledTableHeadMedia : StyledTableHeadSaturn)}
`

export const TableHead: React.FC<TableHeadProps> = ({
  children,
  isOutlineRequired = false,
  className,
  backgroundColor,
  borderColor,
}) => {
  return (
    <StyledTableHead
      isMainTheme={isdefaultTheme()}
      isOutlineRequired={isOutlineRequired}
      className={className}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      {children}
    </StyledTableHead>
  )
}
