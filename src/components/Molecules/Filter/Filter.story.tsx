import { withState } from '@dump247/storybook-state'
import { action } from '@storybook/addon-actions'
import { select, text } from '@storybook/addon-knobs'
import { Filter } from './Filter'
import { FilterProps, FilterType } from './Filter.interface'
import Readme from './Filter.readme.md'

const knobs = (): FilterProps => ({
  type: select('type', ['default', 'selected', 'active'], 'default'),
  label: text('label', 'type a label'),
  onClick: action('filter-click'),
  onClear: action('filter-clear'),
})

// const stories = storiesOf('Design System/Molecules/Filter', module)

export const Default = () => {
  return <Filter {...knobs()} />
}

Default.story = {
  name: 'default',

  parameters: {
    info: Readme,
  },
}

export const Active = () => {
  return <Filter {...knobs()} type="active" />
}

Active.story = {
  name: 'active',

  parameters: {
    info: Readme,
  },
}

export const HandleActive = withState({ status: 'default' as FilterType }, (store) => (
  <Filter
    type={store.state.status}
    label="oh my label!"
    onClick={() => {
      store.set({ status: store.state.status === 'selected' ? 'default' : 'selected' })
    }}
    onClear={() => {
      store.set({ status: 'default' })
    }}
  />
))

HandleActive.story = {
  name: 'handle active',

  parameters: {
    info: Readme,
  },
}
