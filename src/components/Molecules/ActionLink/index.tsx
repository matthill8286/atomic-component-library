import React, { FC } from 'react'
import { Link, LinkProps } from '@/index'
import { ActionLinkProps } from './ActionLink.interface'

export const ActionLink: FC<ActionLinkProps> = ({ children, bold = false, ...baseLinkProps }) => {
  const linkProps: LinkProps = {
    ...baseLinkProps,
    scale: 'large',
    inline: true,
    underline: false,
    bold,
  }

  return <Link {...linkProps}>{children}</Link>
}

export type { QuickAction } from './ActionLink.interface'
