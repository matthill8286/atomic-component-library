import { Badge } from '@/components/Atoms/Badge'
import { Picture } from '@/components/Atoms/Picture'
import { VideoPlayerCore } from '@/components/Atoms/VideoPlayer'
import { ThemeProvider } from '@/styles/ThemeProvider'
import { SimpleCarousel } from './SimpleCarousel'
import { defaultSettings, multiItemSettings, pictureEntries, withVideoEntries } from './SimpleCarousel.data'
import { defaultTheme } from '@/styles'
import { Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Design System/Molecules/SimpleCarousel',
  component: SimpleCarousel,
  argTypes: {
    slidesPerPageSettings: multiItemSettings,
  },
} as Meta

const carouselWrapperStyle = {
  maxWidth: '634px',
  margin: '0 auto',
}

const badges = [
  {
    id: 1,
    name: 'Sponsored',
  },
  {
    id: 2,
    name: 'Hot Hot Hot',
  },
]

const blackExampleTheme = {
  ...defaultTheme,
  color: {
    ...defaultTheme.color,
    contrastColor: '#454647',
  },
}

export const renderWithPictureComponent = (item, index) => {
  return (
    <div key={item.productID + index}>
      <Picture src={item.url} alt={item.productID} />
    </div>
  )
}

const renderWithPictureOrVideoComponent = (item, index) => {
  if (item.usageType === 'Product Video') {
    return <VideoPlayerCore key={item.videoID} videoId={item.videoID} url={item.url} />
  } else {
    return renderWithPictureComponent(item, index)
  }
}

export const Default = () => (
  <div style={carouselWrapperStyle}>
    <SimpleCarousel
      sliderSettings={defaultSettings}
      items={pictureEntries}
      renderSlide={(item, index) => renderWithPictureComponent(item, index)}
    />
  </div>
)

export const WithMultiItem = () => (
  <div style={carouselWrapperStyle}>
    <SimpleCarousel
      sliderSettings={multiItemSettings}
      items={pictureEntries}
      renderSlide={(item, index) => renderWithPictureComponent(item, index)}
    />
  </div>
)

WithMultiItem.story = {
  name: 'with MultiItem',
}

export const WithVideo = () => (
  <div style={carouselWrapperStyle}>
    <SimpleCarousel
      boxShadow
      sliderSettings={defaultSettings}
      items={withVideoEntries}
      renderSlide={(item, index) => renderWithPictureOrVideoComponent(item, index)}
    />
  </div>
)

WithVideo.story = {
  name: 'with Video',
}

export const WithBadges = () => (
  <div style={carouselWrapperStyle}>
    <Badge badges={badges} />
    <SimpleCarousel
      boxShadow
      sliderSettings={defaultSettings}
      items={withVideoEntries}
      renderSlide={(item, index) => renderWithPictureOrVideoComponent(item, index)}
    />
  </div>
)

WithBadges.story = {
  name: 'with Badges',
}

export const WithBlackAlternateTheme = () => (
  <div style={{ backgroundColor: 'black' }}>
    <div style={carouselWrapperStyle}>
      <ThemeProvider theme={blackExampleTheme}>
        <SimpleCarousel
          sliderSettings={defaultSettings}
          items={pictureEntries}
          renderSlide={(item, index) => renderWithPictureComponent(item, index)}
          whiteDots
          arrowsSurfaceColor="contrastColor"
        />
      </ThemeProvider>
    </div>
  </div>
)

WithBlackAlternateTheme.story = {
  name: 'With black Alternate theme',
}
