import React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { Like } from '@/components/Atoms/Like'
import { css, styled } from '@/styles/styled'
import { OtherLike } from '@matthill8286/atomic-icon-library'
import { ThemeColors } from '@/types'

export interface ProductLikes {
  likes?: string
  bold?: boolean
  color?: ThemeColors
}

const StyledProductLikes = styled.div(
  ({ theme }) => css`
    position: absolute;
    z-index: 2;
    bottom: calc(${theme.spacing.base.md} - 4px);
    left: calc(${theme.spacing.base.sm} + 1px);
  `,
)

export const ProductLikes: React.FC<ProductLikes> = ({ likes, bold = true, color = 'white', children }) => {
  if (!likes) {
    return null
  }

  return (
    <StyledProductLikes>
      <Like
        color={color}
        bold={bold}
        likes={likes}
        iconLeft={
          <Icon color={color}>
            <OtherLike />
          </Icon>
        }
      >
        {children}
      </Like>
    </StyledProductLikes>
  )
}
