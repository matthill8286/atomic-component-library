import { storiesOf } from '@storybook/react'
import React from 'react'
import { Picture } from '@/components/Atoms/Picture'
import { VideoPlayerCore } from '@/components/Atoms/VideoPlayer'
import { Carousel } from './Carousel'
import {
  defaultSettings,
  multiItemSettings,
  pictureEntries,
  thumbnailSettings,
  withVideoEntries,
} from './Carousel.data'

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

export const renderWithPictureComponent = (item, index, hasThumbnails) => {
  return (
    <div key={item.productID + index}>
      <Picture src={hasThumbnails ? item.thUrl : item.url} alt={item.productID} />
      {hasThumbnails && item.usageType === 'Product Video' && (
        <img src="https://mycliplister.com/static/viewer/products/skins/default/playButton.png" alt="Play Video" />
      )}
    </div>
  )
}

const renderWithPictureOrVideoComponent = (item, index, hasThumbnails) => {
  if (!hasThumbnails && item.usageType === 'Product Video') {
    return <VideoPlayerCore key={item.videoID} url={item.url} />
  } else {
    return renderWithPictureComponent(item, index, hasThumbnails)
  }
}

storiesOf('Design System/Molecules/Carousel', module)
  .add('Default', () => (
    <div style={carouselWrapperStyle}>
      <Carousel
        sliderSettings={defaultSettings}
        items={pictureEntries}
        renderSlide={(item, index, hasThumbnails) => renderWithPictureComponent(item, index, hasThumbnails)}
      />
    </div>
  ))
  .add('with Thumbnails', () => (
    <div style={carouselWrapperStyle}>
      <Carousel
        sliderSettings={thumbnailSettings}
        items={pictureEntries}
        renderSlide={(item, index, hasThumbnails) => renderWithPictureComponent(item, index, hasThumbnails)}
        hasThumbnails
      />
    </div>
  ))
  .add('with Badges', () => (
    <div style={carouselWrapperStyle}>
      <Carousel
        sliderSettings={thumbnailSettings}
        items={pictureEntries}
        renderSlide={(item, index, hasThumbnails) => renderWithPictureComponent(item, index, hasThumbnails)}
        badges={badges}
        hasThumbnails
      />
    </div>
  ))
  .add('with MultiItem', () => (
    <div style={carouselWrapperStyle}>
      <Carousel
        sliderSettings={multiItemSettings}
        items={pictureEntries}
        renderSlide={(item, index, hasThumbnails) => renderWithPictureComponent(item, index, hasThumbnails)}
      />
    </div>
  ))
  .add('with white Dots', () => (
    <div style={{ backgroundColor: 'lightgrey', ...carouselWrapperStyle }}>
      <Carousel
        whiteDots
        sliderSettings={defaultSettings}
        items={pictureEntries}
        renderSlide={(item, index, hasThumbnails) => renderWithPictureComponent(item, index, hasThumbnails)}
      />
    </div>
  ))
  .add('with Video', () => (
    <div style={carouselWrapperStyle}>
      <Carousel
        boxShadow
        sliderSettings={defaultSettings}
        items={withVideoEntries}
        renderSlide={(item, index, hasThumbnails) => renderWithPictureOrVideoComponent(item, index, hasThumbnails)}
      />
    </div>
  ))
  .add('with video thumbnails', () => (
    <div style={carouselWrapperStyle}>
      <Carousel
        sliderSettings={thumbnailSettings}
        items={withVideoEntries}
        renderSlide={(items, index, hasThumbnails) => renderWithPictureOrVideoComponent(items, index, hasThumbnails)}
        hasThumbnails
      />
    </div>
  ))
  .add('with Video', () => (
    <div style={carouselWrapperStyle}>
      <Carousel
        boxShadow
        sliderSettings={defaultSettings}
        items={withVideoEntries}
        renderSlide={(item, index, hasThumbnails) => renderWithPictureComponent(item, index, hasThumbnails)}
      />
    </div>
  ))
  .add('with video thumbnails', () => (
    <div style={carouselWrapperStyle}>
      <Carousel
        sliderSettings={thumbnailSettings}
        items={withVideoEntries}
        renderSlide={(items, index, hasThumbnails) => renderWithPictureOrVideoComponent(items, index, hasThumbnails)}
        hasThumbnails
      />
    </div>
  ))
