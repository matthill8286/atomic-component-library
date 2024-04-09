import { Icon } from '@/components/Atoms/Icon'
import { css, media, styled } from '@/styles'
import {
  StyledTeaserContentContainerProps,
  StyledIconProps,
  StyledPictureContainerProps,
  StyledResponsiveImageContainerProps,
  StyledTeaserProps,
  StyledTextLinkContainerProps,
} from './Teaser.interface'
import { TeaserOrientation } from '@/components/Organisms/Teasers'

/**
 * Small helper function which returns `true` if teaser is in landscape mode
 */
export const isPortrait = (orientation: TeaserOrientation) => {
  return orientation === 'portrait'
}

export const StyledTeaser = styled.div<StyledTeaserProps>`
  height: calc(100% - ${({ theme }) => theme.spacing.base.sm});
  display: flex;
  cursor: ${({ hasLinkList, isOpen }) => (hasLinkList && isOpen ? 'inherit' : 'pointer')};
  margin-top: ${({ theme }) => theme.spacing.base.sm};

  ${media.md} {
    ${({ orientation, theme }) => css`
      height: ${isPortrait(orientation) ? `calc(100% - ${theme.spacing.base.sm})` : '300px'};
    `}
  }

  /* Due to display: flex, child (Card) needs to have 100% */
  & > div {
    width: 100%;
  }
`

export const StyledResponsiveContainer = styled.div<StyledResponsiveImageContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.md} {
    ${({ orientation }) => css`
      flex-direction: ${isPortrait(orientation) ? 'column' : 'row'};
    `}
  }
`

export const StyledPictureContainer = styled.div<StyledPictureContainerProps>(
  ({ withImagePadding, orientation, theme }) => css`
    display: flex;
    flex: 0 0 auto;
    min-width: ${withImagePadding ? '176px' : '200px'};
    ${withImagePadding && `justify-content: center`};
    ${withImagePadding && `align-items: center`};
    padding-top: ${withImagePadding
      ? isPortrait(orientation)
        ? theme.spacing.base.lg
        : theme.spacing.base.md
      : '0px'};
    padding-left: ${withImagePadding ? theme.spacing.base.md : '0px'};
    padding-right: ${withImagePadding && isPortrait(orientation) ? theme.spacing.base.md : '0px'};
    padding-bottom: ${withImagePadding && isPortrait(orientation) ? theme.spacing.base.md : '0px'};
    height: 280px;

    ${media.md} {
      max-width: ${isPortrait(orientation) ? 'none' : '33%'};
      height: ${isPortrait(orientation) ? '280px' : '100%'};
    }
  `
)

export const StyledContentContainer = styled.div<StyledTeaserContentContainerProps>(
  ({ theme }) => css`
    flex: 2 1 auto;

    display: flex;
    flex-direction: column;

    padding: ${theme.spacing.base.md} ${theme.spacing.base.sm};
    ${media.md} {
      padding: ${theme.spacing.base.lg} ${theme.spacing.base.md};
    }
  `
)

export const StyledHeadingContainer = styled.div<{ growHeadline: boolean }>`
  display: flex;
  ${({ growHeadline }) => growHeadline && `flex: 1 0 auto`};
  flex-direction: row;
  text-transform: ${({ theme }) => theme.heading.featured.textTransform};
  justify-content: space-between;
  cursor: pointer;
`

export const StyledInfoTextContainer = styled.div`
  margin: 0;
`

export const StyledInfoTextChildren = styled.div`
  margin-top: ${({ theme }) => theme.spacing.base.sm};
`

export const StyledLinkListContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.base.md};
`

export const StyledLinkListItemSpace = styled.div`
  height: ${({ theme }) => theme.spacing.base.sm};
`

export const StyledTextLinkContainer = styled.div<StyledTextLinkContainerProps>(
  ({ theme }) => css`
    margin-top: auto;

    padding-top: ${theme.spacing.base.md};
    ${media.md} {
      padding-top: ${theme.spacing.base.lg};
    }
  `
)

export const StyledLinkContainer = styled.div<StyledTextLinkContainerProps>(
  ({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
  `
)
export const StyledIcon = styled(Icon)<StyledIconProps>(
  ({ theme, hasMarginLeft, hasMarginTop }) => css`
    svg {
      height: ${theme.font.size.sm};
      width: ${theme.font.size.sm};
      transition: transform ${theme.transition.medium} ${theme.transition.defaultEasing};

      ${media.md} {
        height: ${theme.font.size.xl};
        width: ${theme.font.size.xl};
      }
    }

    margin-left: ${hasMarginLeft ? theme.spacing.base.sm : 0};
    margin-top: ${hasMarginTop ? theme.spacing.base.sm : 0};

    ${media.md} {
      margin-left: ${hasMarginLeft ? theme.spacing.base.md : 0};
    }
  `
)

export const StyledDummyLink = styled.div(
  ({ theme }) => css`
    display: inline-block;
    margin-top: auto;
    padding-top: ${theme.spacing.base.md};
    position: relative;
    width: 100%;

    ${media.md} {
      padding-top: ${theme.spacing.base.lg};
    }
  `
)
