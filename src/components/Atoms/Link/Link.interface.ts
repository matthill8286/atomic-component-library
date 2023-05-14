import * as H from 'history'
import React, { ComponentType, MouseEvent, MouseEventHandler, ReactElement, ReactNode } from 'react'
import { ThemeColors, ThemeFontLineHeight, ThemeFontSizes } from '@/types/theme'
import { ButtonType } from '@/components/Atoms/Button'

export type LinkTarget = string | undefined

export type LinkHref = string | undefined

export interface WrappedRouterLinkProps {
  children: ReactNode
  className?: string
  onClick?: (e: MouseEvent<HTMLElement>) => void
  onMouseDown?: (e: MouseEvent) => void
  to?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LinkAs = string | JSX.IntrinsicElements | ComponentType<any>
export type LinkSize = 'small' | 'large'
type CursorType = 'initial' | 'pointer'

export interface LinkProps
  extends LinkRouterProps<HTMLAnchorElement | HTMLButtonElement>,
    React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
  bold?: boolean
  cursor?: CursorType
  color?: ThemeColors
  decorationColor?: ThemeColors
  fontSize?: ThemeFontSizes
  iconLeft?: ReactElement
  iconRight?: ReactElement
  inline?: boolean
  lineHeight?: ThemeFontLineHeight
  scale?: LinkSize
  scrollOffset?: number
  smooth?: boolean
  underline?: boolean
  disabled?: boolean
  type?: ButtonType
  target?: LinkTarget
  href?: LinkHref
  branded?: boolean
  ariaLabel?: string
  isGrouped?: boolean
}

export interface LinkRouterProps<T> {
  to?: H.LocationDescriptor
  children?: React.ReactNode
  className?: string
  onClick?: MouseEventHandler<T>
}

export interface StyledLinkProps {
  color?: ThemeColors
  cursor?: CursorType
  hasIconLeft: boolean
  hasIconRight: boolean
  isBold: boolean
  isGrouped?: boolean
  isDisabled: boolean
  isInline: boolean
  isLarge: boolean
  isSmall: boolean
  isUnderlined?: boolean
  target?: string
  title?: string
}
