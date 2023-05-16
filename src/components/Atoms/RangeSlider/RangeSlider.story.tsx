import * as React from 'react'

import { boolean, number, text } from '@storybook/addon-knobs'

import { RangeSlider } from './RangeSlider'

export default {
  title: 'Design System/Atoms/RangeSlider',
}

export const Default = () => (
  <RangeSlider
    min={number('Min', 0)}
    max={number('Max', 1500)}
    values={[300, 1000]}
    unitMasked={text('Unit', '')}
    disabled={boolean('Disabled', false)}
    errorMessage=""
    onChange={() => {}}
  />
)
