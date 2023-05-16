import { boolean, number } from '@storybook/addon-knobs'
import * as React from 'react'
import { ProgressBar } from './ProgressBar'

export default {
  title: 'Design System/Atoms/ProgressBar',
}

export const Default = () => {
  const value = number('Value', 50)
  const small = boolean('Small Version', false)

  return <ProgressBar value={value} small={small} />
}
