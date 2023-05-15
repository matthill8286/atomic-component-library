import React, { MouseEvent, useContext } from 'react'
import { Button } from '@/components/Atoms/Button'
import { Icon } from '@/components/Atoms/Icon'
import { styled } from '@/styles/styled'
import { ThemeContext } from '@/styles/styled'
import { OtherArrow } from 'atomic-icon-library'
import { Theme } from '@/types/theme'

interface BackToTopProps {
  visible?: 'VISIBLE' | 'TRANSPARENT' | 'HIDDEN'
  onClick?: (e: MouseEvent<Element, MouseEvent>) => void
}

interface StyledBackToTopProps {
  visible?: 'VISIBLE' | 'TRANSPARENT' | 'HIDDEN'
}

const StyledIcon = styled(Icon)`
  padding: 0;
  justify-content: center;
`

const StyledBackToTop = styled(Button)<StyledBackToTopProps>`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.base.md};
  top: auto;
  right: ${({ theme }) => theme.spacing.base.md};
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: ${({ visible }) => (visible === 'VISIBLE' ? '1' : '0.5')};
  display: ${({ visible }) => (visible === 'HIDDEN' ? 'none' : 'inherit')};
  z-index: 5;
  transform: ${({ visible }) =>
    visible === 'VISIBLE' || visible === 'TRANSPARENT'
      ? 'transform: translateX(0);'
      : 'transform: translateX(calc(100% + 30px));'};
  ${({ visible }) =>
    visible === 'TRANSPARENT'
      ? `
        &:hover{
            opacity: 1;
        }`
      : '0.5'}
  &:focus,
  &:active {
    outline: none;
    border: none;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.dimension.elevationLevel1};
  }
`

export const BackToTop: React.FC<BackToTopProps> = ({ visible, onClick, ...otherProps }) => {
  const { button } = useContext(ThemeContext) as Theme

  const smoothScroll = (e) => {
    window.scroll({ top: 0, behavior: 'smooth' })
    if (onClick) {
      onClick(e)
    }
  }
  return (
    <StyledBackToTop
      actionType="prominent"
      round={button.isRound}
      squared
      size="sm"
      aria-label="Back to top"
      onClick={smoothScroll}
      visible={visible}
      {...otherProps}
    >
      <StyledIcon rotate={270}>
        <OtherArrow width={24} height={24} fill="white" />
      </StyledIcon>
    </StyledBackToTop>
  )
}
