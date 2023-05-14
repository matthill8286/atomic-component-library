import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { BackToTop } from './BackToTop'
import { ScrollAwareBackToTop } from './ScrollAwareBackToTop'

storiesOf('Design System/Molecules/Back To Top', module)
  .add('Default', () => <BackToTop visible={'VISIBLE'} />)
  .add('Transparent', () => <BackToTop visible={'TRANSPARENT'} />)
  .add('Hidden', () => <BackToTop visible={'HIDDEN'} />)
  .add('onClick Event', () => <BackToTop visible={'TRANSPARENT'} onClick={action('onClick')} />)
  .add('ScrollAwareBackToTop', () => (
    <div style={{ height: '200vh' }}>
      Scroll down
      <ScrollAwareBackToTop />
    </div>
  ))
