import { withState } from '@dump247/storybook-state'
import { boolean, select } from '@storybook/addon-knobs'
import * as React from 'react'
import { Elevation } from '@/types/theme'
import { TabBar } from './TabBar'
import { Tab, TabBarProps } from './TabBar.interface'
import Readme from './TabBar.readme.mdx'
import { defaultTheme } from '@/styles'
import { ThemeProvider } from '@/styles/ThemeProvider'

const changeChecked = (store, id: string) => {
  store.set({ selected: id })
}

const elevations: Elevation[] = [0, 1, 2, 3, 4]

const blackExampleTheme = {
  ...defaultTheme,
  color: {
    ...defaultTheme.color,
    backgroundColor: 'black',
    surfaceColor: 'black',
    textColor: 'white',
  },
}

// const stories = storiesOf('Design System/Molecules/TabBar', module)

export default {
  title: 'Design System/Molecules/TabBar',
  component: TabBar,
}

export const Default = withState({ selected: undefined }, (store) => {
  const tabs: Tab[] = [
    { id: 'tab1', label: 'Preferences' },
    { id: 'tab2', label: 'Goals' },
    { id: 'tab3', label: 'Photo' },
    { id: 'tab4', label: 'Label 4' },
  ]

  const knobs: TabBarProps = {
    tabGroupName: 'default-tab-group',
    onChange: (id) => changeChecked(store, id),
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs,
  }

  return (
    <div style={{ padding: '20px' }}>
      <TabBar {...knobs} surfaceColor="white" />
    </div>
  )
})

Default.story = {
  parameters: { info: Readme },
}

export const TabSelected = withState({ selected: 'tab1' }, (store) => {
  const tabs: Tab[] = [
    { id: 'tab1', label: 'Preferences' },
    { id: 'tab2', label: 'Goals' },
    { id: 'tab3', label: 'Photo' },
    { id: 'tab4', label: 'Label 4' },
  ]

  const knobs: TabBarProps = {
    tabGroupName: 'default-tab-group',
    onChange: (id) => changeChecked(store, id),
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs,
  }
  return (
    <div style={{ padding: '20px' }}>
      <TabBar {...knobs} surfaceColor={undefined} />
    </div>
  )
})

TabSelected.story = {
  name: 'Tab selected',
  parameters: { info: Readme },
}

export const TabDisabled = withState({ selected: 'tab1' }, (store) => {
  const tabs: Tab[] = [
    { id: 'tab1', label: 'Selected & Disabled', isDisabled: true },
    { id: 'tab2', label: 'Disabled', isDisabled: true },
    { id: 'tab3', label: 'Available' },
    { id: 'tab4', label: 'Label 4' },
  ]

  const knobs: TabBarProps = {
    tabGroupName: 'default-tab-group',
    onChange: (id) => changeChecked(store, id),
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs,
  }
  return (
    <div style={{ padding: '20px' }}>
      <TabBar {...knobs} />
    </div>
  )
})

TabDisabled.story = {
  name: 'Tab disabled',
  parameters: { info: Readme },
}

export const Overflowing = withState({ selected: undefined }, (store) => {
  const tabs: Tab[] = [
    { id: 'tab1', label: 'Preferences' },
    { id: 'tab2', label: 'Goals' },
    { id: 'tab3', label: 'Photo' },
    { id: 'tab4', label: 'Label 4' },
    { id: 'tab5', label: 'Label 5' },
    { id: 'tab6', label: 'Label 6' },
    { id: 'tab7', label: 'Label 7' },
    { id: 'tab8', label: 'Label bla bla blaaaaa blaaaaaaaaa 8' },
    { id: 'tab9', label: 'Label 9' },
    { id: 'tab10', label: 'Label 10' },
    { id: 'tab11', label: 'Label 11' },
    { id: 'tab12', label: 'Label 12' },
    { id: 'tab13', label: 'Label 13' },
    { id: 'tab14', label: 'Label 14' },
    { id: 'tab15', label: 'Label 15' },
    { id: 'tab16', label: 'Label 16' },
    { id: 'tab17', label: 'Label 17' },
    { id: 'tab18', label: 'Label 18' },
    { id: 'tab19', label: 'Label 19' },
  ]

  const knobs: TabBarProps = {
    tabGroupName: 'default-tab-group',
    onChange: (id) => changeChecked(store, id),
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs,
  }

  return (
    <div style={{ padding: '20px' }}>
      <TabBar {...knobs} />
    </div>
  )
})

Overflowing.story = {
  parameters: { info: Readme },
}

