import { Link } from '@/components/Atoms/Link'
import { TopBar } from './TopBar'

// const stories = storiesOf('Design System/Molecules/TopBar', module)

export default {
  title: 'Design System/Molecules/TopBar',
  component: TopBar,
}

const entries = [
  'Virtual Gathering',
  'Conference Zone',
  'Recommended Products',
  <Link href="www.google.com" inline bold fontSize="sm" color="grey5" decorationColor="grey5" key="link">
    Test
  </Link>,
]

export const Default = () => {
  return <TopBar entries={entries} />
}
