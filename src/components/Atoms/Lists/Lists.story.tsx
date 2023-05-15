import { Meta, Story } from '@storybook/react/types-6-0'
import * as React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { CopyText } from '@/components/Atoms/Typography/CopyText'
import { Lists, ListsProps } from './Lists'
import { colorsList } from '@/utils/helper'
import { OtherCheckmarkCircle } from 'atomic-icon-library'

const ListItems = ['Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ', 'Dolore est', 'Testing this']

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Design System/Atoms/Lists',
  component: Lists,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colorsList,
      },
    },
  },
} as Meta

const Template: Story<ListsProps> = (args: ListsProps) => (
  <Lists {...args}>
    {ListItems.map((item, index) => (
      <li key={index}>
        {args.icon && (
          <Icon color="success" width={24} height={24}>
            <OtherCheckmarkCircle />
          </Icon>
        )}
        {<CopyText>{item}</CopyText>}
      </li>
    ))}
  </Lists>
)

export const Default = Template.bind({})
