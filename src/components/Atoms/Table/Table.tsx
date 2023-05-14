import React from 'react'
import { media } from '@/styles/media'
import { css, styled } from '@/styles/styled'
import { isSaiyanTheme } from '@/utils/helper'
import { TranslatedText } from '@/types/global'

export interface TableProps {
  children: React.ReactNode
  layout?: string
  withBorderRadius?: boolean
  fullBorder?: boolean
  isScrollable?: boolean
  className?: string
  ariaLabel?: TranslatedText
}

const StyledScrollable = css`
  th,
  td {
    text-align: center !important;
  }

  ${media.maxSm} {
    th,
    td {
      min-width: 108px;
    }
  }
`

const StyledTable = styled.table<TableProps>`
  ${({ isScrollable }) => (isScrollable ? StyledScrollable : '')}
  ${({ layout, withBorderRadius, theme }) => `
    display: table;
    width: 100%;
    overflow: hidden;
    border-spacing: 0;
    border-collapse: collapse;
    table-layout: ${layout};
    border-radius: ${withBorderRadius ? theme.dimension.borderRadius2 : '0'};
  `}
`

export const StyledFixedTable = styled.div`
  position: absolute;
  th,
  tbody tr td:first-child {
    position: relative;
    z-index: 1;
    /* Box Shadow after first column */
    ::before {
      content: '';
      position: absolute;
      display: block;
      z-index: 1;
      left: 0;
      top: 0;
      height: 100%;
      width: 10px;
      background: linear-gradient(to right, rgba(0, 0, 0, 0.01) 0, transparent 100%);
    }
    ::after {
      content: '';
      position: absolute;
      display: block;
      z-index: 1;
      right: -10px;
      top: 0;
      height: 100%;
      width: 10px;
      background: linear-gradient(to right, rgba(0, 0, 0, 0.07) 0, transparent 100%);
    }
  }
  td,
  thead th {
    visibility: hidden;
  }
  thead th:first-child {
    visibility: visible;
  }
  tbody tr td:first-child {
    visibility: visible;
    background-color: white;
  }

  ${({ theme }) => `
    ${media.maxSm} {
      overflow-x: hidden;
      width: calc(100vw - ${theme.spacing.base.lg});
    }
  `};
`
export const StyledScrollTable = styled.div<{ isMainTheme: boolean }>`
  overflow-x: auto;
  thead {
    background: ${({ theme, isMainTheme }) => (isMainTheme ? theme.color.grey1 : theme.color.grey2)};
  }
  tbody td {
    position: relative;
  }
  tbody th {
    visibility: hidden;
  }
`

export const Table: React.FC<TableProps> = ({
  children,
  layout = 'auto',
  withBorderRadius = true,
  fullBorder = false,
  isScrollable = false,
  className,
  ariaLabel,
}) => {
  const TableElement: React.FC = () => (
    <StyledTable
      aria-label={ariaLabel}
      layout={layout}
      withBorderRadius={withBorderRadius}
      fullBorder={fullBorder}
      isScrollable={isScrollable}
      className={className}
    >
      {children}
    </StyledTable>
  )

  if (isScrollable) {
    return (
      <>
        <StyledFixedTable>
          <TableElement />
        </StyledFixedTable>
        <StyledScrollTable isMainTheme={isSaiyanTheme()}>
          <TableElement />
        </StyledScrollTable>
      </>
    )
  }
  return <TableElement />
}
