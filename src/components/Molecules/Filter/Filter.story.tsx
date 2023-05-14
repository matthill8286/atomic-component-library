import { withState } from '@dump247/storybook-state'
import { action } from '@storybook/addon-actions'
import { select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Filter } from './Filter'
import { FilterProps, FilterType } from './Filter.interface'
import Readme from './Filter.readme.md'

const knobs = (): FilterProps => ({
  type: select('type', ['default', 'selected', 'active'], 'default'),
  label: text('label', 'type a label'),
  onClick: action('filter-click'),
  onClear: action('filter-clear'),
})

const stories = storiesOf('Design System/Molecules/Filter', module)

stories.add(
  'default',
  () => {
    return <Filter {...knobs()} />
  },
  {
    info: Readme,
  },
)

stories.add(
  'active',
  () => {
    return <Filter {...knobs()} type="active" />
  },
  {
    info: Readme,
  },
)

stories.add(
  'handle active',
  withState({ status: 'default' as FilterType }, (store) => (
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
  )),
  {
    info: Readme,
  },
)
