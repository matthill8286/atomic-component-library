import { boolean, text } from '@storybook/addon-knobs'
import { Link } from '@/components/Atoms/Link'
import { StorybookWrapper } from '@/utils/StorybookWrapper'
import { ToolTip } from './ToolTip'
import { ToolTipProps } from './ToolTip.interface'
import { Icon } from '@/components/Atoms/Icon'
import { OtherInfoOutlined } from 'atomic-icon-library'

const knobs = (primary?: boolean): ToolTipProps => {
  return {
    content: text('Content', 'Lorem Ipsum'),
    primary: boolean('Primary', !!primary),
  }
}

export default {
  title: 'Design System/Atoms/ToolTip',
}

export const Default = () => (
  <StorybookWrapper>
    <ToolTip {...knobs()}>
      <Link underline={false}>Link</Link>
    </ToolTip>
  </StorybookWrapper>
)

export const Primary = () => (
  <StorybookWrapper>
    <ToolTip {...knobs(true)}>
      <Link underline={false}>Link</Link>
    </ToolTip>
  </StorybookWrapper>
)

export const _Icon = () => (
  <StorybookWrapper>
    <ToolTip {...knobs()}>
      <Icon>
        <OtherInfoOutlined height="xs" width="xs" />
      </Icon>
    </ToolTip>
  </StorybookWrapper>
)
