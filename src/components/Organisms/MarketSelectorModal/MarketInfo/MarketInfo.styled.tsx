import { Button } from '@/components/Atoms/Button'
import { media } from '@/styles/media'
import { css, styled } from '@/styles/styled'

interface StyledMarketInfoProps {
  showBottomBorder?: boolean
}

export const StyledDistanceBadge = styled.span(
  ({ theme }) => css`
    background: ${theme.color.primary};
    border-radius: ${theme.dimension.borderRadius2};
    color: ${theme.color.white};
    font-size: ${theme.font.size.xxs};
    font-family: ${theme.font.family.default};
    padding: 0 ${theme.spacing.base.xs};
    position: relative;
    top: -3px;
    margin-right: ${theme.spacing.base.xxs};
  `
)

export const StyledMarketInfo = styled.div<StyledMarketInfoProps>(({ showBottomBorder, theme }) =>
  showBottomBorder
    ? css`
        border-bottom: 1px solid ${theme.color.grey2};
        margin-bottom: ${theme.spacing.base.lg};
      `
    : ''
)

export const StyledMarketInfoHeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.md} {
    flex-direction: row;
  }
`

export const StyledMarketInfoRow = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.spacing.base.sm} 0;

    ${media.md} {
      flex-direction: row;
      padding: ${theme.spacing.base.sm} 0 ${theme.spacing.base.xl};
    }
  `
)

export const StyledButton = styled(Button)`
  align-self: flex-start;
  max-width: inherit;
  width: 100%;
  margin: ${({ theme }) => theme.spacing.base.sm} 0;

  ${media.md} {
    max-width: 300px;
    flex-direction: row;
    margin: 0;
  }
`

export const StyledLabelParent = styled.div`
  > label {
    height: auto;
    margin-top: ${({ theme }) => theme.spacing.base.sm};
    margin-bottom: ${({ theme }) => theme.spacing.base.md};
  }
  ${media.md} {
    > label {
      margin-top: ${({ theme }) => theme.spacing.base.xs};
      margin-bottom: ${({ theme }) => theme.spacing.base.sm};
    }
  }
`
