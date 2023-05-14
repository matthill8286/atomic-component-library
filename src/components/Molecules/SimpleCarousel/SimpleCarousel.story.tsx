import { storiesOf } from '@storybook/react'
import React from 'react'
import { Badge } from '@/components/Atoms/Badge'
import { Picture } from '@/components/Atoms/Picture'
import { VideoPlayerCore } from '@/components/Atoms/VideoPlayer'
import { ThemeProvider } from '@/styles/ThemeProvider'
import { SimpleCarousel } from './SimpleCarousel'
import { defaultSettings, multiItemSettings, pictureEntries, withVideoEntries } from './SimpleCarousel.data'
import { saiyanTheme } from '@/styles'

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
  ...saiyanTheme,
  color: {
    ...saiyanTheme.color,
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

storiesOf('Design System/Molecules/Simple Carousel', module)
  .add('Default', () => (
    <div style={carouselWrapperStyle}>
      <SimpleCarousel
        sliderSettings={defaultSettings}
        items={pictureEntries}
        renderSlide={(item, index) => renderWithPictureComponent(item, index)}
      />
    </div>
  ))
  .add('with MultiItem', () => (
    <div style={carouselWrapperStyle}>
      <SimpleCarousel
        sliderSettings={multiItemSettings}
        items={pictureEntries}
        renderSlide={(item, index) => renderWithPictureComponent(item, index)}
      />
    </div>
  ))
  .add('with Video', () => (
    <div style={carouselWrapperStyle}>
      <SimpleCarousel
        boxShadow
        sliderSettings={defaultSettings}
        items={withVideoEntries}
        renderSlide={(item, index) => renderWithPictureOrVideoComponent(item, index)}
      />
    </div>
  ))
  .add('with Badges', () => (
    <div style={carouselWrapperStyle}>
      <Badge badges={badges} />
      <SimpleCarousel
        boxShadow
        sliderSettings={defaultSettings}
        items={withVideoEntries}
        renderSlide={(item, index) => renderWithPictureOrVideoComponent(item, index)}
      />
    </div>
  ))
  .add('With black Alternate theme', () => (
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
  ))
