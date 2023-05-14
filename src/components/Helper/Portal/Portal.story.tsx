import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Portal } from './Portal'

storiesOf('Design System/Helper/Portal', module).add('Default', () => {
  const showModal = boolean('Show Modal', false)
  return (
    <>
      <div id="target-container">Some content</div>
      {showModal && (
        <Portal targetRootId="target-container">
          <p>Portal Content</p>
        </Portal>
      )}
    </>
  )
})
