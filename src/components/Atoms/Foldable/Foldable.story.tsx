import * as React from 'react'
import { Foldable } from './Foldable'

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
