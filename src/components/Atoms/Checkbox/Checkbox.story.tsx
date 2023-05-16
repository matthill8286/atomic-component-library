import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import * as React from 'react'
import { SelectableState } from '@/components/Atoms/Selectable/Selectable.interface'
import { Checkbox } from './Checkbox'

const selectableStates: { [key in SelectableState]: SelectableState } = {
  idle: 'idle',
  error: 'error',
  disabled: 'disabled',
}

export default {
  title: 'Design System/Atoms/Checkbox',
}

export const _Checkbox = () => {
  const knobs = () => {
    return {
      isChecked: boolean('Checked', false),
      state: select('State', selectableStates, 'idle'),
      errorMessage: text('Errormessage', 'Ops something went wrong!'),
      selectableSize: select('Selectable size', { Large: 'large', Small: 'small' }, 'large'),
      label: text('Label', 'Label name'),
      value: text('Value', 'Some value'),
    }
  }
  return <Checkbox name="checkbox" selectableId="selectableId" {...knobs()} onChangeValue={action('onchangevalue')} />
}
