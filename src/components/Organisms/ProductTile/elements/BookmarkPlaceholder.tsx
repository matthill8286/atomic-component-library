import { styled, css } from '@/styles'

export const StyledBookmarkPlaceholder = styled.div(
  ({ theme }) => css`
    position: absolute;
    z-index: 5;
    display: flex;
    bottom: calc(${theme.spacing.base.sm} - 0.5px);
    right: calc(${theme.spacing.base.sm} + 1px);
  `,
)
