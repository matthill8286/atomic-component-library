import { Meta, Story } from '@storybook/react'
import React from 'react'
import { styled } from '@/styles'
import { WorkItem, WorkItemProps } from '@/components/Molecules/WorkItem/WorkItem'

const NewsItemWrapper = styled.div`
  max-width: 1000px;
`

export default {
  title: 'Design System/Molecules/WorkItem',
  component: WorkItem,
} as Meta

const Template: Story<WorkItemProps> = (args: WorkItemProps) => (
  <NewsItemWrapper>
    <WorkItem {...args} />
  </NewsItemWrapper>
)

export const WorkItemStory = Template.bind({})
WorkItemStory.args = {
  title: 'STYLE IS EVERYTHING',
  intro: 'THE STYLE, SIR.',
  description: 'Simplicity is not a style, it is more a philosophy about how to design something more effectively.',
  workText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  buttonLink: '/project-id',
  buttonLabel: 'View Project',
}
WorkItemStory.argTypes = {}
