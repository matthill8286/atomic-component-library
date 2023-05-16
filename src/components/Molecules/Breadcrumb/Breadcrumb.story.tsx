import { boolean, text } from '@storybook/addon-knobs'
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

export default {
  title: 'Design System/Molecules/Breadcrumb',
}

export const Default = () => (
  <Breadcrumb {...knobs()} paths={paths} hideLastElement={boolean('Hide Last Element', false)} />
)

export const DefaultAsSkeleton = () => <Breadcrumb loading paths={[]} />

DefaultAsSkeleton.story = {
  name: 'Default as Skeleton',
}
