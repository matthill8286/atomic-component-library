import React from 'react'
import { pulse, skeleton } from '@/styles/animation'
import { css, styled } from '@/styles/styled'

interface SkeletonBlockItemProps {
  width?: string
  height?: string
  marginTop?: string
  animated?: boolean
}

export const StyledSkeletonBlockItem = styled.div<SkeletonBlockItemProps>(
  ({ width, height, marginTop, animated = false }) => css`
    position: relative;
    background-color: rgba(0, 0, 0, 0.1);
    ${animated &&
    css`
      ${pulse};
    `}
    ${marginTop && `margin-top: ${marginTop};`}
  ${width && `width: ${width};`}
  ${height && `height: ${height};`}
  `,
)

export const SkeletonBlockItem: React.FC<SkeletonBlockItemProps> = (
  props = {
    width: 'auto',
  },
) => <StyledSkeletonBlockItem {...props} />
