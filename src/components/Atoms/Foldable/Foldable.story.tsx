import { withState } from '@dump247/storybook-state'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Foldable } from './Foldable'

const toggle = (store) => {
  store.set({ checkedValue: !store.state.checkedValue })
}

storiesOf('Design System/Atoms/Foldable', module).add(
  'Default',
  withState({ checkedValue: false }, (store) => (
    <React.Fragment>
      <Foldable isOpen={store.state.checkedValue}>HIDDEN</Foldable>
      <button onClick={() => toggle(store)}>Toggle Content</button>
    </React.Fragment>
  )),
)
