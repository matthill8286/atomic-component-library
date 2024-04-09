import { select, text } from '@storybook/addon-knobs'
import React from 'react'
import { ImageAndText } from './ImageAndText'

const imageUrls = {
  normal:
    'https://images.prismic.io/mms-test/d0cf98d0-b801-4e96-b5aa-c63f94677b60_Steve_Banner_Teaser.png?auto=compress,format&rect=0,113,1200,675&w=640&h=360',
  small:
    'https://images.prismic.io/mms-test/d0cf98d0-b801-4e96-b5aa-c63f94677b60_Steve_Banner_Teaser.png?auto=compress,format&rect=0,113,1200,675&w=320&h=180',
  big: 'https://images.prismic.io/mms-test/d0cf98d0-b801-4e96-b5aa-c63f94677b60_Steve_Banner_Teaser.png?auto=compress,format&rect=0,113,1200,675&w=480&h=270',
}

const image = {
  alt: 'this is the alt text',
  url: imageUrls.normal,
  mobileSmall: {
    url: imageUrls.small,
  },
  mobileBig: {
    url: imageUrls.big,
  },
}

export default {
  title: 'Design System/Organisms/ImageAndText',
}

export const Default = () => {
  const knobs = {
    imageAlignment: select('Image Alignment', ['right', 'left'], 'right'),
  }
  return (
    <div>
      <ImageAndText image={image} {...knobs}>
        <div>
          <h3>{text('Headline', 'ImageText - With Headline')}</h3>
          <p>{text('Paragraph', 'This is the paragraph')}</p>
        </div>
      </ImageAndText>
    </div>
  )
}
