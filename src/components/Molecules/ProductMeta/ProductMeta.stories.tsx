import { Store, withState } from '@dump247/storybook-state'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { ProductMeta } from './ProductMeta'
import React, { useState } from 'react'

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

export const Default = () => {
  const [store, setStore] = useState({ bookmarked: false, completed: false })

  const setBookMark = (bookmarked: boolean) => {
    return setStore({ ...store, bookmarked })
  }
  const setCompleted = (completed: boolean) => {
    return setStore({ ...store, completed })
  }

  const toggleBookmarked = (): void => setBookMark(!store.bookmarked)
  const toggleCompleted = (): void => setCompleted(!store.completed)

  return (
    <ProductMeta
      features={[]}
      shareHandler={action('Share Clicked')}
      bookmarkHandler={(): void => toggleBookmarked()}
      completed={store.completed}
      bookmarked={store.bookmarked}
      completedHandler={() => toggleCompleted()}
      savePlaylistHandler={action('Save Clicked')}
      {...componentProps}
      {...knobs()}
    />
  )
}

export const CompactVersion = () => {
  const [store, setStore] = useState({ bookmarked: false, completed: false })

  const setBookMark = (bookmarked: boolean) => {
    return setStore({ ...store, bookmarked })
  }
  const setCompleted = (completed: boolean) => {
    return setStore({ ...store, completed })
  }

  const toggleBookmarked = (): void => setBookMark(!store.bookmarked)
  const toggleCompleted = (): void => setCompleted(!store.completed)

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
}

export default {
  title: 'Design System/Molecules/ProductMeta',
  component: ProductMeta,
}
