import React from 'react'
import { Tag } from '@/components/Atoms/Tag'
import { css, styled } from '@/styles/styled'
import { ThemeColors } from '@/types'

export interface ProductFeatured {
  featuredLabel?: string
  loading: boolean
  color?: ThemeColors
}

const StyledProductFeatured = styled.div(
  ({ theme }) => css`
    position: absolute;
    z-index: 20;
    display: flex;
    padding: 0 ${theme.spacing.base.sm};
    bottom: ${theme.spacing.base.sm};
    right: 0;
  `
)

export const ProductFeatured: React.FC<ProductFeatured> = ({
  featuredLabel,
  color = 'white',
  loading,
}) => {
  if (!featuredLabel) {
    return null
  }
  return (
    <StyledProductFeatured>
      <Tag weight="bold" padding={{ left: 'lg', right: 'lg' }} text={featuredLabel} color="white" />
    </StyledProductFeatured>
  )
}
