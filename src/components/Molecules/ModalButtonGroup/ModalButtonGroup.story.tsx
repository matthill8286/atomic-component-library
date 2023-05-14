import { action } from '@storybook/addon-actions'
import { boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { ModalButtonGroup } from './ModalButtonGroup'
import { ModalButtonGroupAlignment, ModalButtonGroupProps } from './ModalButtonGroup.interface'
import Readme from './ModalButtonGroup.readme.md'

export const types: ModalButtonGroupAlignment[] = ['space-between', 'right', 'center']

const knobs = (): Partial<ModalButtonGroupProps> => {
  return {
    buttonAlignment: select('Button type', types, types[0]),
    showButtonSeparator: boolean('With Button Seperator', true),
  }
}

storiesOf('Design System/Molecules/Modals/ModalButtonGroup', module)
  .add(
    'Default',
    () => {
      return (
        <ModalButtonGroup
          {...knobs()}
          primaryButtonProps={{
            buttonLabel: 'Call to action',
            actionType: 'primary',
            onClick: action('onClick call to action'),
          }}
          secondaryButtonProps={{
            buttonLabel: 'Close',
            actionType: 'outlined',
            onClick: action('onClick close'),
          }}
        />
      )
    },
    { info: Readme },
  )
  .add(
    'Primary Button control',
    () => {
      return (
        <ModalButtonGroup
          {...knobs()}
          buttonAlignment="center"
          primaryButtonProps={{
            buttonLabel: 'Call to action',
            actionType: 'primary',
            onClick: action('onClick call to action'),
          }}
        />
      )
    },
    { info: Readme },
  )
