import { select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Elevation, HorizontalPadding, Padding, VerticalPadding } from '@/types/theme'
import { SelectGroup } from './SelectGroup'
import { SelectGroupProps, SelectionDirection, SelectItem } from './SelectGroup.interface'
import Readme from './SelectGroup.readme.md'

const customPaddings: Padding = {
  bottom: 'xxs',
  left: 'sm',
  right: 'md',
  top: 'xl',
}

const paddings: VerticalPadding[] = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl']

const directions: SelectionDirection[] = ['column', 'row']

const elevations: Elevation[] = [0, 1, 2, 3, 4]

const dividerWidths: string[] = ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']

const stories = storiesOf('Design System/Molecules/SelectGroup', module)

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
    const knobs: SelectGroupProps = {
      direction: select('Direction', directions, 'column'),
      elevation: select('Elevation', elevations, 0),
      elevationHover: select('Elevation on Hover', elevations, 0),
      group,
      onChange: () => null,
      padding: select('Padding', paddings, 'xxs'),
      selected: null,
    }
    return <SelectGroup {...knobs} />
  },
  { info: Readme },
)

stories.add(
  'Selected',
  () => {
    const knobs: SelectGroupProps = {
      direction: select('Direction', directions, 'column'),
      elevation: select('Elevation', elevations, 0),
      elevationHover: select('Elevation on Hover', elevations, 0),
      group,
      onChange: () => null,
      selected: '1',
      selectedElevation: select('Selected Elevation', elevations, 0),
      textColor: 'grey4',
    }
    return <SelectGroup {...knobs} />
  },
  { info: Readme },
)

stories.add(
  'Disabled',
  () => {
    const knobs: SelectGroupProps = {
      direction: select('Direction', directions, 'column'),
      elevation: select('Elevation', elevations, 0),
      elevationHover: select('Elevation on Hover', elevations, 0),
      group: [...group, { id: '1', content: 'Option', disabled: true }],
      onChange: () => null,
      selected: '1',
    }
    return <SelectGroup {...knobs} />
  },
  { info: Readme },
)

stories.add(
  'One option',
  () => {
    const knobs: SelectGroupProps = {
      direction: select('Direction', directions, 'column'),
      elevation: select('Elevation', elevations, 0),
      elevationHover: select('Elevation on Hover', elevations, 0),
      group: [{ id: 'vorkasse', content: 'Vorkasse' }],
      onChange: () => null,
      selected: null,
    }
    return <SelectGroup {...knobs} />
  },
  { info: Readme },
)

stories.add(
  'With elevations',
  () => {
    const knobs: SelectGroupProps = {
      direction: select('Direction', directions, 'column'),
      elevation: select('Elevation', elevations, 1),
      elevationHover: select('Elevation on Hover', elevations, 2),
      group,
      onChange: () => null,
      selected: null,
    }
    return <SelectGroup {...knobs} />
  },
  { info: Readme },
)

stories.add(
  'Selected with elevations',
  () => {
    const knobs: SelectGroupProps = {
      direction: select('Direction', directions, 'column'),
      elevation: select('Elevation', elevations, 1),
      elevationHover: select('Elevation on Hover', elevations, 2),
      group,
      onChange: () => null,
      selected: '1',
    }
    return <SelectGroup {...knobs} />
  },
  { info: Readme },
)

stories.add(
  'Selected with padding',
  () => {
    const horizontalPaddings: HorizontalPadding[] = ['xs', 'sm', 'md', 'lg', 'xl']
    const knobs: SelectGroupProps = {
      direction: select('Direction', directions, 'column'),
      elevation: select('Elevation', elevations, 1),
      elevationHover: select('Elevation on Hover', elevations, 2),
      group,
      onChange: () => null,
      padding: {
        top: select('padding|paddingTop', paddings, customPaddings.top),
        bottom: select('padding|paddingBottom', paddings, customPaddings.bottom),
        left: select('padding|paddingLeft', horizontalPaddings, customPaddings.left),
        right: select('padding|paddingRight', horizontalPaddings, customPaddings.right),
      },
      selected: '1',
    }
    return <SelectGroup {...knobs} />
  },
  { info: Readme },
)

stories.add(
  'With Border width',
  () => {
    const knobs: SelectGroupProps = {
      direction: select('Direction', directions, 'column'),
      elevation: select('Elevation', elevations, 1),
      elevationHover: select('Elevation on Hover', elevations, 2),
      group,
      onChange: () => null,
      selected: null,
      dividerWidth: select('Divider Widths', dividerWidths, '70%'),
    }
    return <SelectGroup {...knobs} showDivider />
  },
  { info: Readme },
)
