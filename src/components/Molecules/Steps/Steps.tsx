import React, { Children, cloneElement, FC, isValidElement } from 'react'
import { Card } from '@/components/Atoms/Card'
import { FlexBox } from '@/components/Helper/FlexBox'
import { StepConnector } from './StepConnector'
import { ElementPosition, StepConnectorProps, StepPrivateProps, StepPublicProps, StepsProps } from './Steps.interface'

export const Steps: FC<StepsProps> = (props) => {
  const {
    activeStep = 0,
    completedStep = 0,
    elevation = 0,
    connector,
    children,
    color = 'primary',
    variant = 'prominent',
    onChange,
    ...other
  } = props

  const childrenArray = Children.toArray(children)

  const steps = childrenArray.map((step, stepIndex) => {
    if (isValidElement(step)) {
      const active = activeStep === stepIndex
      const completed = stepIndex <= completedStep

      let elementPosition: ElementPosition = 'default'

      if (stepIndex === 0) elementPosition = 'first'
      if (stepIndex === 1) elementPosition = 'second'
      if (stepIndex + 1 === Children.count(children)) elementPosition = 'last'

      const connectorProps: StepConnectorProps = {
        elementPosition,
        active: stepIndex <= activeStep,
        prevActive: stepIndex - 1 === activeStep,
        completed,
        color,
        variant,
      }

      const connectorComponent = isValidElement(connector) ? (
        cloneElement(connector, { ...connectorProps, ...connector.props })
      ) : (
        <StepConnector {...connectorProps} />
      )

      const stepProps: StepPublicProps & StepPrivateProps = {
        ...step.props,
        connector: connectorComponent,
        elementPosition,
        stepIndex,
        active,
        completed,
        color,
        onClick: onChange,
        variant,
      }

      return cloneElement(step, stepProps)
    }
  })

  return (
    <Card elevation={elevation} noBorder={['top', 'right', 'bottom', 'left']} surface="clear" padding="md" {...other}>
      <FlexBox display="flex" alignItems="center" flexDirection="row">
        {steps}
      </FlexBox>
    </Card>
  )
}

Steps.displayName = 'Steps'
