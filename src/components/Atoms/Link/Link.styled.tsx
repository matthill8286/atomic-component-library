import React, { FunctionComponent } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { CopyText } from '@/components/Atoms/Typography'
import { css, styled } from '@/styles/styled'
import { Theme, ThemeColors } from '@/types/theme'
import { LinkRouterProps, StyledLinkProps } from './Link.interface'

export const linkStyles = css<StyledLinkProps>`
  display: ${({ isInline }) => (isInline ? `inline-flex` : 'flex')};
  align-items: center;
  width: max-content;
  color: ${({ theme, isDisabled, isInline, color }) =>
    (isDisabled && theme.color.grey2) || (isInline && 'inherit') || (color && theme.color[color])};
  opacity: ${({ theme, isDisabled }) => (isDisabled ? theme.polished.inactive : `1.0`)};
  text-decoration: none;
  cursor: ${({ isDisabled, cursor }) => (isDisabled ? 'initial' : cursor || 'pointer')};
  position: relative;
  ${({ theme, color, isInline }) => isInline && color && `border-bottom-color: ${theme.color[color]}`};
  padding: ${({ theme, isInline, isGrouped }) => (!isInline || isGrouped ? theme.spacing.base.sm : 0)};

  &::after {
    content: '';
    position: absolute;
    display: ${({ isUnderlined }) => (!isUnderlined ? 'block' : 'none')};
    bottom: -2px;
    height: ${({ isBold }) => (isBold ? 2 : 1)}px;
    ${({ isUnderlined }) => (!isUnderlined ? widthAndPosForUnderline : '')}
    background-color: ${({ theme, color, isDisabled }) =>
      (isDisabled && theme.color.grey2) || (color && theme.color[color]) || theme.color.primary};
    transform-origin: right center;
    transform: scale(0, 1);
    transition: transform 0.25s cubic-bezier(0.37, 0.31, 0.2, 0.85);
  }
  ${({ isDisabled }) =>
    !isDisabled &&
    `
    :hover {
      &::after {
        transform-origin: left center;
        transform: scale(1, 1);
      }
    }
  `}
`

export const StyledLinkAnchor = styled.a<StyledLinkProps>`
  ${linkStyles};
`

export const StyledLinkButton = styled.button<StyledLinkProps>`
  appearance: none;
  background: transparent;
  border: 0;
  padding: 0;

  ${linkStyles};

  /* Normalize line-height. Cannot be changed from normal in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable input types in iOS */
  -webkit-appearance: none;

  /* Remove excess padding and border in Firefox 4+ */
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`

const RouterLinkWrapper: FunctionComponent<LinkRouterProps<HTMLAnchorElement | HTMLButtonElement>> = ({
  children,
  className,
  to = '#',
  onClick,
}) => (
  <RouterLink onClick={onClick} className={className} to={to}>
    {children}
  </RouterLink>
)

export const StyledLinkRouter = styled(RouterLinkWrapper)`
  ${linkStyles};
`

export const StyledIconWrapper = styled.span<StyledLinkProps>`
  margin-left: ${({ hasIconRight, theme }) => (hasIconRight ? getIconMargin(theme) : '0px')};
  margin-right: ${({ hasIconLeft, theme }) => (hasIconLeft ? getIconMargin(theme) : '0px')};

  & svg {
    height: ${({ theme, isSmall }) => getIconSize(theme, isSmall)};
    width: ${({ theme, isSmall }) => getIconSize(theme, isSmall)};
  }
`

export const Text = styled(CopyText)<{
  isInline: boolean
  isBranded?: boolean
  color?: ThemeColors
}>`
  display: ${(props) => (props.isInline ? 'inline' : 'block')};
  background-color: ${({ theme, isBranded }) => isBranded && theme.color.primary};
  color: ${({ theme, color }) => (color && theme.color[color]) || theme.color.grey2};
  padding: ${({ theme, isBranded }) => isBranded && `${theme.spacing.base.xs} ${theme.spacing.base.sm}`};
  border-radius: ${({ isBranded, theme }) => isBranded && theme.dimension.borderRadius6};
`

/**
 * This helper function calculates width of the underline.
 * The width is not 100% if the link has an icon. If the link has an icon we also need a shift to left or right.
 * If no icon is give, just return the normal case which the underline has the full width.
 */
const widthAndPosForUnderline = css<StyledLinkProps>(({ theme, isSmall, hasIconLeft, hasIconRight }) => {
  if (!hasIconLeft && !hasIconRight) {
    return css`
      left: 0;
      width: calc(100%);
    `
  }

  const leftOffset = getIconWidth(theme, isSmall)
  const iconWidth = getIconWidth(theme, isSmall, hasIconLeft && hasIconRight)

  const iconLeft = css`
    left: ${leftOffset};
  `
  return css`
    ${hasIconLeft && iconLeft}

    width: calc(
            100% - ${iconWidth}
          );
  `
})

/**
 * Get the width/height of the icon depending if the link is small or large.
 *
 * @param theme
 * @param isSmall
 */
const getIconSize = (theme: Theme, isSmall: boolean) => {
  return isSmall ? theme.font.lineHeight.xxs : theme.font.lineHeight.xs
}

/**
 * Returns the IconWidth including the margin.
 * If calculateForTwoIcons is true, it double the icon width, since there are two icons (left and right)
 * The margin is between icon and text.
 *
 * @param theme
 * @param isSmall
 * @param calculateForTwoIcons
 */
const getIconWidth = (theme: Theme, isSmall: boolean, calculateForTwoIcons?: boolean) => {
  const iconSizeAsNum = parseInt(getIconSize(theme, isSmall))
  const iconMarginAsNum = parseInt(getIconMargin(theme))
  return (iconSizeAsNum + iconMarginAsNum) * (calculateForTwoIcons ? 2 : 1) + 'px'
}

const getIconMargin = (theme: Theme) => {
  return theme.spacing.base.xxs
}
