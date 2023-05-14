import { CopyText } from '@/components/Atoms/Typography'
import { styled } from '@/styles/styled'
import { Theme } from '@/types/theme'
import { StyledLikeProps } from './Like.interface'

export const StyledLike = styled.div<StyledLikeProps>`
  display: ${({ isInline }) => (isInline ? `inline-flex` : 'flex')};
  align-items: center;
  width: fit-content;
  color: ${({ theme, isDisabled, isInline }) =>
    (isDisabled && theme.color.grey2) || (isInline && 'inherit') || theme.color.grey4};
  opacity: ${({ theme, isDisabled }) => (isDisabled ? theme.polished.inactive : `1.0`)};
  text-decoration: none;
  cursor: ${({ isDisabled, cursor }) => (isDisabled ? 'initial' : cursor || 'pointer')};
  position: relative;
  padding: ${({ theme }) => `${theme.spacing.base.xxs} ${theme.spacing.base.xs}`};
  border-bottom: ${({ isUnderlined, isInline, theme }) =>
    isUnderlined && isInline ? `1px solid ${theme.color.grey2}` : ''};

  ${({ isDisabled, isInline }) =>
    !isDisabled &&
    !isInline &&
    `
    :hover {
      &::after {
        transform-origin: left center;
        transform: scale(1, 1);
      }
    }
  `}
`

/**
 * Get the width/height of the icon depending if the Like is small or large.
 *
 * @param theme
 * @param isSmall
 */
const getIconSize = (theme: Theme, isSmall: boolean) => {
  return isSmall ? theme.font.lineHeight.xxs : theme.font.lineHeight.xs
}

const getIconMargin = (theme: Theme) => {
  return theme.spacing.base.xxs
}

export const StyledIconWrapper = styled.span<StyledLikeProps>`
  margin-left: ${({ hasIconRight, theme }) => (hasIconRight ? getIconMargin(theme) : '0px')};
  margin-right: ${({ hasIconLeft, theme }) => (hasIconLeft ? getIconMargin(theme) : '0px')};

  & svg {
    height: ${({ theme, isSmall }) => getIconSize(theme, isSmall)};
    width: ${({ theme, isSmall }) => getIconSize(theme, isSmall)};
  }
`

export const Text = styled(CopyText)<{ isInline: boolean }>`
  display: ${(props) => (props.isInline ? 'inline' : 'block')};
`

export const Likes = styled(CopyText)<{ isInline: boolean }>`
  display: ${(props) => (props.isInline ? 'inline' : 'block')};
  margin-right: 5px;
`
