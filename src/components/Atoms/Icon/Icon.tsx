import { FlexAlignItemsOptions } from '@/components/Helper/FlexBox'
import { padding } from '@/styles/sc-shared-functions'
import { css, styled } from '@/styles/styled'
import { PaddingProps, Size, ThemeColors } from '@/types'

export type RotationValues = 0 | 45 | 90 | 180 | 270 | -45 | -90 | -180 | -270

export interface IconProps {
  rotate?: RotationValues
  color?: ThemeColors
  withBorder?: boolean
  padding?: PaddingProps['padding']

  width?: number | keyof Omit<Size, 'xxxs'>
  height?: number | keyof Omit<Size, 'xxxs'>
  animate?: boolean
  display?: string
  alignSelf?: FlexAlignItemsOptions
}

const DefaultSize = '25px'

export const Icon = styled.div<IconProps>(
  ({ theme, color, width, height, rotate = 0, animate = false, display = 'flex', alignSelf, withBorder }) => css`
    ${display && `display: ${display};`};
    ${padding};
    ${alignSelf && `align-self: ${alignSelf};`};
    ${withBorder &&
    `border: 2px solid ${theme.color.grey2};
        border-radius: 50%;
        padding: ${theme.spacing.base.xs};`}
    svg {
      width: ${width ? getSizeInPx(width, theme.spacing.base) : DefaultSize};
      height: ${height ? getSizeInPx(height, theme.spacing.base) : DefaultSize};
      transform: rotate(${rotate}deg);
      fill: ${color ? theme.color[color] : 'currentColor'};
      ${animate &&
      css`
        transition: transform 0.3s ease-in-out;
      `};
    }
    svg g,
    svg p {
      fill: ${color ? theme.color[color] : 'currentColor'};
    }
  `,
)

const getSizeInPx = (size: number | keyof Omit<Size, 'xxxs'>, themeSizes: Omit<Size, 'xxxs'>): string => {
  if (typeof size === 'number') {
    return `${size}px`
  } else {
    return themeSizes[size] || `${DefaultSize}px`
  }
}
