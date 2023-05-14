import { radios } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Status, StatusProps, StatusType } from './Status'
import { Icon } from '@/components/Atoms/Icon'
import { OtherBookmarkOutlined } from '@matthill8286/atomic-icon-library'

const statusTypes: { [key: number]: StatusType } = { 0: 'white', 1: 'black', 2: 'primary' }

const knobs = (): StatusProps => {
  return {
    type: radios('Type', statusTypes, statusTypes[2]),
  }
}

storiesOf('Design System/Atoms/Status', module)
  .add('Default', () => {
    return <Status {...knobs()}>1</Status>
  })
  .add('With Icon', () => {
    return (
      <Icon color="grey4" height="md">
        <OtherBookmarkOutlined />
        <Status {...knobs()} withinIcon>
          1
        </Status>
      </Icon>
    )
  })
