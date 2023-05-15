import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { OtherArticle, OtherBookmark, OtherClose } from 'atomic-icon-library'
import { InputIcon, InputIconProps } from './InputIcon'

const CustomIcon = {
  Visible: 'visible',
  Hidden: 'hidden',
  Arrow: 'arrow',
}

const icons = {
  visible: <OtherBookmark />,
  hidden: <OtherClose />,
  arrow: <OtherArticle />,
  default: null,
}

const stories = storiesOf('Design System/Atoms/InputIcon', module)

stories.add('Default', () => {
  const knobs = (): InputIconProps => {
    const iconName = select('icon', CustomIcon, CustomIcon.Hidden)
    const icon = icons[iconName]
    const iconState = select('iconState', ['default', 'valid', 'error'], 'default')

    return {
      icon,
      iconState,
      onClick: action('onclick'),
    }
  }

  return <InputIcon {...knobs()} />
})
