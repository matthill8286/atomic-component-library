import { text } from '@storybook/addon-knobs'
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

export default {
  title: 'Design System/Organisms/Playlist Stage',
}

export const Default = () => {
  return <PlaylistStage {...props} {...knobs()} />
}

export const WithoutImage = () => {
  return <PlaylistStage {...props} {...knobs()} withImage={false} />
}

export const WithoutBreadcrumbs = () => {
  return <PlaylistStage {...props} {...knobs()} breadcrumbPath={undefined} />
}

export const WithBacklink = () => {
  return <PlaylistStage {...props} {...knobs()} breadcrumbPath={undefined} backlink={backlink} />
}

export const DifferentHeadlineColour = () => {
  return <PlaylistStage {...props} {...knobs()} headingColor="black" />
}
