import React from 'react'
import { Typo } from '@/components/Atoms/Typography'
import { media } from '@/styles/media'
import { css, styled } from '@/styles/styled'

export interface StyledStrikeThroughProps {
  size?: string
}

export interface StrikeThroughProps {
  enabled?: boolean
  size?: string
}

export const StyledStrikePriceTypo = styled(Typo)<{ size: string; tag?: string }>`
  color: ${({ theme, color }) => color || theme.price.strikeInfo.color};
  ${({ theme, tag = 'span', size }) =>
    size === 'responsive'
      ? `
      font-size: ${theme.price.strikePrice[tag]['small']};
      
      ${media.lg} {
        font-size: ${theme.price.strikePrice[tag]['large']};
        top: -6px;
      }
    `
      : ``}
`

const StyledStrikeThrough = styled.div<StyledStrikeThroughProps>(
  ({ theme, size = 'large' }) => css`
    display: inline-flex;
    position: relative;
    white-space: nowrap;

    &:after {
      content: '';
      position: absolute;
      top: calc(50% - ${size === 'small' ? '1px' : '2px'});
      height: ${size === 'small' ? '1px' : '2px'};
      left: 0;
      border-top: ${size === 'small' ? '1px' : '2px'} solid ${theme.price.strikeInfo.color};
      width: 100%;
      pointer-events: none;
    }

    ${media.ie11} {
      display: inline-block;

      &:before {
        top: 50%;
      }
    }
  `,
)

export const StrikeThrough: React.FC<StrikeThroughProps> = ({ enabled, children, size }) => {
  if (!enabled) {
    return <>{children}</>
  }

  return <StyledStrikeThrough size={size}>{children}</StyledStrikeThrough>
}
