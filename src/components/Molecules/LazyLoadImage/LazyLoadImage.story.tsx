import { number } from '@storybook/addon-knobs'
import React from 'react'
import { LazyLoadImage } from './LazyLoadImage'

const highResSrc = 'https://loremflickr.com/900/650'
const lowResSrc = 'https://loremflickr.com/900/650'

const thresholdOptions = {
  range: true,
  min: 0,
  max: 1,
  step: 0.01,
}
const rootMarginOptions = {
  range: true,
  min: -100,
  max: 500,
  step: 10,
}

const threshold = number('Inner Threshold', 0, thresholdOptions)
const rootMargin = `${number('Outer Threshold', 0, rootMarginOptions)}px`

export default {
  title: 'Design System/Molecules/LazyLoadImage',
}

export const Default = () => {
  return (
    <div>
      scroll down
      <div style={{ height: '1000px' }}></div>
      here it comes
      <LazyLoadImage src={highResSrc} threshold={threshold} rootMargin={rootMargin} width={'800px'} height={'600px'} />
      here it was
    </div>
  )
}

export const Lqip = () => {
  return (
    <div>
      scroll down
      <div style={{ height: '1000px' }}></div>
      here it comes
      <div style={{ height: '600px', width: '800px' }}>
        <LazyLoadImage src={highResSrc} lowResSrc={lowResSrc} threshold={threshold} rootMargin={rootMargin} withLQIP />
      </div>
      here it was
    </div>
  )
}

Lqip.story = {
  name: 'LQIP',
}

export const Native = () => {
  return (
    <div>
      scroll down
      <div style={{ height: '1000px' }}></div>
      here it comes
      <LazyLoadImage
        src={highResSrc}
        threshold={threshold}
        rootMargin={rootMargin}
        width={'800px'}
        height={'600px'}
        withNativeLoading
      />
      here it was
    </div>
  )
}
