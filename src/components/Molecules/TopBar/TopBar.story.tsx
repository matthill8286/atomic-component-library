import { Link } from '@/components/Atoms/Link'
import { TopBar } from './TopBar'

// const stories = storiesOf('Design System/Molecules/TopBar', module)

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
