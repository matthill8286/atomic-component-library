import { boolean } from '@storybook/addon-knobs'
import React from 'react'
import { Portal } from './Portal'

export default {
  title: 'Design System/Helper/Portal',
}

export const Default = () => {
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
}
