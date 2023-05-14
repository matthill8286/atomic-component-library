import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Link } from '@/components/Atoms/Link'
import { StorybookWrapper } from '@/utils/StorybookWrapper'
import { ToolTip } from './ToolTip'
import { ToolTipProps } from './ToolTip.interface'
import { Icon } from '@/components/Atoms/Icon'
import { OtherInfoOutlined } from '@matthill8286/atomic-icon-library'

const knobs = (primary?: boolean): ToolTipProps => {
  return {
    content: text('Content', 'Lorem Ipsum'),
    primary: boolean('Primary', !!primary),
  }
}

storiesOf('Design System/Atoms/ToolTip', module)
  .add('Default', () => (
    <StorybookWrapper>
      <ToolTip {...knobs()}>
        <Link underline={false}>Link</Link>
      </ToolTip>
    </StorybookWrapper>
  ))
  .add('Primary', () => (
    <StorybookWrapper>
      <ToolTip {...knobs(true)}>
        <Link underline={false}>Link</Link>
      </ToolTip>
    </StorybookWrapper>
  ))
  .add('Icon', () => (
    <StorybookWrapper>
      <ToolTip {...knobs()}>
        <Icon>
          <OtherInfoOutlined height="xs" width="xs" />
        </Icon>
      </ToolTip>
    </StorybookWrapper>
  ))
