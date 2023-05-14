import React from 'react'
import { rotateForward } from '@/styles/animation'
import { styled } from '@/styles/styled'

export type LoadingIndicatorColor = 'white' | 'black' | 'primary'

export interface StyledLoadingIndicatorProps {
  isVisible: boolean
  size: number
  barWidth: number
  color: LoadingIndicatorColor
}

export interface LoadingIndicatorProps {
  isVisible: boolean
  size?: number
  barWidth?: number
  color?: LoadingIndicatorColor
}

const StyledLoadingWrapper = styled.div<StyledLoadingIndicatorProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: ${({ size }) => size * 0.1}px solid;
    border-radius: 50%;
    animation: ${rotateForward} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme, color }) => theme.color[color]} transparent transparent transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`

export const StyledLoadingWrapperAlternate = styled.ul<StyledLoadingIndicatorProps>`
  position: absolute;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  margin: 0 auto;
  padding: 0;
  justify-content: center;
  height: ${({ size }) => size * 0.3}px;
  li {
    list-style: none;
    width: ${({ barWidth }) => barWidth * 0.05}px;
    height: ${({ size }) => size * 0.3}px;
    margin: 0 3px;
    animation: animate 0.4s infinite alternate;
    background: ${({ theme, color }) => theme.color[color]};

    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
  }

  @keyframes animate {
    0% {
      transform: scaleY(1);
    }
    25% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(1);
    }
    75% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(1.7);
    }
  }
`

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  isVisible,
  size = 50,
  barWidth = 15,
  color = 'primary',
  ...otherProps
}) => {
  return (
    <StyledLoadingWrapper isVisible={isVisible} size={size} barWidth={barWidth} color={color} {...otherProps}>
      <div />
      <div />
      <div />
      <div />
    </StyledLoadingWrapper>
  )
}
