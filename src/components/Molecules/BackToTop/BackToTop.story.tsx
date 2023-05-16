import { action } from '@storybook/addon-actions'
import * as React from 'react'
import { BackToTop } from './BackToTop'
import { ScrollAwareBackToTop } from './ScrollAwareBackToTop'

export default {
  title: 'Design System/Molecules/Back To Top',
}

export const Default = () => <BackToTop visible={'VISIBLE'} />
export const Transparent = () => <BackToTop visible={'TRANSPARENT'} />
export const Hidden = () => <BackToTop visible={'HIDDEN'} />
export const OnClickEvent = () => <BackToTop visible={'TRANSPARENT'} onClick={action('onClick')} />

OnClickEvent.story = {
  name: 'onClick Event',
}

export const _ScrollAwareBackToTop = () => (
  <div style={{ height: '200vh' }}>
    Scroll down
    <ScrollAwareBackToTop />
  </div>
)

_ScrollAwareBackToTop.story = {
  name: 'ScrollAwareBackToTop',
}
