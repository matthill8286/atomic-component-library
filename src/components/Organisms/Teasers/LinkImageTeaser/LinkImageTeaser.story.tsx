import { number, radios, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { BadgeActionType } from '@/components/Atoms/Badge/Badge.interface'
import { StorybookRouterWrapper } from '@/utils/StorybookWrapper'
import { ImageTeaserProps } from '../ImageTeaser/ImageTeaser.interface'
import { LinkImageTeaser } from './LinkImageTeaser'
import { getTransformedImageVersion } from '@/utils/useGraphCmsImages'

const actionTypes: { [key: string]: BadgeActionType } = {
  prominent: 'prominent',
  secondary: 'secondary',
}

const badges = [
  { id: 0, name: 'Featured' },
  { id: 1, name: '100% Live!!!' },
]

storiesOf('Design System/Organisms/Teasers/LinkImageTeaser', module).add('Default', () => {
  const knobs = (): ImageTeaserProps => {
    return {
      link: {
        to: text('Link To', '/'),
        href: text('Link href', '#'),
        isLinkBlank: false,
      },
      badgeActionType: radios('Type', actionTypes, actionTypes['prominent']),
      images: {
        sm: getTransformedImageVersion('c8GLaIBVRa6EelN5baVr'),
        md: getTransformedImageVersion('OWr5QtrXQ1eHiwMdrDM7'),
        lg: getTransformedImageVersion('fj7dbi1rSa2cGlaQqwDG'),
        xl: getTransformedImageVersion('NPgqQFqR0uJ1XhB00sGg'),
      },
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
        <LinkImageTeaser key={'ImageTeaser_' + height} {...knobs()} badges={badges} />
      </div>
    </StorybookRouterWrapper>
  )
})
