import { Button } from '@/components/Atoms/Button'
import { CopyText } from '@/components/Atoms/Typography'
import { Icon } from '@/components/Atoms/Icon'
import { Input } from '@/components/Atoms/Input'
import { media } from '@/styles/media'
import { css, styled } from '@/styles/styled'
import type { ReactElement, ReactNode } from 'react'

export const FlexItem = styled.div<{
  display?: string
  align?: string
  maxWidth?: string
  children?: ReactNode | ReactElement
}>`
  flex: 1 1 auto;
  flex-direction: column;
  display: ${({ display }) => display || 'inherit'};
  align-items: flex-start;
  ${media.md} {
    align-items: ${({ align }) => align || 'inherit'};
    max-width: ${({ maxWidth }) => maxWidth || 'auto'};
  }
`

export const CopyTextCentralized = styled(CopyText)`
  margin-left: auto;
  margin-right: auto;
`

export const SVGCentralized = styled(Icon)`
  & svg {
    margin-left: auto;
    margin-right: auto;
  }
`

export const InitialStateWrapper = styled.div`
  max-width: 390px;
  margin-left: auto;
  margin-right: auto;
`

export const MainWrapper = styled.div<{ fullWidth?: boolean }>`
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '400px')};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.base.xs} 0;
  ${media.md} {
    max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '650px')};
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }) => `${theme.spacing.base.xl} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.color.grey2};

  &:last-child {
    border-bottom: none;
  }
`

export const Badge = styled.span(
  ({ theme }) => css`
    position: relative;
    top: -3px;
    margin-right: ${theme.spacing.base.xs};
    padding: 0 ${theme.spacing.base.xs};
    background: ${theme.color.primary};
    border-radius: ${theme.dimension.borderRadius2};
    color: ${theme.color.white};
    font-family: ${theme.font.family.default};
    font-size: ${theme.font.size.xxs};
  `,
)

export const SInput = styled(Input)`
  & input {
    &::placeholder {
      opacity: 1;
    }
  }

  ${Icon} {
    cursor: pointer;
  }
`

export const SSearchWrapper = styled.div<{ hasConsent: boolean }>`
  position: relative;
  min-height: ${({ hasConsent }) => (hasConsent ? '278px' : 'auto')};
`

export const ActionButton = styled(Button)`
  max-width: inherit;
  width: 100%;

  ${media.md} {
    width: auto;
    max-width: 300px;
    margin: 0;
  }
`
