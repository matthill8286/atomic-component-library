import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { PlaylistStage } from './PlaylistStage'
import { PlaylistStageProps } from './PlaylistStage.interface'
import { backlink, props, PlaylistMock } from './PlaylistStage.mocks'

const knobs = (): Partial<PlaylistStageProps> => {
  return {
    playlist: {
      ...PlaylistMock,
      name: text('Article Title', 'Our Playlist'),
      description: text('Subtext', 'This is a description'),
    },
  }
}

storiesOf('Design System/Organisms/Playlist Stage', module)
  .add('Default', () => {
    return <PlaylistStage {...props} {...knobs()} />
  })
  .add('Without Image', () => {
    return <PlaylistStage {...props} {...knobs()} withImage={false} />
  })
  .add('Without Breadcrumbs', () => {
    return <PlaylistStage {...props} {...knobs()} breadcrumbPath={undefined} />
  })
  .add('With Backlink', () => {
    return <PlaylistStage {...props} {...knobs()} breadcrumbPath={undefined} backlink={backlink} />
  })
  .add('Different Headline Colour', () => {
    return <PlaylistStage {...props} {...knobs()} headingColor="black" />
  })
