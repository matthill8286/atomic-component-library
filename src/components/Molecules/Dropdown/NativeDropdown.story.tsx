import { withState } from '@dump247/storybook-state'
import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { NativeDropdown, NativeDropdownProps } from './NativeDropdown'
import readme from './NativeDropdown.readme.md'
import { OtherImportExport } from '@matthill8286/atomic-icon-library'

const options = [
  { label: 'BMW' },
  { label: 'Audi' },
  { label: 'Mercedes' },
  { label: 'Porsche' },
  { label: 'Very long text item that is long rly rly long long long' },
]

const story = storiesOf('Design System/Molecules/ NativeDropdown', module)

story.add(
  'Initial',
  withState({ value: '' }, (store) => {
    const props = (): NativeDropdownProps => ({
      value: store.state.value,
      onChange: (e) => {
        store.set({ value: e.target.value })
        action('on-change')(e)
      },
      margin: text('margin', ''),
      padding: text('padding', ''),
      noBorder: boolean('noBorder', false),
    })

    return (
      <NativeDropdown {...props()}>
        {options.map((option, i) => (
          <option key={i} value={option.label}>
            {option.label}
          </option>
        ))}
      </NativeDropdown>
    )
  }),
  { info: readme },
)

story.add(
  'Selected',
  withState({ value: 'Porsche' }, (store) => {
    const props = (): NativeDropdownProps => ({
      value: store.state.value,
      onChange: (e) => {
        store.set({ value: e.target.value })
        action('on-change')(e)
      },
      margin: text('margin', ''),
      padding: text('padding', ''),
    })

    return (
      <NativeDropdown {...props()}>
        {options.map((option, i) => (
          <option key={i} value={option.label}>
            {option.label}
          </option>
        ))}
      </NativeDropdown>
    )
  }),
  { info: readme },
)

story.add(
  'with custom icon',
  withState({ value: '' }, (store) => {
    const props = (): NativeDropdownProps => ({
      value: store.state.value,
      onChange: (e) => {
        store.set({ value: e.target.value })
        action('on-change')(e)
      },
      margin: text('margin', ''),
      padding: text('padding', ''),
      icon: <OtherImportExport />,
      iconRotate: select('iconRotate', [0, 90, 180, 270], 0),
    })

    return (
      <NativeDropdown {...props()}>
        {options.map((option, i) => (
          <option key={i} value={option.label}>
            {option.label}
          </option>
        ))}
      </NativeDropdown>
    )
  }),
  { info: readme },
)

story.add(
  'with different icon on mobile',
  withState({ value: '' }, (store) => {
    const props = (): NativeDropdownProps => ({
      value: store.state.value,
      onChange: (e) => {
        store.set({ value: e.target.value })
        action('on-change')(e)
      },
      margin: text('margin', ''),
      padding: text('padding', ''),
      iconMobile: <OtherImportExport />,
      iconRotate: select('iconRotate', [0, 90, 180, 270], 90),
      iconMobileRotate: select('iconMobileRotate', [0, 90, 180, 270], 0),
    })

    return (
      <NativeDropdown {...props()}>
        {options.map((option, i) => (
          <option key={i} value={option.label}>
            {option.label}
          </option>
        ))}
      </NativeDropdown>
    )
  }),
  { info: readme },
)
