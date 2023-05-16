import { Switch } from './Switch'
import { withState } from '@dump247/storybook-state'
import Readme from './Switch.readme.mdx'
import { boolean, text } from '@storybook/addon-knobs'

// const stories = storiesOf('Design System/Atoms/Switch', module)

const knobs = () => {
  return {
    ariaLabel: text('Label', 'Join MediaMarkt Club!!!'),
    disabled: boolean('Disabled', false),
  }
}

export const Default = withState({ checked: false }, (store) => (
  <Switch
    checked={store.state.checked}
    id="switch-atom"
    onClick={() => store.set({ checked: !store.state.checked })}
    {...knobs()}
  />
))

Default.story = {
  parameters: { info: Readme },
}

export default {
  title: 'Design System/Atoms/Switch',
}
