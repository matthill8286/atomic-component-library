import { withState } from '@dump247/storybook-state'
import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import { NativeDropdown, NativeDropdownProps } from './NativeDropdown'
import readme from './NativeDropdown.readme.mdx'
import { OtherImportExport } from 'atomic-icon-library'
import React from 'react'

const options = [
  { label: 'BMW' },
  { label: 'Audi' },
  { label: 'Mercedes' },
  { label: 'Porsche' },
  { label: 'Very long text item that is long rly rly long long long' },
]

export const Initial = withState({ value: '' }, (store) => {
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
})

Initial.story = {
  parameters: { info: readme },
}

export const Selected = withState({ value: 'Porsche' }, (store) => {
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
})

Selected.story = {
  parameters: { info: readme },
}

export const WithCustomIcon = withState({ value: '' }, (store) => {
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
})

WithCustomIcon.story = {
  name: 'with custom icon',
  parameters: { info: readme },
}

export const WithDifferentIconOnMobile = withState({ value: '' }, (store) => {
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
})

WithDifferentIconOnMobile.story = {
  name: 'with different icon on mobile',
  parameters: { info: readme },
}

export default {
  title: 'Design System/Molecules/Native Dropdown',
}
