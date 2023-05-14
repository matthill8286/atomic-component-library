import React, { FunctionComponent, ReactNode, useEffect } from 'react'
import {
  StyledBackground,
  StyledContainer,
  StyledContent,
  StyledOverflowContainer,
  StyledCloseButton,
  StyledNavWrapper,
} from './Drawer.styled'
import { useDrawerHook } from './useDrawerHook'
import { Icon } from '@/components/Atoms/Icon'
import { OtherClose } from '@matthill8286/atomic-icon-library'

export interface DrawerProps {
  isOpen: boolean
  fromRight: boolean
  search: ReactNode | Element
  filter: ReactNode | Element
  children: ReactNode | Element
  onClose: () => void
}

const useKeyDown = (handler: (e: KeyboardEvent) => void) =>
  useEffect(() => {
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  })

export const Drawer: FunctionComponent<DrawerProps> = ({ children, search, filter, isOpen, fromRight, onClose }) => {
  const handleClose = (ev: React.MouseEvent | KeyboardEvent) => {
    ev.stopPropagation()
    onClose()
  }

  const closeOnEscape = (e: KeyboardEvent) =>
    // adding e.key check because of a chrome autocomplete bug
    e.key && e.key.startsWith('Esc') && handleClose(e)

  useKeyDown(closeOnEscape)

  // Without this clicking in the content div triggers onClick on the background div.
  const stopBubble = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const { contentElement, wasLeft, internalFromRight } = useDrawerHook({
    fromRight,
    isOpen,
  })

  return (
    <StyledContainer isOpen={isOpen} data-test="app-header-drawer">
      <StyledBackground isOpen={isOpen} onClick={handleClose}>
        <StyledContent
          wasLeft={wasLeft}
          fromRight={fromRight}
          isOpen={isOpen}
          internalFromRight={internalFromRight}
          onClick={stopBubble}
          ref={contentElement}
        >
          <StyledOverflowContainer>
            <StyledNavWrapper>
              {search}
              {filter}
              <StyledCloseButton onClick={handleClose} aria-label="close-menu">
                <Icon width={24} height={24}>
                  <OtherClose />
                </Icon>
              </StyledCloseButton>
            </StyledNavWrapper>
            {children}
          </StyledOverflowContainer>
        </StyledContent>
      </StyledBackground>
    </StyledContainer>
  )
}
