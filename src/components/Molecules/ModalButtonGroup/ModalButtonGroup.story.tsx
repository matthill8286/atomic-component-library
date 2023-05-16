import { action } from '@storybook/addon-actions'
import { boolean, select } from '@storybook/addon-knobs'
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

export default {
  title: 'Design System/Molecules/Modals/ModalButtonGroup',
  excludeStories: ['types'],
}

export const Default = () => {
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
}

Default.story = {
  parameters: { info: Readme },
}

export const PrimaryButtonControl = () => {
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
}

PrimaryButtonControl.story = {
  name: 'Primary Button control',
  parameters: { info: Readme },
}
