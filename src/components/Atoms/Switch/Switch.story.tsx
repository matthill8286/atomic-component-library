import { Switch } from './Switch'
import Readme from './Switch.readme.mdx'
import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'

// const stories = storiesOf('Design System/Atoms/Switch', module)

const knobs = () => {
  return {
    ariaLabel: text('Label', 'Join MediaMarkt Club!!!'),
    disabled: boolean('Disabled', false),
  }
}

export const Default = () => {
  const store = {
    checked: false,
    set: (state) => store.setState(state),
    setState: (state) => {
      store.checked = state.checked
    },
  }

  return (
    <Switch
      checked={store.checked}
      id="switch-atom"
      onClick={() => store.set({ checked: !store.checked })}
      {...knobs()}
    />
  )
}

Default.story = {
  parameters: { info: Readme },
}

export default {
  title: 'Design System/Atoms/Switch',
}
