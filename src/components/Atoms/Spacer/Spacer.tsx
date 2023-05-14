import React from 'react'
import { media } from '@/styles/media'
import { css, styled } from '@/styles/styled'

export type SpacerDirection = 'horizontal' | 'vertical'

interface SpacerProps {
  size: string
  direction?: SpacerDirection
}

interface StyledSpacerProps {
  size: string
  direction: SpacerDirection
}

const StyledSpacer = styled.div<StyledSpacerProps>`
  display: block;
  width: 100%;

  ${({ direction, size, theme }) =>
    direction === 'vertical'
      ? css`
          width: ${theme.spacing.baseMobile[size]};
        `
      : css`
          height: ${theme.spacing.baseMobile[size]};

          ${media.md} {
            height: ${theme.spacing.base[size]};
          }
        `}
`

export const Spacer: React.FC<SpacerProps> = ({ size, direction = 'horizontal', ...otherProps }) => {
  return size ? <StyledSpacer size={size} direction={direction} {...otherProps} /> : null
}
