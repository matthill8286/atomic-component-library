import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'
import { Picture } from './Picture'
import { PictureObjectFit } from './Picture.interface'
import React from 'react'

const imageUrls = [
  'https://wac-cdn.atlassian.com/dam/jcr:e9ef90f9-c84a-4cba-af2f-9aa7d683ede3/Jira%20Integration.svg?cdnVersion=1324',
  'https://www.mountaingoatsoftware.com/uploads/blog/2018-05-22-the-10-best-bits-of-scrum-master-advice-quote.png',
  'https://chartec.net/wp-content/uploads/2017/10/Procrastination.jpg',
  'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_750/https://focusinspired.com/wp/wp-content/uploads/2017/01/BMC.png',
  'https://picscdn.redblue.de/doi/pixelboxx-mss-76251365/fee_786_587_png',
  'https://picscdn.redblue.de/doi/pixelboxx-mss-72273220/fee_786_587_png',
]

const objectFitList = ['none', 'contain', 'cover', 'fill', 'scale-down']

export default {
  title: 'Design System/Atoms/Picture',
}

export const Default = () => (
  <Picture
    src={
      'https://wac-cdn.atlassian.com/dam/jcr:e9ef90f9-c84a-4cba-af2f-9aa7d683ede3/Jira%20Integration.svg?cdnVersion=1324'
    }
    alt={'thumbnail'}
  />
)

export const ThumbnailImage = () => (
  <Picture
    width="180px"
    height="70px"
    onClick={action('click')}
    src={
      'https://wac-cdn.atlassian.com/dam/jcr:e9ef90f9-c84a-4cba-af2f-9aa7d683ede3/Jira%20Integration.svg?cdnVersion=1324'
    }
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
  const url =
    'http://es34.mycliplister.com/cls/static/20cacbf0765456d6519b9194c7aef6f3c0c1c2fd3a05395aeb8146fdebcfc4a7e4c5829e2232ea4a0fd88c560cad1304'

  return (
    <div>
      <Picture src={url} rounded />
    </div>
  )
}
