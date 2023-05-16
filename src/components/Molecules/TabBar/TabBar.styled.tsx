import { Button } from '@/components/Atoms/Button'
import { Card, StyledCard } from '@/components/Atoms/Card'
import { Icon } from '@/components/Atoms/Icon'
import { css, keyframes, styled, media } from '@/styles'
import { ThemeColors } from '@/types'
import { FlexDirectionProperty } from 'csstype'

const line = keyframes`
  from {
    left: 50%;
    width: 0%;
  }
  to {
    left: 0%;
    width: 100%;
  }
`

export const StyledTabBarCard = styled(Card)<{
  enableSemanticTheme: boolean
  surfaceColor: ThemeColors
}>`
  ${StyledCard} {
    ${({ enableSemanticTheme, theme, surfaceColor }) =>
      enableSemanticTheme &&
      css`
        background-color: ${theme.color[surfaceColor]};
        color: ${theme.color.textColor};
      `}
  }
`

// TODO: Tabs are not working in IE11. No sticky + No well aligned inside the div
export const StyledTabBar = styled.div<{ isFixed: boolean }>`
  ${media.ie11} {
    display: none;
  }
  ${({ isFixed }) =>
    isFixed
      ? css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          float: left;
          z-index: 3;
        `
      : ''}
`

export const StyledTabsContainer = styled.div<{ flexDirection?: FlexDirectionProperty }>`
  display: flex;
  flex: 1;
  white-space: nowrap;
  overflow-x: auto;
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`

export const StyledTabBarItemContainer = styled.div<{
  enableSemanticTheme: boolean
  surfaceColor: ThemeColors
}>`
  display: flex;
  flex: 1;

  & label {
    color: ${({ theme }) => theme.color.grey4};
    cursor: pointer;
    display: inline-flex;
    line-height: 1;
    place-items: center;
    place-content: center;
    font-family: ${({ theme }) => theme.font.family.default};
    font-size: ${({ theme }) => theme.font.size.xs};
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    width: 100%;
    padding: 0 ${({ theme }) => theme.spacing.base.sm};
    height: 100%;
    min-height: 52px;
    position: relative;
    text-align: center;
    align-items: center;

    ${media.md} {
      font-size: ${({ theme }) => theme.font.size.sm};
    }

    ${media.maxMd} {
      padding: 0 ${({ theme }) => theme.spacing.baseMobile.sm};
    }

    &::after {
      animation: ${line} 0.2s linear forwards;
      background-color: ${({ theme }) => theme.color.primary};
      bottom: 0;
      content: ' ';
      display: none;
      height: 2px;
      left: 0;
      position: absolute;
      right: 0;
      width: 100%;
    }
  }

  & input[type='radio'] {
    display: none;
  }

  & input[type='radio']:checked ~ label {
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    color: ${({ theme }) => theme.color.black};

    &::after {
      display: block;
    }
  }

  & input[type='radio']:enabled:hover ~ label::after {
    display: block;
  }

  ${({ enableSemanticTheme, theme, surfaceColor }) =>
    enableSemanticTheme &&
    css`
      background-color: ${theme.color[surfaceColor]};
      & label {
        color: ${theme.color.textColor};
      }
      & input[type='radio']:checked ~ label {
        color: ${theme.color.textColor};
      }
    `}
`

export const StyledArrowButton = styled(Button)<{
  enableSemanticTheme: boolean
  surfaceColor: ThemeColors
}>`
  border: 0;
  align-self: center;
  ${media.maxMd} {
    padding: 12px ${({ theme }) => theme.spacing.baseMobile.sm};
  }
  ${Icon} {
    padding: 0;
  }

  ${({ enableSemanticTheme, theme, surfaceColor }) =>
    enableSemanticTheme &&
    css`
      background-color: ${theme.color[surfaceColor]};
      color: ${theme.color.textColor};
    `}
`
