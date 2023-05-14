import { Store, withState } from '@dump247/storybook-state'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { ProductMeta } from './ProductMeta'

const componentProps = {
  buttonTextLaunch: 'Launch',
  buttonTextComplete: 'Mark complete',
  list: [
    { label: 'Provider', value: 'Youtube' },
    { label: 'Primary competency', value: 'Digital Marketing' },
    { label: 'Type', value: 'Article' },
    { label: 'Length', value: '16 minutes' },
  ],
  competencyCopy: '5 competencies featured in this learning product:',
  tags: [
    { text: 'CREATIVITY' },
    { text: 'STORYTELLING' },
    { text: 'DESIGN' },
    { text: 'WRITING' },
    { text: 'BRAINSTORMING' },
  ],
}

const knobs = () => {
  return {
    isShareInteraction: boolean('SharedInteractionIcon', true),
    isBookmarkInteraction: boolean('BookmarkInteractionIcon', true),
    isCreatePlaylistInteraction: boolean('CreatePlaylistInteractionIcon', true),
    isLandingPage: boolean('Landing page version', false),
  }
}

interface storeProps {
  bookmarked: boolean
  completed: boolean
}

const setBookMark = (store: Store<storeProps>, boo: boolean) => {
  return store.set({ bookmarked: boo })
}
const setCompleted = (store: Store<storeProps>, boo: boolean) => {
  return store.set({ completed: boo })
}

storiesOf('Design System/Organisms/ProductMeta', module)
  .add(
    'Default',
    withState({ bookmarked: false, completed: false }, (store) => {
      const toggleBookmarked = (): void => setBookMark(store, !store.state.bookmarked)
      const toggleCompleted = (): void => setCompleted(store, !store.state.completed)

      return (
        <ProductMeta
          features={[]}
          shareHandler={action('Share Clicked')}
          bookmarkHandler={(): void => toggleBookmarked()}
          completed={store.state.completed}
          bookmarked={store.state.bookmarked}
          completedHandler={() => toggleCompleted()}
          savePlaylistHandler={action('Save Clicked')}
          {...componentProps}
          {...knobs()}
        />
      )
    }),
  )
  .add(
    'Compact Version',
    withState({ bookmarked: false, completed: false }, (store) => {
      const toggleBookmarked = (): void => setBookMark(store, !store.state.bookmarked)
      const toggleCompleted = (): void => setCompleted(store, !store.state.completed)

      return (
        <ProductMeta
          features={[]}
          savePlaylistHandler={action('Save Clicked')}
          isCreatePlaylistInteraction={false}
          isBookmarkInteraction={false}
          isShareInteraction={false}
          isLandingPage
          {...componentProps}
        />
      )
    }),
  )
