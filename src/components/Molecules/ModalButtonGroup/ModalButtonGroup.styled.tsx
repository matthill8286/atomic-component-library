import { Button } from '@/components/Atoms/Button'
import { media } from '@/styles/media'
import { css, styled } from '@/styles/styled'
import { ModalButtonGroupProps } from './ModalButtonGroup.interface'

export const StyledModalFooter = styled.div<ModalButtonGroupProps>`
  ${({ showButtonSeparator, theme, buttonAlignment: buttonType }) => css`
    border-top: 1px solid ${showButtonSeparator ? theme.color.grey2 : `transparent`};
    padding-top: ${({ theme }) => theme.spacing.base.lg};
    width: 100%;
    display: flex;
    flex-direction: row;

    ${buttonType === 'space-between' &&
    `
      justify-content: space-between;
    `}

    ${buttonType === 'right' &&
    `
      justify-content: flex-end;
    `}

    ${buttonType === 'center' &&
    `
      justify-content: center;
      width: 85%;
      margin: 0 auto;
    `}

    ${media.maxSm} {
      flex-direction: column-reverse;
    }
  `}
`

export const StyledModalFooterPrimary = styled.div<ModalButtonGroupProps>`
  ${({ buttonAlignment: buttonType }) =>
    buttonType === 'space-between' &&
    `
    text-align: right;
    `}
  ${({ buttonAlignment: buttonType }) =>
    buttonType === 'right' &&
    `
    text-align: right;
    `}
    ${({ buttonAlignment: buttonType, buttonWidth, theme }) =>
    buttonType === 'center'
      ? `
      margin: 0 auto 0 ${theme.spacing.base.xs};
      width: ${typeof buttonWidth === 'number' ? `${buttonWidth}px ` : '100%'}
    `
      : `
      margin: 0 ${theme.spacing.base.md}
    `}
`
export const StyledModalFooterSecondary = styled.div<ModalButtonGroupProps>`
  ${({ theme, buttonAlignment: buttonType }) => css`
    ${buttonType === 'right' &&
    `
      margin-right: ${theme.spacing.base.md};
    `}

    ${buttonType === 'center'
      ? `
      margin: 0 ${theme.spacing.base.xs} 0 auto;
       width: 100%;
    `
      : `
      margin: 0 ${theme.spacing.base.md}
    `}

    ${media.maxSm} {
      margin-top: ${({ theme }) => theme.spacing.base.sm};
      margin-right: 0;
    }
  `}
`

export const StyledModalFooterButton = styled(Button)`
  width: 100%;
  margin: 0 auto;
  max-width: 400px;
  ${media.maxSm} {
    width: 100%;
  }
`
