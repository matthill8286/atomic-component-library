import { storiesOf } from '@storybook/react'

import { ProductTileGridItemStory } from '@/components/Organisms/ProductTile/stories/ProductTileGridItemStory'
import { ProductTileListItemStory } from '@/components/Organisms/ProductTile/stories/ProductTileListItemStory'
import { SingleProductStory } from '@/components/Organisms/ProductTile/stories/SingleProductStory'

storiesOf('Design System/Organisms/ProductTile', module)
  .add('Grid Item', ProductTileGridItemStory)
  .add('List Item', ProductTileListItemStory)
  .add('Single Product', SingleProductStory)
