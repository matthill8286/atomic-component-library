## Input Form Field

Use Input component to enter text, number, password or date.

The `state` prop can be used to manage validation and appereance.

The `inputStyle` large can be used when the focus of the page is the form, use this size. Desktop only.
The `inputStyle` dense is used mainly on mobile, or on desktop when a form is secondary use only.

```js
export type InputState = 'idle' | 'valid' | 'error' | 'disabled'
export type InputType = 'text' | 'date' | 'password' | 'number'
export type InputStyle = 'default' | 'dense' | 'large'
export type TranslationText = string
export type InputValue = string

export interface InputProps extends InputEvents {
  className?: string
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  inputMaskProps?: InputMaskProps
  state?: InputState
  inputType?: InputType
  inputStyle?: InputStyle
  label?: TranslationText
  placeholder?: TranslationText
  errorMessage?: TranslationText
  helpText?: string
  helper?: ReactNode
  inputIcon?: ReactElement<IconProps>
  autofocus?: boolean
  value?: InputValue
  inputRef?: Ref<HTMLInputElement>
}
```

The Input is currently triggering this `events`: `onClick, onClickIcon, onChange, onKeyDown, onKeyUp, onBlur, onFocus, onMouseEnter, onMouseLeave`.

The mask can be enabled by the `inputMaskProps`, the package `react-input-mask` is used for this type of component.

Since the storysource is not available when we use `withState` this is the stories source:

```js
const inputTextKnobs = (): InputProps => ({
  label: text('label', 'insert a label'),
  placeholder: text('placeHolder', 'write a placeholder'),
  state: radios('state', inputStates, 'idle'),
  inputStyle: radios('Style', styleTypes, 'default'),
  inputType: radios('inputType', inputTypes, 'text'),
})

const stories = storiesOf('Molecules/Form Fields/Input', module)

stories.add(
  'type text',
  withState({ value: undefined }, (store) => {
    const onChange = ({ target: { value } }) => {
      store.set({ value })
    }
    return <Input value={store.state.value} onChange={onChange} inputType="text" {...inputTextKnobs()} />
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
  'with custom icon',
  withState({ value: '' }, (store) => {
    const customIcon = (
      <Icon width={16} height={16}>
        <IconCalendar />
      </Icon>
    )
    return <Input label="Insert something" inputIcon={customIcon} value={store.state.value} />
  }),
  options,
)

const inputPasswordKnobs = () => ({
  state: radios('state', inputStates, 'idle'),
  inputStyle: radios('Style', styleTypes, 'default'),
})

stories.add(
  'type password',
  withState({ value: '' }, (store) => (
    <InputPassword
      {...inputPasswordKnobs()}
      label="Insert password"
      placeholder="Insert your super secret password"
      value={store.state.value}
    />
  )),
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
      inputMaskProps={{ mask: `+4\\9 99 999 99` }}
      inputType="text"
      label="Insert date"
    />
  )),
  options,
)
```
