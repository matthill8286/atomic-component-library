import { withState } from '@dump247/storybook-state'
import * as React from 'react'
import { Foldable } from './Foldable'

const toggle = (store) => {
  store.set({ checkedValue: !store.state.checkedValue })
}

export default {
  title: 'Design System/Atoms/Foldable',
}

export const Default = withState({ checkedValue: false }, (store) => (
  <React.Fragment>
    <Foldable isOpen={store.state.checkedValue}>HIDDEN</Foldable>
    <button onClick={() => toggle(store)}>Toggle Content</button>
  </React.Fragment>
))
