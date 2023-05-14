import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Breadcrumb } from './Breadcrumb'

const paths = [
  {
    name: 'Computer & Büro',
    link: '',
  },
  {
    name: 'Drucker & Scanner',
    link: '',
  },
  {
    name: 'Multifunktionsdrucker',
    link: '',
  },
]

const knobs = () => ({
  margin: text('margin', 'lg sm'),
  padding: text('padding', 'lg sm'),
})

storiesOf('Design System/Molecules/Breadcrumb', module)
  .add('Default', () => <Breadcrumb {...knobs()} paths={paths} hideLastElement={boolean('Hide Last Element', false)} />)
  .add('Default as Skeleton', () => <Breadcrumb loading paths={[]} />)
