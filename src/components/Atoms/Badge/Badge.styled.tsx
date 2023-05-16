import { math } from 'polished'
import { css, styled, ThemedStyledProps } from '@/styles/styled'
import { Theme } from '@/types/theme'
import { Typo } from '../Typography'
import { StyledBadgeProps } from './Badge.interface'

type ThemedBadgeProps = ThemedStyledProps<StyledBadgeProps, Theme>

const skewFactor = 10
const tailWidth = 10

const resolveColor = ({ actionType, theme }: ThemedBadgeProps) =>
  actionType === 'disabled' ? theme.color.black : theme.color.primary

export const skewLeft = ({ actionType, theme }: ThemedBadgeProps) => css`
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${tailWidth + 2}px;
    height: ${math(theme.font.size.xl + '+ 2px')}; /* theme font xl plus the border */
    bottom: 0;
    border-radius: ${theme.dimension.borderRadius1};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    transform: skewX(-${skewFactor}deg);
    transform-origin: bottom left;

    ${actionType === 'prominent'
      ? css`
          background-color: ${theme.color.primary};
          border: 1px solid ${theme.color.primary};
        `
      : css`
          background-color: ${theme.color.white};
          border-left: 1px solid ${resolveColor};
          border-top: 1px solid ${resolveColor};
          border-bottom: 1px solid ${resolveColor};
        `}
  }
`
export const skewRight = ({ actionType, theme }: ThemedBadgeProps) => css`
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 2px;
    width: ${tailWidth + 2}px;
    height: ${math(theme.font.size.xl + '+ 2px')}; /* theme font xl plus the border */
    bottom: 0;
    border-radius: ${theme.dimension.borderRadius1};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    transform: skewX(-${skewFactor}deg);
    border: 1px solid ${resolveColor};

    ${actionType === 'prominent'
      ? css`
          background-color: ${theme.color.primary};
        `
      : css`
          background-color: ${theme.color.white};
          border-left: none;
        `}
  }
`

export const StyledTypo = styled(Typo)<StyledBadgeProps>(
  ({ actionType, theme }) => css`
    ${actionType === 'prominent'
      ? css`
          background-color: ${theme.color.primary};
          color: ${theme.color.white};
        `
      : css`
          background-color: ${theme.color.white};
          color: ${resolveColor};
        `}
    ${actionType === 'inverted' &&
    css`
      background-color: ${theme.color.grey6};
      color: ${theme.color.white};
    `}
    text-align: center;
    display: flex;
    align-items: center;
    padding-left: ${theme.spacing.base.md};
    padding-right: ${theme.spacing.base.md};
    margin-left: 0;
    margin-right: ${tailWidth - 1}px;
    box-sizing: content-box;
    height: ${math(theme.font.size.xl + ' + 2px')}; /* theme font xl plus the border */
    overflow: auto;
  `,
)

export const StyledBadgeLineWrapper = styled.div<StyledBadgeProps>`
  ${({ isBadgeLine, theme }) =>
    isBadgeLine
      ? css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          overflow: hidden;
          height: ${math(theme.font.size.xl + ' + 4px')};
        `
      : `display: block`};
`

export const StyledBadgeWrapper = styled.div<StyledBadgeProps>(
  ({ theme }) => css`
    display: inline-block;
    position: relative;
    margin-right: ${theme.spacing.base.xs};
    max-width: 100%;
  `,
)

export const StyledOverflow = styled.div`
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
`
