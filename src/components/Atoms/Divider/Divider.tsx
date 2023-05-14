import * as React from 'react'
import { css, styled } from '@/styles/styled'
import { Size, ThemeColors } from '@/types/theme'
import { getSizeInPx } from '@/styles'

export interface DividerProps {
  color: ThemeColors
  height?: number | keyof Omit<Size, 'xxxs'>
}

const DefaultSize = 'xs'

const StyledHR = styled.hr<DividerProps>(
  ({ theme, color, height = DefaultSize }) => css`
    height: ${getSizeInPx(height, theme.spacing.base)};
    width: 100%;
    background: ${theme.color[color]};
    border-width: 0;
    margin: 0;
  `,
)

export const Divider: React.FC<DividerProps> = ({ color, height, ...otherProps }) => {
  return <StyledHR height={height} color={color} {...otherProps} />
}
