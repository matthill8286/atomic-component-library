import { radios } from '@storybook/addon-knobs'
import { Status, StatusProps, StatusType } from './Status'
import { Icon } from '@/components/Atoms/Icon'
import { OtherBookmarkOutlined } from 'atomic-icon-library'

const statusTypes: { [key: number]: StatusType } = { 0: 'white', 1: 'black', 2: 'primary' }

const knobs = (): StatusProps => {
  return {
    type: radios('Type', statusTypes, statusTypes[2]),
  }
}

export default {
  title: 'Design System/Atoms/Status',
}

export const Default = () => {
  return <Status {...knobs()}>1</Status>
}

export const WithIcon = () => {
  return (
    <Icon color="grey4" height="md">
      <OtherBookmarkOutlined />
      <Status {...knobs()} withinIcon>
        1
      </Status>
    </Icon>
  )
}
