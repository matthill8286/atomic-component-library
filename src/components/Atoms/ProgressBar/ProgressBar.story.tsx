import { boolean, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { ProgressBar } from './ProgressBar'

storiesOf('Design System/Atoms/ProgressBar', module).add('Default', () => {
  const value = number('Value', 50)
  const small = boolean('Small Version', false)

  return <ProgressBar value={value} small={small} />
})
