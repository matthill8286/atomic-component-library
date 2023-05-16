import { select } from '@storybook/addon-knobs'
import { Elevation } from '@/types/theme'
import { SelectionDirection, SelectItem, SelectMultiGroupProps } from './SelectGroup.interface'
import { SelectMultiGroup } from './SelectMultiGroup'
import readme from './SelectMultiGroup.readme.md'

const directions: SelectionDirection[] = ['column', 'row']

const elevations: Elevation[] = [0, 1, 2, 3, 4]

// const stories = storiesOf('Design System/Molecules/SelectMultiGroup', module)

export const group: SelectItem[] = [
  { id: '1', content: <div>Option 1</div> },
  { id: '2', content: <div>Option 2</div> },
  { id: '3', content: <div>Option 3</div> },
  { id: '4', content: <div>Option 4</div> },
  { id: '5', content: <div>Option 5</div> },
]

export const Default = () => {
  const knobs: SelectMultiGroupProps = {
    direction: select('Direction', directions, 'column'),
    elevation: select('Elevation', elevations, 0),
    elevationHover: select('Elevation on Hover', elevations, 0),
    group,
    onChange: () => null,
    selected: [],
  }
  return <SelectMultiGroup {...knobs} />
}

Default.story = {
  parameters: { info: readme },
}

export const WithElevations = () => {
  const knobs: SelectMultiGroupProps = {
    direction: select('Direction', directions, 'column'),
    elevation: select('Elevation', elevations, 1),
    elevationHover: select('Elevation on Hover', elevations, 2),
    group,
    onChange: () => null,
    selected: [],
  }
  return <SelectMultiGroup {...knobs} />
}

WithElevations.story = {
  name: 'With elevations',
  parameters: { info: readme },
}

export const Selected = () => {
  const knobs: SelectMultiGroupProps = {
    direction: select('Direction', directions, 'column'),
    elevation: select('Elevation', elevations, 0),
    elevationHover: select('Elevation on Hover', elevations, 0),
    group,
    onChange: () => null,
    selected: ['1', '2', '5'],
  }
  return <SelectMultiGroup {...knobs} />
}

Selected.story = {
  parameters: { info: readme },
}

export const SelectedWithElevations = () => {
  const knobs: SelectMultiGroupProps = {
    direction: select('Direction', directions, 'column'),
    elevation: select('Elevation', elevations, 1),
    elevationHover: select('Elevation on Hover', elevations, 2),
    group,
    onChange: () => null,
    selected: ['1', '2', '5'],
  }
  return <SelectMultiGroup {...knobs} />
}

SelectedWithElevations.story = {
  name: 'Selected with elevations',
  parameters: { info: readme },
}
