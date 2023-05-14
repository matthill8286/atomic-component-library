import { select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Elevation } from '@/types/theme'
import { SelectionDirection, SelectItem, SelectMultiGroupProps } from './SelectGroup.interface'
import { SelectMultiGroup } from './SelectMultiGroup'
import readme from './SelectMultiGroup.readme.md'

const directions: SelectionDirection[] = ['column', 'row']

const elevations: Elevation[] = [0, 1, 2, 3, 4]

const stories = storiesOf('Design System/Molecules/SelectMultiGroup', module)

export const group: SelectItem[] = [
  { id: '1', content: <div>Option 1</div> },
  { id: '2', content: <div>Option 2</div> },
  { id: '3', content: <div>Option 3</div> },
  { id: '4', content: <div>Option 4</div> },
  { id: '5', content: <div>Option 5</div> },
]

stories.add(
  'Default',
  () => {
    const knobs: SelectMultiGroupProps = {
      direction: select('Direction', directions, 'column'),
      elevation: select('Elevation', elevations, 0),
      elevationHover: select('Elevation on Hover', elevations, 0),
      group,
      onChange: () => null,
      selected: [],
    }
    return <SelectMultiGroup {...knobs} />
  },
  { info: readme },
)

stories.add(
  'With elevations',
  () => {
    const knobs: SelectMultiGroupProps = {
      direction: select('Direction', directions, 'column'),
      elevation: select('Elevation', elevations, 1),
      elevationHover: select('Elevation on Hover', elevations, 2),
      group,
      onChange: () => null,
      selected: [],
    }
    return <SelectMultiGroup {...knobs} />
  },
  { info: readme },
)

stories.add(
  'Selected',
  () => {
    const knobs: SelectMultiGroupProps = {
      direction: select('Direction', directions, 'column'),
      elevation: select('Elevation', elevations, 0),
      elevationHover: select('Elevation on Hover', elevations, 0),
      group,
      onChange: () => null,
      selected: ['1', '2', '5'],
    }
    return <SelectMultiGroup {...knobs} />
  },
  { info: readme },
)

stories.add(
  'Selected with elevations',
  () => {
    const knobs: SelectMultiGroupProps = {
      direction: select('Direction', directions, 'column'),
      elevation: select('Elevation', elevations, 1),
      elevationHover: select('Elevation on Hover', elevations, 2),
      group,
      onChange: () => null,
      selected: ['1', '2', '5'],
    }
    return <SelectMultiGroup {...knobs} />
  },
  { info: readme },
)
