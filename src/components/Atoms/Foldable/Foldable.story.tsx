import { withState } from '@dump247/storybook-state'
import * as React from 'react'
import { Foldable } from './Foldable'

const toggle = (store) => {
  store.set({ checkedValue: !store.state.checkedValue })
}

export default {
  title: 'Design System/Atoms/Foldable',
  component: Foldable,
  parameters: {
    info: 'Foldable component',
  },
  args: {
    isOpen: true,
  },
}

export const Default = (args) => (
  <React.Fragment>
    <Foldable {...args}>HIDDEN</Foldable>
  </React.Fragment>
)
