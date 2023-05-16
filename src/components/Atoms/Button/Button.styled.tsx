import { darken } from 'polished'
import { FunctionComponent } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { media } from '@/styles/media'
import { css, styled } from '@/styles/styled'
import { Icon } from '../Icon'
import { LoadingIndicator } from '../LoadingIndicator'
import { Status } from '../Status'
import { ButtonProps, StyledButtonProps } from './Button.interface'

const buttonStyles = css<StyledButtonProps>`
  ${Icon} {
    padding: 0 ${({ theme, actionType }) => (actionType !== 'outlined' ? theme.defaultSpacing : 0)}px;
  }

  ${Status} {
    position: absolute;
    top: -6px;
    right: -6px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ round, theme }) => (round ? `100%` : theme.dimension.borderRadius1)};
  box-sizing: border-box;
  outline: none;
  cursor: ${({ disabled, isFlat }) => (disabled ? 'not-allowed' : isFlat ? 'default' : 'pointer')};
  appearance: none;
  -webkit-appearance: none;
  padding: ${({ round, squared }) => (round || squared ? '0' : '12px 24px')};
  position: relative;
  text-decoration: none;
  font-family: ${({ theme }) => theme.font.family.default};
  font-weight: ${({ weight }) => weight || 'normal'};
  font-size: ${({ theme }) => theme.font.size.sm};
  height: ${({ size, theme }) => theme.button.size[size]};
  width: fit-content;

  box-shadow: ${({ elevated, theme }) => (elevated ? theme.dimension.elevationLevel2 : 'none')};

  ${({ size, round, theme, squared }) =>
    (round || squared) &&
    `
    width: ${theme.button.size.sm};
    height: ${theme.button.size.sm};

    ${media.md} {
      width: ${theme.button.size[size]};
      height: ${theme.button.size[size]};
    }
  `}

  ${({ disabled, theme, isFlat }) =>
    !disabled &&
    !isFlat &&
    `
    :hover {
      box-shadow: ${theme.dimension.elevationLevel3};
    }`}

  ${({ fullWidth }) =>
    fullWidth &&
    `
    width: 100%;
  `}
  
  ${({ theme, curved }) => curved && `border-radius: ${theme.dimension.borderRadius7};`}

  ${({ actionType, disabled, isLoading, theme, isFlat }) =>
    (actionType === 'prominent' &&
      (disabled
        ? `
        background: ${theme.color.grey4};
        border: 2px solid ${theme.color.grey4};
        color: ${theme.color.white};
        opacity: ${theme.polished.inactive};`
        : `
        background: ${theme.color.primary};
        border: 2px solid ${theme.color.primary};
        color: ${isLoading ? 'transparent' : theme.color.white};

        :hover {
          background: ${!isFlat && darken(theme.polished.darken, theme.color.primary)};
          border: 2px solid ${!isFlat && darken(theme.polished.darken, theme.color.primary)};
        }`)) ||
    (actionType === 'primary' &&
      (disabled
        ? `
          background: ${theme.color.primary};
          border: 2px solid ${theme.color.primary};
          color: ${theme.color.grey2};
          opacity: ${theme.polished.inactive};`
        : `
          background: ${theme.color.primary};
          border: 2px solid ${theme.color.primary};
          color: ${isLoading ? 'transparent' : theme.color.white}`)) ||
    (actionType === 'secondary' &&
      `background: ${theme.color.white};

      ${
        disabled
          ? `
          border: 2px solid ${theme.color.grey4};
          color: ${theme.color.white};
          opacity: ${theme.polished.inactive};`
          : `
          border: 2px solid ${theme.color.grey5};
          color: ${isLoading ? 'transparent' : theme.color.grey5};`
      }`) ||
    (actionType === 'ghost' &&
      `border: 2px solid ${theme.color.white};
       background: ${theme.color.white};

      ${
        disabled
          ? `
        color: ${theme.color.grey5};
        opacity: ${theme.polished.inactive};`
          : `
        color: ${isLoading ? 'transparent' : theme.color.grey5};

        :hover {
          box-shadow: ${!isFlat && theme.dimension.elevationLevel3};
        }`
      }
    `) ||
    (actionType === 'inverted' &&
      `border: 2px solid ${theme.color.white};
       background: ${theme.color.grey4};
       
    ${
      disabled
        ? `
      color: ${theme.color.white};
      opacity: ${theme.polished.inactive};`
        : `
      color: ${isLoading ? 'transparent' : theme.color.white};

      :hover {
        box-shadow: none;
        background: ${theme.color.grey4};
      }`
    }
  `) ||
    (actionType === 'outlined' &&
      `border: 2px solid ${theme.color.primary};
       background: ${theme.color.white};

    ${
      disabled
        ? `
      opacity: ${theme.polished.inactive};
      :hover {
        box-shadow: none;
      }
        `
        : `
        color: ${isLoading ? 'transparent' : theme.color.primary};
      `
    }
  `) ||
    (actionType === 'lightBorder' &&
      `border: 1px solid ${theme.color.grey2};
       background: ${theme.color.white};
       border-radius: ${theme.dimension.borderRadius7};
    ${
      disabled
        ? `
      opacity: ${theme.polished.inactive};
      :hover {
        box-shadow: none;
      }
        `
        : `
      color: ${isLoading ? 'transparent' : theme.color.grey5};
      `
    }
  `) ||
    (actionType === 'darkBorder' &&
      `border: 2px solid ${theme.color.grey4};
       background: ${theme.color.white};

    ${
      disabled
        ? `
      opacity: ${theme.polished.inactive};
      :hover {
        box-shadow: none;
      }
        `
        : `
        color: ${isLoading ? 'transparent' : theme.color.grey5};
      `
    }
  `)}
`

export const StyledAnchorButton = styled.a<StyledButtonProps>`
  ${buttonStyles};
  :visited,
  :hover,
  :active {
    box-shadow: none;
  }
`

export const StyledButton = styled.button<StyledButtonProps>`
  ${buttonStyles};

  > span {
    color: inherit;
    display: block;
    text-align: center;
    width: 100%;
  }

  ${({ actionType, disabled, isLoading, theme }) =>
    actionType === 'primary' &&
    (disabled ? `color: ${theme.color.grey2};` : `color: ${isLoading ? 'transparent' : theme.color.white}`)}
`

const RouterLinkWrapper: FunctionComponent<ButtonProps> = ({ children, className, to = '#' }) => (
  <RouterLink className={className} to={to}>
    {children}
  </RouterLink>
)

export const StyledRouterButton = styled(RouterLinkWrapper)`
  ${buttonStyles};
`

export const StyledLoadingIndicator = styled(LoadingIndicator)`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`
