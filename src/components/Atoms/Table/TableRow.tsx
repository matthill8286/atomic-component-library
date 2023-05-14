import React from 'react'
import { media } from '@/styles'
import { css, styled } from '@/styles/styled'
import { ThemeColors } from '@/types'
export interface TableRowProps {
  children: React.ReactNode
  collapsible?: boolean
  isheadlineRow?: boolean
  verticalAlign?: 'top' | 'middle' | 'bottom'
  disableHover?: boolean
  className?: string
  hoverColor?: ThemeColors
}

const StyledCollapsible = css`
  ${media.maxSm} {
    border-bottom: ${({ theme }) => `1px solid ${theme.color.grey2}`};
    border-radius: ${({ theme }) => theme.dimension.borderRadius0};
    border-right: 0;
  }
`

const StyledTableRow = styled.tr<TableRowProps>`
  ${({ collapsible }) => collapsible && StyledCollapsible}
  ${({ disableHover, verticalAlign, theme, hoverColor = 'grey1' }) => `
    display: table-row;
    vertical-align: ${verticalAlign};
    text-align: center;
    ${media.md} {
      border: none;
      ${
        !disableHover
          ? `&:hover {
          cursor: pointer;
          background: ${theme.color[hoverColor]};
        }`
          : ''
      };
    }
  `}
`

export const TableRow: React.FC<TableRowProps> = ({
  children,
  collapsible = true,
  verticalAlign = 'middle',
  disableHover = false,
  className,
  hoverColor,
}) => {
  return (
    <StyledTableRow
      collapsible={collapsible}
      verticalAlign={verticalAlign}
      disableHover={disableHover}
      className={className}
      hoverColor={hoverColor}
    >
      {children}
    </StyledTableRow>
  )
}
