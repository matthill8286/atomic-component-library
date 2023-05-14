import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ActionLink } from '.'
import { ActionLinkProps } from './ActionLink.interface'

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Design System/Molecules/Action Link/Single',
  component: ActionLink,
} as Meta

const Template: Story<ActionLinkProps> = (args: ActionLinkProps) => <ActionLink {...args} />

const actionLinkChildren = 'Action link'

export const Default = Template.bind({})
Default.args = { children: actionLinkChildren }
