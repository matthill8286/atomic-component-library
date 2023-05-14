import { number, radios } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { BadgeActionType, BadgeType } from '@/components/Atoms/Badge/Badge.interface'
import { StorybookRouterWrapper } from '@/utils/StorybookWrapper'
import { ImageTeaser } from './ImageTeaser'
import { ImageTeaserFCProps } from './ImageTeaser.interface'
import { getTransformedImageVersion } from '@/utils/useGraphCmsImages'

const actionTypes: { [key: string]: BadgeActionType } = {
  prominent: 'prominent',
  secondary: 'secondary',
}

const badges: BadgeType[] = [
  { id: 0, name: 'Featured' },
  { id: 1, name: 'Sponsored', actionType: 'prominent' },
]

storiesOf('Design System/Organisms/Teasers/ImageTeaser', module).add('Default', () => {
  const knobs = (): ImageTeaserFCProps => {
    return {
      badgeActionType: radios('Type', actionTypes, actionTypes['prominent']),
      finalImages: [
        getTransformedImageVersion('c8GLaIBVRa6EelN5baVr'),
        getTransformedImageVersion('OWr5QtrXQ1eHiwMdrDM7'),
        getTransformedImageVersion('fj7dbi1rSa2cGlaQqwDG'),
        getTransformedImageVersion('NPgqQFqR0uJ1XhB00sGg'),
      ],
    }
  }

  const height = number('height', 300, {
    range: true,
    min: 100,
    max: 600,
    step: 1,
  })

  return (
    <StorybookRouterWrapper>
      <div
        style={{
          height,
          width: '100%',
          display: 'flex',
        }}
      >
        <ImageTeaser key={'ImageTeaser_' + height} {...knobs()} badges={badges} />
      </div>
    </StorybookRouterWrapper>
  )
})
