import { MouseEvent } from 'react'
import { LinkProps } from '../../Atoms/Link/Link.interface'
import { TranslatedTextType } from '../../../types'

export interface ActionLinkProps extends LinkProps {
  children: TranslatedTextType
}

export interface QuickAction {
  actionLabel: string
  href?: string
  to?: string
  target?: string
  onClick?: (e: MouseEvent<HTMLElement>) => void
}
