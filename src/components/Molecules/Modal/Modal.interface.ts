import { ThemeColors } from '@/types'
import { ModalButtonGroupProps } from '@/components/Molecules/ModalButtonGroup'
import React from 'react'

export type ModalSize = 'xl' | 'lg' | 'md' | 'sm'
export type ModalPosition = 'center' | 'top' | 'bottom' | 'confirm'
export type ModalPaddingSize = 'md' | 'lg'

export interface ModalHeadingProps {
  children?: string | React.ReactNode
  color?: ThemeColors
}

export interface StyledModalHeaderProps {
  hasTitle?: boolean
}

export interface ModalProps extends ModalButtonGroupProps, ModalHeadingProps {
  contentBgColor?: ThemeColors
  children: React.ReactNode
  className?: string
  onClose?: () => void
  position?: ModalPosition
  size?: ModalSize
  canClose?: boolean
  animation?: string
  buttonAlignment?: 'space-between' | 'right' | 'center' | undefined
  title?: string | React.ReactNode
  paddingSize?: ModalPaddingSize
  withScrollableContent?: boolean
  hideCloseButton?: boolean
  isWhite?: boolean
}

export interface StyledModalInnerWrapperProps {
  contentBgColor?: ThemeColors
  size: ModalSize
  position: ModalPosition
  paddingSize: ModalPaddingSize
  withScrollableContent?: boolean
  animation?: string
}
