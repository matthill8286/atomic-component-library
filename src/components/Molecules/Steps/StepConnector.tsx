import React, { FC } from 'react'
import { css, styled } from '@/styles/styled'
import { StepConnectorLineProps, StepConnectorPositions, StepConnectorProps } from './Steps.interface'

const getStepConnectorPositions = ({
  theme,
  variant,
  elementPosition,
  rightMargin,
  leftMargin,
}): StepConnectorPositions => {
  const positions: StepConnectorPositions = {
    uniform: {
      first: css`
        left: 50%;
        right: 0;
      `,
      second: css`
        left: -50%;
        right: 50%;
      `,
      last: css`
        left: -50%;
        right: 50%;
      `,
      default: css`
        left: -50%;
        right: 50%;
      `,
    },
    prominent: {
      first: css`
        left: 10px;
        right: calc(100% - ${theme.spacing.base.md});
      `,
      second: css`
        left: calc(-100% + ${theme.spacing.base.md});
        right: 50%;
      `,
      last: css`
        left: -50%;
        right: 10px;
      `,
      default: css`
        left: -50%;
        right: 50%;
      `,
    },
    simple: {
      first: css`
        display: none;
      `,
      second: css`
        left: calc(-100% + ${42 + leftMargin}px);
        right: calc(50% + ${28 + rightMargin}px);
      `,
      last: css`
        left: calc(-50% + ${28 + leftMargin}px);
        right: calc(0% + ${42 + rightMargin}px);
      `,
      default: css`
        left: calc(-50% + ${28 + leftMargin}px);
        right: calc(50% + ${28 + rightMargin}px);
      `,
    },
  }

  return positions[variant][elementPosition]
}

const BottomPositions = {
  uniform: {
    completed: '16px',
    default: '8px',
  },
  prominent: {
    completed: '16px',
    default: '8px',
  },
  simple: {
    completed: '5px',
    default: '5px',
  },
}

export const StepConnectorRoot = styled.div<StepConnectorProps>(
  ({ theme, elementPosition = 'default', active, completed, prevActive, variant = 'prominent' }) => {
    const leftMargin = active ? 4 : 0
    const rightMargin = prevActive ? 4 : 0

    const currentPosition = getStepConnectorPositions({
      theme,
      variant,
      elementPosition,
      leftMargin,
      rightMargin,
    })

    const bottomPosition = completed ? BottomPositions[variant]['completed'] : BottomPositions[variant]['default']

    return css`
      position: absolute;
      bottom: ${bottomPosition};
      ${currentPosition};
    `
  },
)

export const StepConnectorLine = styled.span<StepConnectorLineProps>`
  border-color: ${({ theme, color = 'primary', active, completed, elementPosition = 'default' }) =>
    completed || active || elementPosition === 'first' ? theme.color[color] : theme.color.grey2};
  border-style: solid;
  border-top-width: ${({ borderWidth }) => borderWidth};
  border-bottom-width: ${({ borderWidth }) => borderWidth};
  border-radius: ${({ theme }) => theme.dimension.borderRadius1};
  display: block;
`

export const StepConnector: FC<StepConnectorProps> = (props) => (
  <StepConnectorRoot {...props}>
    <StepConnectorLine {...props} borderWidth={props.variant === 'simple' ? '2px' : '4px'} />
  </StepConnectorRoot>
)

StepConnector.displayName = 'StepConnector'
