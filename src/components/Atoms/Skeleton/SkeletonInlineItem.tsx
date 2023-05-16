import React from 'react'
import { pulse, skeleton } from '@/styles/animation'
import { css, styled } from '@/styles/styled'
import { Typo } from '../Typography'
import { TypoProps } from '../Typography/Typo/Typo.interface'

interface SkeletonInlineItemProps extends TypoProps {
  text?: string
  length?: number
  minLength?: number
  newLine?: boolean
  animated?: boolean
}

export const StyledSkeletonInlineItem = styled(Typo)<SkeletonInlineItemProps>`
  ${({ animated = false }) =>
    animated &&
    css`
      ${pulse};
    `}
  ${({ tag, newLine }) => !tag && `display: ${newLine ? 'table' : 'inline-block'};`}
  color: rgba(0,0,0,0);
  background-color: rgba(0, 0, 0, 0.1);
  width: unset;
  &::before {
    content: '';
    display: block;
  }
`

export const SkeletonInlineItem: React.FC<SkeletonInlineItemProps> = ({ length = 12, text, ...props }) => (
  <StyledSkeletonInlineItem {...props}>{text || 'a'.repeat(length)}</StyledSkeletonInlineItem>
)
