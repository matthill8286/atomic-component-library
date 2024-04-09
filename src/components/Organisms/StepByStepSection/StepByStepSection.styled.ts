import { FlexBox } from '@/components/Helper/FlexBox'
import { media, defaultTheme, spacing, styled } from '@/styles'
import { Theme } from '@/types'
import { ColorStyle, StyledSectionProps } from './StepByStepSection.types'

const isMain = (theme) => theme.name === defaultTheme.name

const handleBackgroundColor = (style: string, theme: Theme) => {
  switch (style) {
    case ColorStyle.GREY:
      return isMain(theme) ? `${theme.color.grey1}` : `${theme.color.grey2}`
    case ColorStyle.PRIMARY:
      return `${theme.color.primary}`
    case ColorStyle.CYAN:
      return isMain(theme) ? `${theme.color.primary}` : '#0090CE'
    default:
      return `${theme.color.primary}`
  }
}

const handleSquareBackgroundColor = (style: string, theme: Theme) => {
  const darkSquareBackgroundColor = 'rgba(0, 0, 0, 0.1)'
  switch (style) {
    case ColorStyle.PRIMARY:
      return darkSquareBackgroundColor
    case ColorStyle.CYAN:
      return isMain(theme) ? darkSquareBackgroundColor : `${theme.color.secondary}`
    default:
      return isMain(theme) ? darkSquareBackgroundColor : 'rgba(255,255,255,0.3)'
  }
}

export const StyledSection = styled.section<StyledSectionProps>`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme, colorStyle }) => handleBackgroundColor(colorStyle, theme)};
  margin: ${spacing.base.xxxl} 0;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 40rem;
    height: 40rem;
    top: 0;
    left: 50%;
    background: ${({ theme, colorStyle }) => handleSquareBackgroundColor(colorStyle, theme)};
    border-radius: ${({ theme }) => (isMain(theme) ? '100px' : '0')};
    transform: translate(-20rem, -0.5rem) rotate(-45deg);
    ${media.md} {
      width: 55rem;
      height: 55rem;
      transform: translate(-43rem, 1rem) rotate(-45deg);
    }
    ${media.lg} {
      transform: translate(-47rem, -1rem) rotate(-45deg);
    }
    ${media.xl} {
      transform: translate(-55rem, -1rem) rotate(-45deg);
    }
  }
`

export const StyledContentBlock = styled.div`
  position: relative;
  padding: ${spacing.base.xxxl} 0;
`

export const StyledFlexBox = styled(FlexBox)`
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  ${media.md} {
    flex-direction: row;
    justify-content: center;
  }
`
