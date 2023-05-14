import { media, styled } from '@/styles'

interface StyledContainerProps {
  isOpen: boolean
}

export const StyledContainer = styled.div<StyledContainerProps>`
  position: fixed;
  top: 0;
  right: 100%;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: 100;
  transition: all 0s 0.2s ease-out;
  ${({ isOpen }) =>
    isOpen
      ? `
    right: 0;
    transition: right 0s ease-out;
  `
      : ''}
`

interface StyledBackgroundProps {
  isOpen: boolean
}

export const StyledBackground = styled.div<StyledBackgroundProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.2s ease-out;
  background-color: rgba(0, 0, 0, 0.7);
  ${({ isOpen }) =>
    isOpen
      ? `
      opacity: 1;
    `
      : ''}
`

export const drawerWidth = 315

interface StyledContentProps {
  fromRight: boolean
  wasLeft: boolean
  internalFromRight: boolean
  isOpen: boolean
}

export const StyledContent = styled.div<StyledContentProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: white;

  ${/* should animate */ ''}
  ${({ fromRight, wasLeft }) =>
    (wasLeft && !fromRight) || (!wasLeft && fromRight)
      ? `
    transition: transform 0.2s ease-out;
  `
      : ''}

  ${/* Open left */ ''}
  ${({ fromRight, wasLeft, internalFromRight, isOpen }) =>
    wasLeft && !internalFromRight && !fromRight && isOpen
      ? `
      left: 0;
      right: auto;
      transform: translateX(0);
  `
      : ''}

  ${/* Open right */ ''}
  ${({ fromRight, wasLeft, internalFromRight, isOpen }) =>
    !wasLeft && internalFromRight && fromRight && isOpen
      ? `
      right: 0;
      left: auto;
      transform: translateX(0);
  `
      : ''}

  ${/* Close left */ ''}
  ${({ fromRight, wasLeft, internalFromRight, isOpen }) =>
    (!wasLeft && !fromRight) || (wasLeft && !internalFromRight && !isOpen)
      ? `
      left: 0;
      right: auto;
      transform: translateX(-100%);
  `
      : ''}

  ${/* Close right */ ''}
  ${({ fromRight, wasLeft, internalFromRight, isOpen }) =>
    (wasLeft && fromRight) || (!wasLeft && internalFromRight && !isOpen)
      ? `
      right: 0;
      left: auto;
      transform: translateX(100%);
  `
      : ''}
`

export const StyledOverflowContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;
  padding: ${({ theme }) => `${theme.spacing.base.md} ${theme.spacing.base.sm}`};

  ${media.md} {
    padding: ${({ theme }) => `${theme.spacing.base.xl} ${theme.spacing.base.sm} 0`};
  }
`

export const StyledNavWrapper = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: flex-end;
  align-items: center;
`

export const StyledCloseButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  float: right;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: ${({ theme }) => `${theme.spacing.base.sm} 0 ${theme.spacing.base.sm} ${theme.spacing.base.sm}`};

  :active {
    outline: none;
  }
`
