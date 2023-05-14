import { Store, withState } from '@dump247/storybook-state'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Services } from './Services'
import { Knobs, ServiceType } from './Services.interface'
import { props } from './Services.mocks'

interface InitialState {
  items: ServiceType[]
}

const initialState: InitialState = {
  items: [...props.items],
}

const knobs = (store: Store<InitialState>): Knobs => {
  return {
    onChange: (isChecked: boolean, id: string | undefined) => {
      const newItems: ServiceType[] = store.state.items.map((item: ServiceType): ServiceType => {
        if (item.id === id) {
          return { ...item, selected: !item.selected }
        }

        return item
      })
      store.set({ items: newItems })
    },
  }
}

storiesOf('Design System/Molecules/Services', module)
  .add(
    'Default',
    withState({ ...initialState }, (store: Store<InitialState>) => {
      return <Services {...props} items={store.state.items} {...knobs(store)} />
    }),
  )
  .add(
    'Disabled',
    withState({ ...initialState }, (store: Store<InitialState>) => {
      return <Services {...props} offersDisabled items={store.state.items} {...knobs(store)} />
    }),
  )
  .add(
    'Loading',
    withState({ ...initialState }, (store: Store<InitialState>) => {
      return <Services {...props} items={store.state.items} {...knobs(store)} loading />
    }),
  )
