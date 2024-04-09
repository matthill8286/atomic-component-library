import { css, styled } from '@/styles/styled'
import { StyledProductTileWrapperProps } from './LazyProductCarousel.interface'

export const StyledTileWrapper = styled.div<StyledProductTileWrapperProps>`
  outline: none;
  height: 100%;
  padding: ${({ theme }) => `${theme.spacing.base.sm} 0 ${theme.spacing.base.sm};`};
  padding-top: ${({ theme, withLabels }) =>
    withLabels ? theme.spacing.base.sm : theme.spacing.base.xs};
`

export const ClippingWrapper = styled.div`
  margin-top: -15px;
  padding-top: 15px;

  ${({ hideLeft }: { hideLeft: boolean }) =>
    hideLeft &&
    css`
      clip-path: inset(0 -10000px -100px 0);
    `}
`

export const StyledHeading = styled.div`
  h1,
  h2,
  h3,
  h4 {
    margin-left: 0;
    margin-right: 0;
    color: ${({ theme }) => theme.color.primary};
  }
`
