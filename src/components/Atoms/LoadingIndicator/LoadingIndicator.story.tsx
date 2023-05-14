import { number, radios } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { LoadingIndicator, LoadingIndicatorColor, LoadingIndicatorProps } from './LoadingIndicator'

const loadingIndicatorColor: { [key: string]: LoadingIndicatorColor } = {
  white: 'white',
  black: 'black',
  primary: 'primary',
}

const knobs = (): LoadingIndicatorProps => {
  return {
    isVisible: true,
    color: radios('Color', loadingIndicatorColor, loadingIndicatorColor.primary),
    size: number('Size', 50),
  }
}

storiesOf('Design System/Atoms/LoadingIndicator', module).add('Default', () => <LoadingIndicator {...knobs()} />)
