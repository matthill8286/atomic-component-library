import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import * as React from 'react'
import { Button } from '@/components/Atoms/Button'
import { Cell, Grid, Row } from '@/components/Helper/Grid'
import { SelectableState } from '@/components/Atoms/Selectable'
import { RadioButton } from './RadioButton'
import { RadioGroup } from './RadioGroup'
import { OtherAdd } from 'atomic-icon-library'

const selectableStates: { [key in SelectableState]: SelectableState } = {
  idle: 'idle',
  error: 'error',
  disabled: 'disabled',
}

export default {
  title: 'Design System/Atoms/RadioButton',
}

export const _RadioButton = () => {
  const knobs = () => {
    return {
      displayType: select('Display type', { Radio: 'radio', Button: 'button' }, 'radio'),
      withIcon: boolean('With icon', false),
      isChecked: boolean('Checked', false),
      state: select('State', selectableStates, 'idle'),
      errorMessage: text('Errormessage', 'Ops something went wrong!'),
      selectableSize: select('Selectable size', { Large: 'large', Small: 'small' }, 'large'),
      label: text('Label', 'Label name'),
      value: text('Value', 'Some value'),
    }
  }

  const withIcon = knobs().withIcon ? { icon: <OtherAdd /> } : undefined
  return (
    <RadioButton
      name="radio"
      selectableId="radioId"
      {...knobs()}
      {...withIcon}
      onChangeValue={(value) => action(`${value} changed`)}
    />
  )
}

_RadioButton.story = {
  name: 'Radio button',
}

export const MoreThanOneButtonWithTheSameNameGroup = () => {
  const knobs = () => {
    return {
      displayType: select('Display type', { Radio: 'radio', Button: 'button' }, 'radio'),
      withIcon: boolean('With icon', false),
      isInactive: boolean('Inactive', false),
      selectableSize: select('Selectable size', { Large: 'large', Small: 'small' }, 'large'),
      label: text('Label', 'Label name'),
    }
  }
  const withIcon = knobs().withIcon ? { icon: <OtherAdd /> } : undefined

  return (
    <>
      <RadioButton
        selectableId="radioId1"
        {...knobs()}
        {...withIcon}
        onChangeValue={(value) => action(`${value} changed`)}
        name="radios"
        value="btn1"
      />
      <RadioButton
        selectableId="radioId2"
        {...knobs()}
        {...withIcon}
        onChangeValue={(value) => action(`${value} changed`)}
        name="radios"
        value="btn2"
      />
    </>
  )
}

MoreThanOneButtonWithTheSameNameGroup.story = {
  name: 'More than one button with the same name (group)',
}

export const _RadioGroup = () => {
  return (
    <RadioGroup state={select('State', selectableStates, 'idle')} name="my-group" onChange={action('New value')}>
      {({ name, onChange, selected, state }) => {
        const value1 = 'btn1'
        const value2 = 'btn2'
        return (
          <Grid>
            <Row>
              <Cell>
                <RadioButton
                  selectableId="radioId1"
                  name={name}
                  onChangeValue={onChange}
                  isChecked={selected === value1}
                  value={value1}
                  label="Label name one"
                  state={state}
                />
              </Cell>
              <Cell>
                <RadioButton
                  selectableId="radioId2"
                  name={name}
                  onChangeValue={onChange}
                  isChecked={selected === value2}
                  value={value2}
                  label="Label name two"
                  state={state}
                />
              </Cell>
            </Row>
            <Row>
              <Cell>
                Selected Option is now: <strong>{selected || 'nothing'}</strong>
              </Cell>
            </Row>
            <Row>
              <Cell>
                <Button disabled={state === 'disabled' ? true : false} onClick={() => onChange()}>
                  Unselect
                </Button>
              </Cell>
            </Row>
          </Grid>
        )
      }}
    </RadioGroup>
  )
}

_RadioGroup.story = {
  name: 'RadioGroup',
}
