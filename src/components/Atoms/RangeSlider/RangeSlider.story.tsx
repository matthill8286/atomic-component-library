import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { boolean, number, text } from '@storybook/addon-knobs'

import { RangeSlider } from './RangeSlider'

storiesOf('Design System/Atoms/RangeSlider', module).add('Default', () => (
  <RangeSlider
    min={number('Min', 0)}
    max={number('Max', 1500)}
    values={[300, 1000]}
    unitMasked={text('Unit', '')}
    disabled={boolean('Disabled', false)}
    errorMessage=""
    onChange={() => {}}
  />
))
