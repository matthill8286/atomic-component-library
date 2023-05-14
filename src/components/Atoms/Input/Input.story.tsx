import { withState } from '@dump247/storybook-state'
import { radios, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { OtherMore, OtherSearch } from '@matthill8286/atomic-icon-library'
import { CopyText } from '../Typography'
import { Input } from './Input'
import { InputProps, InputState, InputStyle, InputType } from './Input.interface'
import Readme from './Input.readme.md'
import { InputArea } from './InputArea'
import { InputPassword } from './InputPassword'

const styleTypes: { [key: string]: InputStyle } = {
  default: 'default',
  large: 'large',
  dense: 'dense',
}

const inputStates: { [key in InputState]: InputState } = {
  idle: 'idle',
  valid: 'valid',
  error: 'error',
  disabled: 'disabled',
}

const inputTypes: { [key: string]: InputType } = {
  text: 'text',
  number: 'number',
  password: 'password',
  date: 'date',
}

const inputTextKnobs = (): InputProps => ({
  label: text('label', 'insert a label'),
  margin: text('margin', ''),
  padding: text('padding', ''),
  placeholder: text('placeHolder', 'write a placeholder'),
  state: radios('state', inputStates, 'idle'),
  inputStyle: radios('Style', styleTypes, 'default'),
  inputType: radios('inputType', inputTypes, 'text'),
})

const stories = storiesOf('Design System/Molecules/Form Fields/Input', module)

const options = { info: Readme }

stories.add(
  'type text',
  withState({ value: undefined }, (store) => {
    const onChange = ({ target: { value } }) => {
      store.set({ value })
    }
    return <Input inputType="text" onChange={onChange} value={store.state.value} {...inputTextKnobs()} />
  }),
  options,
)

stories.add(
  'with default value',
  withState({ value: 'halloooooooooo' }, (store) => (
    <Input inputType="text" value={store.state.value} {...inputTextKnobs()} />
  )),
  options,
)

stories.add(
  'with autofocus',
  withState({ value: '' }, (store) => {
    const onChange = ({ target: { value } }) => {
      store.set({ value })
    }
    return (
      <Input
        label="Label"
        placeholder="Placeholder"
        helper={<CopyText>help text</CopyText>}
        onChange={onChange}
        autofocus
        value={store.state.value}
      />
    )
  }),
  options,
)

stories.add(
  'with help text',
  withState({ value: '' }, (store) => <Input {...inputTextKnobs()} helpText="help text" value={store.state.value} />),
  options,
)

stories.add(
  'with custom helper',
  withState({ value: '' }, (store) => (
    <Input
      {...inputTextKnobs()}
      label="Label"
      placeholder="Placeholder"
      value={store.state.value}
      helper={
        <div>
          <CopyText>I&apos;m the helper prop... I can be any component you like...</CopyText>
          <CopyText>Additional content</CopyText>
        </div>
      }
    />
  )),
  options,
)

stories.add(
  'with error message',
  withState({ value: "that's bad" }, (store) => (
    <Input state="error" label="Oh my label!" value={store.state.value} errorMessage="i'm sorry!" />
  )),
  options,
)

stories.add(
  'with error message and help text',
  withState({ value: "that's bad" }, (store) => (
    <Input
      state="error"
      label="Oh my label!"
      value={store.state.value}
      helpText="Help text"
      errorMessage="i'm sorry!"
    />
  )),
  options,
)

stories.add(
  'with custom icon',
  withState({ value: '' }, (store) => {
    return (
      <Input
        inputIcon={<OtherSearch />}
        inputIconSize={{ height: 16, width: 16 }}
        label="Insert something"
        value={store.state.value}
      />
    )
  }),
  options,
)

const inputPasswordKnobs = () => ({
  state: radios('state', inputStates, 'idle'),
  inputStyle: radios('Style', styleTypes, 'default'),
})

stories.add(
  'type password',
  withState({ value: '' }, (store) => {
    const handleChange = ({ target: { value } }) => {
      store.set({ value })
    }
    return (
      <InputPassword
        {...inputPasswordKnobs()}
        onChange={handleChange}
        label="Insert password"
        placeholder="Insert your super secret password"
        value={store.state.value}
      />
    )
  }),
  options,
)

const inputDateKnobs = () => ({
  state: radios('state', inputStates, 'idle'),
  inputStyle: radios('Style', styleTypes, 'default'),
})

stories.add(
  'input mask date',
  withState({ value: '' }, (store) => (
    <Input
      {...inputDateKnobs()}
      value={store.state.value}
      onChange={({ target: { value } }) => store.set({ value })}
      inputMaskProps={{ mask: '99.99.9999' }}
      inputType="text"
      label="Insert date"
    />
  )),
  options,
)

stories.add(
  'input mask phone',
  withState({ value: '' }, (store) => (
    <Input
      {...inputDateKnobs()}
      value={store.state.value}
      onChange={({ target: { value } }) => store.set({ value })}
      inputMaskProps={{ mask: `+4\\4 7567 777 888` }}
      inputType="text"
      label="Insert date"
    />
  )),
  options,
)

const inputCustomMask = () => ({
  mask: text('mask', `£ 999`),
})

stories.add(
  'input mask custom',
  withState({ value: '444' }, (store) => (
    <Input
      {...inputDateKnobs()}
      value={store.state.value}
      onChange={({ target: { value } }) => store.set({ value })}
      inputMaskProps={inputCustomMask()}
      inputType="text"
      label="Insert date"
    />
  )),
  options,
)

stories.add(
  'input area',
  withState({ value: '' }, (store) => (
    <InputArea
      {...inputDateKnobs()}
      value={store.state.value}
      onChange={({ target: { value } }) => store.set({ value })}
      rows={4}
      inputType="text"
      label="Insert multiline"
      placeholder="Placeholder"
    />
  )),
  options,
)

stories.add(
  'Accessibility',
  withState({ value: undefined }, (store) => {
    const onChange = ({ target: { value } }) => {
      store.set({ value })
    }
    return (
      <Input
        {...inputTextKnobs()}
        iconLabel="Enable self-destruct!"
        inputIcon={<OtherMore />}
        inputIconSize={{ height: 20, width: 20 }}
        inputProps={{ id: 'test-field', required: true }}
        inputType="text"
        label="Accessible Text Input"
        onChange={onChange}
        onClickIcon={() => alert('Boom!')}
        placeholder="Try tabbing to use icon..."
        value={store.state.value}
      />
    )
  }),
  options,
)

stories.add(
  'Accessibility: Error',
  withState({ value: undefined }, (store) => {
    const onChange = ({ target: { value } }) => {
      store.set({ value })
    }
    return (
      <Input
        {...inputTextKnobs()}
        errorMessage="You enetered the wrong information"
        inputProps={{ id: 'test-field', required: true }}
        inputType="text"
        label="Accessible Text Input With Error"
        onChange={onChange}
        placeholder="Enter some text..."
        state="error"
        value={store.state.value}
      />
    )
  }),
  options,
)