export const OverflowingAndSelected = withState({ selected: 'tab13' }, (store) => {
  const tabs: Tab[] = [
    { id: 'tab1', label: 'Preferences' },
    { id: 'tab2', label: 'Goals' },
    { id: 'tab3', label: 'Photo' },
    { id: 'tab4', label: 'Label 4' },
    { id: 'tab5', label: 'Label 5' },
    { id: 'tab6', label: 'Label 6' },
    { id: 'tab7', label: 'Label 7' },
    { id: 'tab8', label: 'Label bla bla blaaaaa blaaaaaaaaa 8' },
    { id: 'tab9', label: 'Label 9' },
    { id: 'tab10', label: 'Label 10' },
    { id: 'tab11', label: 'Label 11' },
    { id: 'tab12', label: 'Label 12' },
    { id: 'tab13', label: 'Label 13' },
    { id: 'tab14', label: 'Label 14' },
    { id: 'tab15', label: 'Label 15' },
    { id: 'tab16', label: 'Label 16' },
    { id: 'tab17', label: 'Label 17' },
    { id: 'tab18', label: 'Label 18' },
    { id: 'tab19', label: 'Label 19' },
  ]

  const knobs: TabBarProps = {
    tabGroupName: 'default-tab-group',
    onChange: (id) => changeChecked(store, id),
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs,
  }

  return (
    <div style={{ padding: '20px' }}>
      <TabBar {...knobs} />
    </div>
  )
})

OverflowingAndSelected.story = {
  name: 'Overflowing and selected',
  parameters: { info: Readme },
}

export const StretchedHeight = withState({ selected: undefined }, (store) => {
  const tabs: Tab[] = [
    { id: 'tab1', label: 'Buttons' },
    { id: 'tab2', label: 'are' },
    { id: 'tab3', label: 'centered' },
    { id: 'tab4', label: 'still!' },
  ]

  const knobs: TabBarProps = {
    tabGroupName: 'default-tab-group',
    onChange: (id) => changeChecked(store, id),
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs,
  }

  return (
    <div style={{ padding: '20px' }}>
      <TabBar style={{ height: 300 }} {...knobs} />
    </div>
  )
})

StretchedHeight.story = {
  parameters: { info: Readme },
}

export const WithBlackAlternateTheme = withState({ selected: undefined }, (store) => {
  const tabs: Tab[] = [
    { id: 'tab1', label: 'Preferences' },
    { id: 'tab2', label: 'Goals' },
    { id: 'tab3', label: 'Photo' },
    { id: 'tab4', label: 'Label 4' },
  ]

  const knobs: TabBarProps = {
    tabGroupName: 'default-tab-group',
    onChange: (id) => changeChecked(store, id),
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs,
    enableSemanticTheme: true,
  }

  return (
    <ThemeProvider theme={blackExampleTheme}>
      <div style={{ padding: '20px' }}>
        <TabBar {...knobs} />
      </div>
    </ThemeProvider>
  )
})

WithBlackAlternateTheme.story = {
  name: 'With black Alternate theme',
  parameters: { info: Readme },
}

export const TabDisabledWithBlackAlternateTheme = withState({ selected: 'tab1' }, (store) => {
  const tabs: Tab[] = [
    { id: 'tab1', label: 'Selected & Disabled', isDisabled: true },
    { id: 'tab2', label: 'Disabled', isDisabled: true },
    { id: 'tab3', label: 'Available' },
    { id: 'tab4', label: 'Label 4' },
  ]

  const knobs: TabBarProps = {
    tabGroupName: 'default-tab-group',
    onChange: (id) => changeChecked(store, id),
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs,
    enableSemanticTheme: true,
  }

  return (
    <ThemeProvider theme={blackExampleTheme}>
      <div style={{ padding: '20px' }}>
        <TabBar {...knobs} />
      </div>
    </ThemeProvider>
  )
})

TabDisabledWithBlackAlternateTheme.story = {
  name: 'Tab disabled with black Alternate theme',
  parameters: { info: Readme },
}

export const OverflowingWithBlackAlternateTheme = withState({ selected: undefined }, (store) => {
  const tabs: Tab[] = [
    { id: 'tab1', label: 'Preferences' },
    { id: 'tab2', label: 'Goals' },
    { id: 'tab3', label: 'Photo' },
    { id: 'tab4', label: 'Label 4' },
    { id: 'tab5', label: 'Label 5' },
    { id: 'tab6', label: 'Label 6' },
    { id: 'tab7', label: 'Label 7' },
    { id: 'tab8', label: 'Label bla bla blaaaaa blaaaaaaaaa 8' },
    { id: 'tab9', label: 'Label 9' },
    { id: 'tab10', label: 'Label 10' },
    { id: 'tab11', label: 'Label 11' },
    { id: 'tab12', label: 'Label 12' },
    { id: 'tab13', label: 'Label 13' },
    { id: 'tab14', label: 'Label 14' },
    { id: 'tab15', label: 'Label 15' },
    { id: 'tab16', label: 'Label 16' },
    { id: 'tab17', label: 'Label 17' },
    { id: 'tab18', label: 'Label 18' },
    { id: 'tab19', label: 'Label 19' },
  ]

  const knobs: TabBarProps = {
    tabGroupName: 'default-tab-group',
    onChange: (id) => changeChecked(store, id),
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs,
    enableSemanticTheme: true,
  }

  return (
    <ThemeProvider theme={blackExampleTheme}>
      <div style={{ padding: '20px' }}>
        <TabBar {...knobs} />
      </div>
    </ThemeProvider>
  )
})

OverflowingWithBlackAlternateTheme.story = {
  name: 'Overflowing with black Alternate theme',
  parameters: { info: Readme },
}
