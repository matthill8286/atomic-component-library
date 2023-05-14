import { defaultSpacing } from '@/styles'
import { media } from '@/styles/media'
import { styled } from '@/styles/styled'
import { Icon } from '@/components/Atoms/Icon'
import { CopyText, Heading } from '@/components/Atoms/Typography'
import { FlexBox } from '@/components/Helper/FlexBox'

export const StyledTimeWrapper = styled.div`
  display: block;
  position: relative;
`

export const StyledItem = styled(FlexBox)`
  position: relative;

  margin-top: ${({ theme }) => theme.spacing.base.md};

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    & span {
      display: none;
    }
  }

  & span {
    background: ${({ theme }) =>
      `repeating-linear-gradient(
        ${theme.color.black},
        ${theme.color.black} 8px,
        ${theme.color.white} 8px,
        ${theme.color.white} 19px
      );`};
    content: ' ';
    top: ${20 + 1.5 * defaultSpacing}px;
    ${media.md} {
      top: ${30 + 1.5 * defaultSpacing}px;
    }
    bottom: -${1.5 * defaultSpacing}px;
    left: 7px;
    position: absolute;
    width: 3px;

    ${media.md} {
      left: 14px;
    }
  }
`

export const StyledItemContentWrapper = styled.div`
  margin-left: ${({ theme }) => theme.spacing.base.sm};

  ${media.md} {
    margin-left: ${({ theme }) => theme.spacing.base.md};
  }
`

export const StyledIconTextWrapper = styled(Icon)`
  & svg {
    height: 20px;
    width: 20px;
  }

  ${media.md} {
    & svg {
      height: 30px;
      width: 30px;
    }
  }
`

export const StyledItemHeading = styled(Heading)`
  margin-top: 0;
  line-height: 24px;
`

export const StyledHeading = styled(Heading)`
  margin-top: 0;
`

export const StyledCopyText = styled(CopyText)`
  margin: 0;
`
