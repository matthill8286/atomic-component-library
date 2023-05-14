import { css, styled } from '@/styles/styled'
import { Padding, Theme } from '@/types'
import { StyledTagWrapperProps } from './Tag.interface'
import { handlePadding } from '@/components/Atoms/Card/Card.styled'

export const StyledTagWrapper = styled.div<StyledTagWrapperProps>(
  ({ theme, hasLink, marginRight, color, padding }) => css`
    color: ${theme.color.grey5};
    ${!!padding && handlePadding(theme.spacing.base, padding as Padding)};
    border-color: ${!color ? theme.color.grey2 : theme.color[color]};
    border-width: 1px;
    border-radius: ${theme.dimension.borderRadius6};
    border-style: solid;
    width: fit-content;
    margin-right: ${marginRight && theme.spacing.base.sm};
    margin-bottom: ${marginRight && theme.spacing.base.xs};
    ${hasLink && hoverStyle(theme)};
  `,
)
const hoverStyle = (theme: Theme) => css`
  &:hover {
    background-color: ${theme.color.grey1};
    cursor: pointer;
  }
`

export const StyledAnchorTag = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.grey5};
`
