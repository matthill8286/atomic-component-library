import React, { ReactNode } from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { defaultSpacing } from '@/styles'
import { styled } from '@/styles/styled'
import { OtherClose, OtherCross, OtherEdit, OtherTick } from 'atomic-icon-library'
import { ThemeColors } from '@/types'
import { TranslatedText } from '@/types/global'
import { IconButton } from '../Button/IconButton'
import { IconSize } from './Input.interface'

export type InputIconState = 'default' | 'valid' | 'error'

const StyledIconWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.base.sm};
  right: ${({ theme }) => theme.spacing.base.sm};
  height: 100%;

  > button {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    top: ${3.5 * defaultSpacing}px;

    /* TODO - a11y: Remove the following once there are focus styles from UX */
    outline: none;

    &:focus {
      svg {
        fill: ${({ theme }) => theme.color.black};
      }
    }
  }
`

type MapStateToIcon = {
  [key in InputIconState]: JSX.Element
}

const mapStateToIcon: MapStateToIcon = {
  default: <div />,
  valid: <OtherTick />,
  error: <OtherCross />,
}

type MapStateToIconColor = {
  [key in InputIconState]: ThemeColors
}

const mapStateToIconColor: MapStateToIconColor = {
  default: 'grey3',
  valid: 'success',
  error: 'error',
}

export interface InputIconProps {
  icon?: ReactNode
  iconLabel?: TranslatedText // TODO - a11y: make required once teams have been informed that we need a label
  iconSize?: IconSize
  iconState: InputIconState
  onClick?: React.MouseEventHandler<HTMLDivElement> | React.MouseEventHandler<HTMLElement>
}

export const InputIcon = (props: InputIconProps) => {
  const { icon, iconSize = { height: 20, width: 20 }, iconState, onClick, iconLabel } = props
  const color = mapStateToIconColor[iconState]
  const iconComp = (
    <Icon as="span" color={color} {...iconSize}>
      {icon ? icon : mapStateToIcon[iconState]}
    </Icon>
  )

  return (
    <StyledIconWrapper>
      {onClick ? (
        <IconButton
          aria-label={iconLabel}
          height={iconSize.height}
          isInputIcon
          onClick={onClick as React.MouseEventHandler<HTMLElement>}
          width={iconSize.width}
        >
          {iconComp}
        </IconButton>
      ) : (
        iconComp
      )}
    </StyledIconWrapper>
  )
}
