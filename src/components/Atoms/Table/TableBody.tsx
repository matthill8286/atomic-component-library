import React from 'react'
import { styled } from '@/styles/styled'
import { ThemeColors } from '@/types'
export interface TableBodyProps {
  children: React.ReactNode
  fullBorder?: boolean
  className?: string
  topBorder?: boolean
  backgroundColor?: ThemeColors
  borderColor?: ThemeColors
}

const StyledTableBody = styled.tbody<TableBodyProps>`
  ${({ fullBorder, topBorder, theme, borderColor = 'grey2', backgroundColor = 'white' }) => `
    display: table-row-group;
    background-color: ${theme.color[backgroundColor]};
    ${topBorder && `border-top: 1px solid ${theme.color[borderColor]};`}
    ${
      fullBorder &&
      `
        tr td {
          border: 1px solid ${theme.color[borderColor]};
        }
        tr:last-child {
          td:first-child {
            border-bottom-left-radius: ${theme.dimension.borderRadius2};
          }
          td:last-child {
            border-bottom-right-radius: ${theme.dimension.borderRadius2};
          }
        }
      `
    }
  `}
`

export const TableBody: React.FC<TableBodyProps> = ({
  children,
  fullBorder = false,
  className,
  topBorder = false,
  borderColor,
  backgroundColor,
}) => {
  return (
    <StyledTableBody
      fullBorder={fullBorder}
      topBorder={topBorder}
      className={className}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      {children}
    </StyledTableBody>
  )
}
