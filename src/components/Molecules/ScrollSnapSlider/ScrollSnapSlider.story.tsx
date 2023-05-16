import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Badge } from '@/components/Atoms/Badge'
import { Picture } from '@/components/Atoms/Picture'
import { ScrollSnapSlider } from './ScrollSnapSlider'
import { pictureEntries, withVideoEntries } from './ScrollSnapSlider.data'
import { ScrollSnapSliderProps } from '@/components/Molecules/ScrollSnapSlider/ScrollSnapSlider.interface'

const badges = [
  {
    id: 1,
    name: 'Sponsored',
  },
  {
    id: 2,
    name: 'Featured',
  },
]

const renderWithPictureComponent = (item, index) => {
  return (
    <article key={item.productID + index}>
      <Picture height="100%" width="100%" src={item.url} alt={item.productID} />
    </article>
  )
}

const renderWithPictureOrVideoComponent = (item, index) => {
  if (item.usageType === 'Product Video') {
    return `Investigate Video Player`
  } else {
    return renderWithPictureComponent(item, index)
  }
}

// can be used when the slide width is dynamic or only 1 slide should be shown
const SlideSettings = {
  mobileSmall: 1,
  mobileBig: 1,
  tablet: 2,
  desktop: 3,
}

export default {
  title: 'Design System/Molecules/ScrollSnapSlider',
  component: ScrollSnapSlider,
  argTypes: {
    slidesPerPageSettings: SlideSettings,
  },
} as Meta

const Template: Story<ScrollSnapSliderProps> = (args: ScrollSnapSliderProps) => (
  <ScrollSnapSlider {...args}>{args.children}</ScrollSnapSlider>
)

const TemplateWithBadge: Story<ScrollSnapSliderProps> = (args: ScrollSnapSliderProps) => (
  <div>
    <Badge badges={badges} />
    <ScrollSnapSlider {...args}>{args.children}</ScrollSnapSlider>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  slidesPerPageSettings: { mobileSmall: 1, mobileBig: 1, tablet: 1, desktop: 1 },
  children: pictureEntries.map((item, index) => renderWithPictureComponent(item, index)),
}

export const withVideo = Template.bind({})
withVideo.args = {
  slidesPerPageSettings: { mobileSmall: 1, mobileBig: 1, tablet: 1, desktop: 1 },
  children: withVideoEntries.map((item, index) => renderWithPictureOrVideoComponent(item, index)),
}

export const withBadges = TemplateWithBadge.bind({})
withBadges.args = {
  slidesPerPageSettings: { mobileSmall: 1, mobileBig: 1, tablet: 1, desktop: 1 },
  children: withVideoEntries.map((item, index) => renderWithPictureOrVideoComponent(item, index)),
}
