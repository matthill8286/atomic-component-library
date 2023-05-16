import { withState } from '@dump247/storybook-state'
import { boolean, number, text } from '@storybook/addon-knobs'
import { InputRange, InputRangeProps } from './InputRange'

// const stories = storiesOf('Design System/Molecules/InputRange/Basic', module)

export const Default = withState({ value: '0.5' }, (store) => {
  const onChange = (event) => {
    const {
      target: { value },
    } = event
    store.set({ value })
  }

  const knobs = (): InputRangeProps => ({
    min: text('min', '0'),
    max: text('max', '1'),
    step: text('step', '0.1'),
    markAmount: number('markAmount', 1),
    showMarks: boolean('Show Marks', true),
    withBubble: boolean('With Bubble', true),
    allowMoreThanMax: boolean('allowMoreThanMax', false),
  })

  return <InputRange value={store.state.value} onChange={onChange} {...knobs()} />
})

Default.story = {
  name: 'default',
}

export default {
  title: 'Design System/Molecules/InputRange',
  component: InputRange,
}
