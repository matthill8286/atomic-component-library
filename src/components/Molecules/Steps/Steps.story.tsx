import { withState } from '@dump247/storybook-state'
import { button, radios, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React, { FC } from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { styled } from '@/styles/styled'
import { OtherShoppingCartAdd } from '@matthill8286/atomic-icon-library'
import { ThemeColors } from '@/types/theme'
import { Step } from './Step'
import { StepConnectorRoot } from './StepConnector'
import { Steps } from './Steps'
import {
  CustomIconProps,
  StepConnectorLineProps,
  StepConnectorProps,
  StepsProps,
  StepsVariant,
} from './Steps.interface'
import readme from './Steps.readme.md'
import withVariableArrayReadme from './StepsVariableArray.readme.md'
import withConnectorReadme from './StepsWithConnector.readme.md'
import withIconReadme from './StepsWithIcon.readme.md'

const stories = storiesOf('Design System/Molecules/Steps', module)

const variants: { [key: string]: StepsVariant } = {
  prominent: 'prominent',
  uniform: 'uniform',
  simple: 'simple',
}

const colors: ThemeColors[] = ['primary', 'secondary', 'black']

stories.add(
  'Default',
  () => {
    const steps = [{ title: 'One' }, { title: 'Two' }, { title: 'Three' }, { title: 'Four' }]
    const stepsIndex: number[] = steps.map((el, index) => index)

    const knobs: StepsProps = {
      color: select('color', colors, 'primary'),
      activeStep: select('activeStep', stepsIndex, 2),
      completedStep: select('completedStep', [-1, ...stepsIndex], 1),
      variant: radios('variant', variants, 'uniform'),
    }

    const description = text('description', 'This is a description')

    return (
      <Steps {...knobs}>
        {steps.map(({ title }, index) => (
          <Step key={index} title={title} description={description} />
        ))}
      </Steps>
    )
  },
  {
    info: readme,
  },
)

stories.add(
  'onChange activeStep',
  withState({ activeStep: 2, completedStep: 1 }, (store) => {
    const stepsProps: StepsProps = {
      color: 'primary',
      activeStep: store.state.activeStep,
      completedStep: store.state.completedStep,
    }

    const handleChange = (step: number) => {
      store.set({ activeStep: step, completedStep: step - 1 })
    }

    return (
      <Steps {...stepsProps} onChange={handleChange}>
        <Step title="Sign In" description="This is a description" />
        <Step title="Address" description="This is a description" />
        <Step title="Payment" description="This is a description" />
        <Step title="Summary" description="This is a description" />
      </Steps>
    )
  }),
  {
    info: readme,
  },
)

stories.add(
  'with icon',
  () => {
    const steps = [{ title: 'Sig In' }, { title: 'Address' }, { title: 'Payment' }, { title: 'Summary' }]
    const stepsIndex: number[] = steps.map((el, index) => index)

    const knobs: StepsProps = {
      color: select('color', colors, 'primary'),
      activeStep: select('activeStep', stepsIndex, 2),
      completedStep: select('completedStep', [-1, ...stepsIndex], 1),
    }

    const description = text('description', 'This is a description')

    const CustomIcon: FC<CustomIconProps> = ({ active = false, completed = false, color = 'primary', ...props }) => (
      <Icon color={active ? 'white' : completed ? color : 'grey2'} {...props}>
        <OtherShoppingCartAdd />
      </Icon>
    )

    return (
      <Steps {...knobs}>
        {steps.map(({ title }, index) => (
          <Step key={index} title={title} description={description} icon={<CustomIcon />} />
        ))}
      </Steps>
    )
  },
  {
    info: withIconReadme,
  },
)

stories.add(
  'with connector',
  () => {
    const steps = [{ title: 'Sig In' }, { title: 'Address' }, { title: 'Payment' }, { title: 'Summary' }]
    const stepsIndex: number[] = steps.map((el, index) => index)

    const knobs: StepsProps = {
      color: select('color', colors, 'primary'),
      activeStep: select('activeStep', stepsIndex, 2),
      completedStep: select('completedStep', [-1, ...stepsIndex], 1),
    }

    const description = text('description', 'This is a description')

    const CustomConnectorLine = styled.span<StepConnectorLineProps>`
      border-color: ${({ theme, color = 'primary', active, completed, elementPosition = 'default' }) =>
        completed || active || elementPosition === 'first' ? theme.color[color] : theme.color.grey2};
      border-style: solid;
      border-top-width: ${({ borderWidth }) => borderWidth};
      border-bottom-width: ${({ borderWidth }) => borderWidth};
      border-radius: ${({ theme }) => theme.dimension.borderRadius1};
      display: block;
    `

    const CustomConnector: FC<StepConnectorProps> = (props) => (
      <StepConnectorRoot {...props}>
        <CustomConnectorLine {...props} borderWidth={props.variant === 'simple' ? '2px' : '4px'} />
      </StepConnectorRoot>
    )

    return (
      <Steps {...knobs} connector={<CustomConnector color="black" />}>
        {steps.map(({ title }, index) => (
          <Step key={index} title={title} description={description} />
        ))}
      </Steps>
    )
  },
  {
    info: withConnectorReadme,
  },
)

stories.add(
  'Uniform',
  () => {
    const steps = [{ title: 'One' }, { title: 'Two' }, { title: 'Three' }, { title: 'Four' }]
    const stepsIndex: number[] = steps.map((el, index) => index)

    const knobs: StepsProps = {
      color: select('color', colors, 'primary'),
      activeStep: select('activeStep', stepsIndex, 2),
      completedStep: select('completedStep', [-1, ...stepsIndex], 1),
      variant: radios('variant', variants, 'uniform'),
    }

    const description = text('description', 'This is a description')

    return (
      <Steps {...knobs}>
        {steps.map(({ title }, index) => (
          <Step key={index} title={title} description={description} />
        ))}
      </Steps>
    )
  },
  {
    info: readme,
  },
)

stories.add(
  'variable arrays',
  withState(
    {
      steps: [{ title: 'Sign In' }, { title: 'Address' }, { title: 'Payment' }, { title: 'Summary' }],
      activeStep: 2,
      completedStep: 1,
    },
    (store) => {
      const {
        state: { steps, activeStep, completedStep },
      } = store

      const knobs: StepsProps = {
        activeStep,
        completedStep,
        color: select('color', colors, 'primary'),
        variant: radios('variant', variants, 'prominent'),
      }

      const increment = button('Add an element', () => {
        store.set({
          steps: [...steps, { title: 'Added' }],
        })
      })

      const decrement = button('Remove an element', () => {
        if (steps.length > 3) {
          store.set({ steps: steps.slice(0, -1) })
        } else {
          store.set({ steps })
        }
      })

      const reset = button('Reset to initial state', () => {
        store.reset()
      })

      const handleChange = (step: number) => {
        store.set({ activeStep: step, completedStep: step - 1 })
      }

      return (
        <Steps {...knobs} onChange={handleChange}>
          {steps.map(({ title }, index) => (
            <Step key={index} />
          ))}
        </Steps>
      )
    },
  ),
  {
    info: withVariableArrayReadme,
  },
)
