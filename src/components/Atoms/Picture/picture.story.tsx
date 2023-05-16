import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'
import { Picture } from './Picture'
import { PictureObjectFit } from './Picture.interface'
import React from 'react'

const imageUrls = ['https://loremflickr.com/900/650', 'https://loremflickr.com/900/650']

const objectFitList = ['none', 'contain', 'cover', 'fill', 'scale-down']

export default {
  title: 'Design System/Atoms/Picture',
}

export const Default = () => <Picture src={'https://loremflickr.com/900/650'} alt={'thumbnail'} />

export const ThumbnailImage = () => (
  <Picture
    width="180px"
    height="70px"
    onClick={action('click')}
    src={'https://loremflickr.com/900/650'}
    alt={'thumbnail'}
  />
)

export const ObjectFit = () => {
  const url = select('Image', imageUrls, imageUrls[0])
  const objectFit = select('Object Fit', objectFitList, 'fill')

  return (
    <div>
      <Picture width="100%" height="300px" src={url} objectFit={objectFit as PictureObjectFit} />
    </div>
  )
}

ObjectFit.story = {
  name: 'Object-Fit',
}

export const RoundedBorder = () => {
  const url = 'https://chartec.net/wp-content/uploads/2017/10/Procrastination.jpg'

  return (
    <div>
      <Picture src={url} rounded />
    </div>
  )
}
