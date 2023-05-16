import React, { cloneElement, FC, isValidElement } from 'react'
import { Typo } from '@/components/Atoms/Typography'
import { css, styled } from '@/styles/styled'
import { ThemeColors } from '@/types/theme'
import { StepIconProps, StepsVariant } from './Steps.interface'

const FlexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const StepIconRoot = styled.div<{ variant: StepsVariant; active: boolean }>`
  margin-top: ${({ theme, variant, active }) =>
    variant === 'simple' && !active ? '12px' : `${theme.defaultSpacing}px`};
  margin-bottom: ${({ variant, active }) => (variant === 'simple' && !active ? '2px' : '0')};
  position: relative;
  z-index: 1;
  ${FlexCenter}
`

const Circle = styled.div<{ active: boolean; completed: boolean; color: ThemeColors }>`
  border: ${({ active, completed }) => (completed ? '6px' : active ? '4px' : '4px')} solid
    ${({ theme, active, completed, color }) => theme.color[active ? color : completed ? 'white' : `grey2`]};
  border-radius: 50%;
  width: ${({ completed }) => (completed ? '40px' : '24px')};
  height: ${({ completed }) => (completed ? '40px' : '24px')};
  background-color: ${({ theme, active, completed, color }) =>
    theme.color[active ? `white` : completed ? color : 'grey2']};
  box-shadow: ${({ active, completed }) => (active || completed ? '2px 2px 4px' : '0 0 0')}
    ${({ theme }) => theme.color['grey2']};
  ${FlexCenter}
`

const Checkmark = styled.div<{ active: boolean; color: ThemeColors }>`
  position: relative;
  display: inline-block;
  width: ${({ theme }) => theme.spacing.base.lg};
  height: ${({ theme }) => theme.spacing.base.lg};

  ::before {
    position: absolute;
    left: 0;
    top: 13px;
    height: 31%;
    width: 2px;
    background-color: ${({ theme }) => theme.color['white']};
    content: '';
    transform: translateX(12px) rotate(-45deg);
    transform-origin: left bottom;
  }

  ::after {
    position: absolute;
    left: 0;
    bottom: 9px;
    height: 2px;
    width: 55%;
    background-color: ${({ theme }) => theme.color['white']};
    content: '';
    transform: translateX(12px) rotate(-45deg);
    transform-origin: left bottom;
  }
`

const Point = styled.div<{ backgroundColor: ThemeColors; active: boolean }>(({ theme, active, backgroundColor }) => ({
  border: `2px solid ${theme.color[backgroundColor]}`,
  backgroundColor: theme.color[backgroundColor],
  borderRadius: '50%',
  width: active ? 12 : 6,
  height: active ? 12 : 6,
}))

export const StepIcon: FC<StepIconProps> = (props) => {
  const { active = false, completed = false, color = 'primary', variant = 'prominent', customIcon, ...other } = props

  const renderIcon = () => {
    if (customIcon && isValidElement(customIcon)) {
      return (
        <Circle active={active} completed={completed} color={color}>
          {cloneElement(customIcon, { active, completed, color })}
        </Circle>
      )
    }

    if (variant === 'simple') {
      return <Point backgroundColor={active || completed ? color : 'grey2'} active={active} />
    }

    return (
      <Circle active={active} completed={completed} color={color}>
        {completed ? <Checkmark active={active} color={color} /> : <Typo color={active ? 'white' : color}></Typo>}
      </Circle>
    )
  }

  return (
    <StepIconRoot variant={variant} active={active} {...other}>
      {renderIcon()}
    </StepIconRoot>
  )
}

StepIcon.displayName = 'StepIcon'
