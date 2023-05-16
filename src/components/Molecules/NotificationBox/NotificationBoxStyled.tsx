import { Button } from '@/components/Atoms/Button'
import { Icon } from '@/components/Atoms/Icon'
import { fadingIn, fadingOut, shaking } from '@/styles/animation'
import { media } from '@/styles/media'
import { margin } from '@/styles/sc-shared-functions'
import { css, styled } from '@/styles/styled'
import { MarginProps } from '@/types'
import { ButtonLayout, NotificationBoxProps } from './NotificationBox.interface'

export const StyledNotificationHeadline = styled.div`
  display: flex;
  align-items: center;

  ${Icon} {
    margin-right: ${({ theme }) => theme.spacing.base.xs};

    > svg {
      position: relative;

      ${media.md} {
        width: 24px;
        height: 24px;
      }
    }
  }
`

export const StyledCopyTextDiv = styled.div<MarginProps>`
  margin-top: ${({ theme }) => theme.spacing.base.xs};
  ${margin}

  &:first-child {
    &,
    > * {
      margin-top: 0;
    }
  }

  &:last-child > * {
    margin-bottom: 0;
  }
`

export const StyledButton = styled(Button)``

const buttonRowCss = css`
  flex-direction: row;

  & ${StyledButton}:first-child {
    margin-right: ${({ theme }) => theme.spacing.base.xs};
  }

  & ${StyledButton}:last-child {
    margin-left: ${({ theme }) => theme.spacing.base.xs};
  }
`

const buttonColumnCss = css`
  & ${StyledButton}:nth-child(n + 2) {
    margin-top: ${({ theme }) => theme.spacing.base.xs};
  }
`

export const StyledButtonDiv = styled.div<{ buttonLayout: ButtonLayout }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.base.md};

  ${({ buttonLayout }) => (buttonLayout === 'row' ? buttonRowCss : buttonColumnCss)}
`

export const StyledLinkDiv = styled.div<{ alignLinks: 'center' | 'left' }>`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;
  font-size: ${({ theme }) => theme.font.size.sm};

  ${StyledButtonDiv} + & {
    margin-top: ${({ theme }) => theme.spacing.base.sm};
  }

  ${({ alignLinks }) =>
    alignLinks === 'center' &&
    css`
      > a,
      button {
        margin: 0 auto;
      }
    `}
`

export const StyledNotificationClose = styled.button`
  appearance: none;
  border: 0;
  padding: 0;
  margin: 0;
  border-radius: 0;
  background: transparent;
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
  z-index: 1;
  width: ${({ theme }) => theme.spacing.base.lg};
  height: ${({ theme }) => theme.spacing.base.lg};
  display: flex;
  place-items: center;
  place-content: center;

  &:focus {
    outline: 0;
    user-focus: none;
  }
`

export const StyledNotificationboxWrapper = styled.div<NotificationBoxProps>`
  ${({ rootPosition }) => `position: ` + (rootPosition ? `${rootPosition};` : `absolute`) + `;`}

  z-index: 1;

  ${media.sm} {
    max-width: ${({ theme }) => 64 * theme.defaultSpacing}px;
    ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  }
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}

  ${({ animation, title, tooltip }) => [
    animation === 'fadeIn' && fadingIn,
    animation === 'fadeOut' && fadingOut,
    animation === 'shake' && shaking,

    !title &&
      css`
        p:first-child {
          margin-top: 0;
        }
      `,

    tooltip &&
      css`
        top: ${tooltip.top}px;
        left: ${tooltip.left}px;
        width: ${tooltip.width ? `${tooltip.width}px` : 'inherit'};
      `,
  ]}
`

export const StyledArrow = styled.span<{ arrowLeft?: number; arrowPosition: string[] }>`
  position: absolute;
  background-color: ${({ theme }) => theme.color.grey5};
  border-radius: ${({ theme }) => theme.dimension.borderRadius1};
  border: none;
  height: 20px;
  margin: 0;
  padding: 0;
  transform: rotate(45deg);
  width: 20px;

  ${({ arrowLeft, arrowPosition, theme }) => [
    arrowPosition[0] === 'top' ? `top: -${theme.spacing.base.xs};` : `bottom: -${theme.spacing.base.xs};`,
    arrowPosition[1] === 'left' ? `left: ${theme.spacing.base.md};` : `right: ${theme.spacing.base.md};`,
    arrowLeft && `left: ${arrowLeft}px; right: auto;`,
  ]}
`

export const StyledBodyHtml = styled.span`
  color: inherit;

  a,
  a:hover,
  a:focus,
  a:active {
    color: inherit;
  }
`
