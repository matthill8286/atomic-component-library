import * as React from 'react'
import { styled } from '@/styles/styled'

export interface ProgressBarProps {
  value: number
  max?: number
  small?: boolean
}

export interface StyledProgressProps {
  isSmall: boolean
}

const StyledProgressBar = styled.progress<StyledProgressProps>`
  display: inline-block;
  appearance: none;
  position: relative;
  height: ${({ isSmall }) => (isSmall ? '4px' : '15px')};
  border: none;
  background: ${({ theme }) => theme.color.grey2};
  background-size: auto;
  width: 100%;
  overflow: hidden;
  color: ${({ theme }) => theme.color.primary};

  &::-webkit-progress-value {
    background: ${({ theme }) => theme.color.primary};
  }

  &::-webkit-progress-bar {
    background: ${({ theme }) => theme.color.grey2};
  }

  &::-moz-progress-bar {
    background: ${({ theme }) => theme.color.primary};
  }

  &::-ms-fill {
    background: ${({ theme }) => theme.color.primary};
  }
`

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  small = false,
  ...otherProps
}): JSX.Element => <StyledProgressBar max={max} value={value} isSmall={small} {...otherProps} />
