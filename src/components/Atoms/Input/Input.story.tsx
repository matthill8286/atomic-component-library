import { withState } from '@dump247/storybook-state'
import { radios, text } from '@storybook/addon-knobs'
import { OtherMore, OtherSearch } from 'atomic-icon-library'
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
  inputStyle: radios('Style', styleTypes, 'default'),
  inputType: radios('inputType', inputTypes, 'text'),
})

// const stories = storiesOf('Design System/Molecules/Form Fields/Input', module)

const options = { info: Readme }

export const TypeText = withState({ value: undefined }, (store) => {
  const onChange = ({ target: { value } }) => {
    store.set({ value })
  }
  return <Input inputType="text" onChange={onChange} value={store.state.value} {...inputTextKnobs()} />
})

TypeText.story = {
  name: 'type text',
  parameters: options,
}

export const WithDefaultValue = withState({ value: 'halloooooooooo' }, (store) => (
  <Input inputType="text" value={store.state.value} {...inputTextKnobs()} />
))

WithDefaultValue.story = {
  name: 'with default value',
  parameters: options,
}

export const WithAutofocus = withState({ value: '' }, (store) => {
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
})

WithAutofocus.story = {
  name: 'with autofocus',
  parameters: options,
}

export const WithHelpText = withState({ value: '' }, (store) => (
  <Input {...inputTextKnobs()} helpText="help text" value={store.state.value} />
))

WithHelpText.story = {
  name: 'with help text',
  parameters: options,
}

export const WithCustomHelper = withState({ value: '' }, (store) => (
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
))

WithCustomHelper.story = {
  name: 'with custom helper',
  parameters: options,
}

export const WithErrorMessage = withState({ value: "that's bad" }, (store) => (
  <Input state="error" label="Oh my label!" value={store.state.value} errorMessage="i'm sorry!" />
))

WithErrorMessage.story = {
  name: 'with error message',
  parameters: options,
}

export const WithErrorMessageAndHelpText = withState({ value: "that's bad" }, (store) => (
  <Input state="error" label="Oh my label!" value={store.state.value} helpText="Help text" errorMessage="i'm sorry!" />
))

WithErrorMessageAndHelpText.story = {
  name: 'with error message and help text',
  parameters: options,
}

export const WithCustomIcon = withState({ value: '' }, (store) => {
  return (
    <Input
      inputIcon={<OtherSearch />}
      inputIconSize={{ height: 16, width: 16 }}
      label="Insert something"
      value={store.state.value}
    />
  )
})

WithCustomIcon.story = {
  name: 'with custom icon',
  parameters: options,
}

const inputPasswordKnobs = () => ({
  inputStyle: radios('Style', styleTypes, 'default'),
})

export const TypePassword = withState({ value: '' }, (store) => {
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
})

TypePassword.story = {
  name: 'type password',
  parameters: options,
}

const inputDateKnobs = () => ({
  inputStyle: radios('Style', styleTypes, 'default'),
})

export const InputMaskDate = withState({ value: '' }, (store) => (
  <Input
    {...inputDateKnobs()}
    value={store.state.value}
    onChange={({ target: { value } }) => store.set({ value })}
    inputMaskProps={{ mask: '99.99.9999' }}
    inputType="text"
    label="Insert date"
  />
))

InputMaskDate.story = {
  name: 'input mask date',
  parameters: options,
}

export const InputMaskPhone = withState({ value: '' }, (store) => (
  <Input
    {...inputDateKnobs()}
    value={store.state.value}
    onChange={({ target: { value } }) => store.set({ value })}
    inputMaskProps={{ mask: `+4\\4 7567 777 888` }}
    inputType="text"
    label="Insert date"
  />
))

InputMaskPhone.story = {
  name: 'input mask phone',
  parameters: options,
}

const inputCustomMask = () => ({
  mask: text('mask', `£ 999`),
})

export const InputMaskCustom = withState({ value: '444' }, (store) => (
  <Input
    {...inputDateKnobs()}
    value={store.state.value}
    onChange={({ target: { value } }) => store.set({ value })}
    inputMaskProps={inputCustomMask()}
    inputType="text"
    label="Insert date"
  />
))

InputMaskCustom.story = {
  name: 'input mask custom',
  parameters: options,
}

export const _InputArea = withState({ value: '' }, (store) => (
  <InputArea
    {...inputDateKnobs()}
    value={store.state.value}
    onChange={({ target: { value } }) => store.set({ value })}
    rows={4}
    inputType="text"
    label="Insert multiline"
    placeholder="Placeholder"
  />
))

_InputArea.story = {
  name: 'input area',
  parameters: options,
}

export const Accessibility = withState({ value: undefined }, (store) => {
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
})

Accessibility.story = {
  parameters: options,
}

export const AccessibilityError = withState({ value: undefined }, (store) => {
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
})

AccessibilityError.story = {
  name: 'Accessibility: Error',
  parameters: options,
}
