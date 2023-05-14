import React, { FunctionComponent } from 'react'
import { media } from '@/styles/media'
import { css, styled } from '@/styles/styled'
import { gutterWidth } from './constants'
import { RowProps, StyledRowProps } from './Grid.interface'

const handleRowMarginBottom = (noMargin: boolean) => {
  if (noMargin) {
    return css`
      margin-bottom: 0;
    `
  } else {
    return css`
      margin-bottom: ${gutterWidth.xs}px;
      ${media.sm} {
        margin-bottom: ${gutterWidth.sm}px;
      }
      ${media.md} {
        margin-bottom: ${gutterWidth.md}px;
      }
      ${media.lg} {
        margin-bottom: ${gutterWidth.lg}px;
      }
      ${media.xl} {
        margin-bottom: ${gutterWidth.xl}px;
      }
    `
  }
}

const StyledRow = styled.div<StyledRowProps>`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  margin: 0;
  ${({ noMargin }) => handleRowMarginBottom(!!noMargin)}

  @supports (display: grid) {
    display: grid;
    grid-gap: ${gutterWidth.xs}px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  ${media.sm} {
    @supports (display: grid) {
      grid-gap: ${gutterWidth.sm}px;
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
  }

  ${media.md} {
    @supports (display: grid) {
      grid-gap: ${gutterWidth.md}px;
    }
  }

  ${media.lg} {
    @supports (display: grid) {
      grid-gap: ${gutterWidth.lg}px;
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  ${media.xl} {
    @supports (display: grid) {
      grid-gap: ${gutterWidth.xl}px;
    }
  }
`

export const Row: FunctionComponent<RowProps> = ({ tag = 'div', children, ...rest }) => {
  return (
    <StyledRow as={tag} {...rest}>
      {children}
    </StyledRow>
  )
}
