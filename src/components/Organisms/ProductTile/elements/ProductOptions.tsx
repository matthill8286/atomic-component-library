import React, { FC, ReactPropTypes } from 'react'
import { IconButton } from '@/components/Atoms/Button'
import { css, styled } from '@/styles/styled'
import { ThemeColors } from '@/types'
import { Icon } from '@/components/Atoms/Icon'

export interface TopRightProps {
  color?: ThemeColors
  StyledPosition: FC<any>
  icon: JSX.Element
  onOptionClick?: any
  outlined?: boolean
  showOptions?: boolean
  modifiers?: keyof ReactPropTypes
}

const StyledTopRight = styled.div(
  ({ theme }) => css`
    position: absolute;
    z-index: 10;
    display: flex;
    top: calc(${theme.spacing.base.sm} - 0.5px);
    right: calc(${theme.spacing.base.sm} + 1px);
  `,
)

export const StyledBottomRight = styled.div(
  ({ theme }) => css`
    position: absolute;
    z-index: 10;
    display: flex;
    bottom: calc(${theme.spacing.base.sm} - 0.5px);
    right: calc(${theme.spacing.base.sm} + 1px);
  `,
)

export const StyledBottomLeft = styled.div(
  ({ theme }) => css`
    position: absolute;
    z-index: 10;
    display: flex;
    bottom: calc(${theme.spacing.base.sm} - 0.5px);
    left: calc(${theme.spacing.base.sm} + 1px);
  `,
)

export const StyledTopLeft = styled.div(
  ({ theme }) => css`
    position: absolute;
    z-index: 10;
    display: flex;
    top: calc(${theme.spacing.base.sm} - 0.5px);
    left: calc(${theme.spacing.base.sm} + 1px);
  `,
)

export const StyledIconButton = styled(IconButton)<{ modifiers?: keyof React.Props<any> }>`
  border: none;
  display: flex;
  padding: 0;
  min-width: auto;
  justify-content: center;
`

export const TopRight: React.FC<TopRightProps> = ({
  StyledPosition,
  color = 'grey5',
  onOptionClick,
  icon,
  showOptions = true,
  modifiers,
}) => {
  if (!showOptions) {
    return null
  }
  return (
    <StyledPosition>
      <StyledIconButton {...modifiers} actionType="inverted" onClick={onOptionClick}>
        <Icon color={color} height="md" width="md">
          {icon}
        </Icon>
      </StyledIconButton>
    </StyledPosition>
  )
}
