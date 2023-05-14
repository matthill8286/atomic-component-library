import { Heading } from '@/components/Atoms/Typography'
import { saiyanTheme } from '@/styles'
import { styled } from '@/styles/styled'
import { StyledIndexProps } from './IndexIcon.types'

const isMain = (theme) => theme.name === saiyanTheme.name

export const StyledIndex = styled.div<StyledIndexProps>`
  ${({ theme, color }) => {
    const themedIconSize = isMain(theme) ? '5rem' : '4rem'
    return `
      width: ${themedIconSize};
      height: ${themedIconSize};
      line-height: ${themedIconSize};
      border-radius: ${isMain(theme) ? '50%' : '0'};
      border: 2px solid ${color};
      transform: rotate(45deg);
      text-align: center;
    `
  }}
`
export const StyledHeading = styled(Heading)`
  display: inline-block;
  transform: rotate(-45deg);
  vertical-align: -0.1rem;
  margin-left: ${({ theme }) => (isMain(theme) ? '0' : '0.2rem')};
`
