import { action } from '@storybook/addon-actions'
import { number, text } from '@storybook/addon-knobs'
import { Dropdown } from './Dropdown'
import { DropdownProps } from './Dropdown.interface'
import readme from './Dropdown.readme.mdx'

const options = [
  { id: '0', label: 'BMW' },
  { id: '1', label: 'Audi' },
  { id: '2', label: 'Mercedes' },
  { id: '3', label: 'Porsche' },
  { id: '4', label: 'Very long text item that is long rly rly long long long' },
]

const commonKnobs = {
  onChange: action('on-change'),
  options,
}

export const Initial = () => {
  const knobs: DropdownProps = {
    ...commonKnobs,
    label: text('label', 'type a label'),
  }

  return <Dropdown {...knobs} />
}

Initial.story = {
  parameters: { info: readme },
}

export const Selected = () => {
  const knobs: DropdownProps = {
    ...commonKnobs,
    label: text('Label', 'type a label'),
    initialIndex: number('initialIndex', 0),
  }

  return <Dropdown {...knobs} />
}

Selected.story = {
  parameters: { info: readme },
}

export const NativeList = () => {
  const knobs: DropdownProps = {
    ...commonKnobs,
    label: text('Label', 'type a label'),
    initialIndex: number('initialIndex', 0),
    listType: 'native',
  }

  return <Dropdown {...knobs} />
}

NativeList.story = {
  name: 'Native list',
  parameters: { info: readme },
}

export default {
  title: 'Design System/Molecules/Dropdown',
}
