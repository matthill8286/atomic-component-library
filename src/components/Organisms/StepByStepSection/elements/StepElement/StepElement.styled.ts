import { breakpoints, media, defaultTheme, spacing, styled } from '@/styles'
import { StyledLineContainerProps, StyledStepConnectorProps, StyledStepContainerProps } from './StepElement.types'

const isMain = (theme) => theme.name === defaultTheme.name

const lineContainerWidth = 5

const getStepWidth = (itemsPerRow: number, connectorsPerRow?: number) => {
  const fullWidth = 100
  const amountOfConnectors = connectorsPerRow || itemsPerRow - 1

  return (fullWidth - amountOfConnectors * lineContainerWidth) / itemsPerRow
}

export const StyledStepContainer = styled.div<StyledStepContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  ${media.maxMd} {
    flex-basis: 0%;
    align-self: center;
    width: 100%;
  }
  ${({ amount }) => {
    switch (amount) {
      case 2:
        return `
          flex-basis: ${getStepWidth(2)}%;
        `
      case 3:
        return `
          flex-basis: ${getStepWidth(3)}%;
        `
      case 4:
        return `
          flex-basis: ${getStepWidth(2, 1)}%;
          ${media.lg} {
            flex-basis: ${getStepWidth(4)}%;
          }
        `
      case 5:
        return `
          flex-basis: ${getStepWidth(3)}%;
        `
      case 6:
        return `
          flex-basis: ${getStepWidth(3, 2)}%;
        `
      default:
        return `
          flex-basis: ${getStepWidth(3)}%;
        `
    }
  }}
`

export const StyledStepContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 95%;
  max-width: 25rem;
  padding-top: ${({ theme }) => (isMain(theme) ? '0' : spacing.base.xs)};
  padding-bottom: ${spacing.base.md};
  ${media.md} {
    padding-bottom: ${spacing.base.xl};
  }
  p {
    margin-bottom: 0;
    width: 100%;
  }
  a {
    margin-top: ${spacing.base.xs};
  }
`

export const StyledLineContainer = styled.div<StyledLineContainerProps>`
  display: flex;
  max-width: 350px;
  flex-basis: ${lineContainerWidth}%;
  ${media.maxMd} {
    align-self: center;
  }
  ${({ amount, index }) => {
    if (amount === 4) {
      return `
        @media screen and (min-width:${breakpoints.md}px) and (max-width:${breakpoints.lg}px){
          display: ${index === 1 ? `none;` : `flex;`}
      }`
    }
    return `
      ${media.md} {
        display: ${index === 2 ? `none;` : `flex;`}
      }`
  }}
`

export const StyledConnectionLine = styled.div<StyledStepConnectorProps>`
  width: 4rem;
  height: 4rem;
  margin: 0 auto ${({ theme }) => (isMain(theme) ? spacing.base.md : spacing.base.xl)} auto;
  transform: translateX(-2rem) rotate(90deg);
  border-top: 1px solid ${(props) => props.color};
  ${media.md} {
    width: 100%;
    margin: 0;
  }
  ${({ amount, theme }) => {
    const themedYPosition = isMain(theme) ? 'translateY(2.5rem)' : 'translateY(2.1rem)'
    switch (amount) {
      case 2:
        return `
          ${media.md} {
            transform: ${themedYPosition} scaleX(6);
          }
          ${media.lg} {
            transform: ${themedYPosition} scaleX(5);
          }
          ${media.xl} {
            transform: ${themedYPosition} scaleX(4);
          }
        `
      case 3:
        return `
          ${media.md} {
            transform: ${themedYPosition} scaleX(4);
          }
        `
      case 4:
        return `
          ${media.md} {
            transform: ${themedYPosition} scaleX(6);
          }
          ${media.lg} {
            transform: ${themedYPosition} scaleX(3);
          }
        `
      case 5:
      case 6:
      default:
        return `
          ${media.md} {
            transform: ${themedYPosition} scaleX(4);
          }
        `
    }
  }}
`
