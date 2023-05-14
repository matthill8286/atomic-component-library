import { boolean, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { FeatureList } from './FeatureList'
import { featureListMockItems } from './FeatureList.mock'
import Readme from './FeatureList.readme.md'

storiesOf('Design System/Molecules/FeatureList', module).add(
  'Default',
  () => (
    <FeatureList
      features={featureListMockItems}
      showCount={number('Show Count', 4, { range: true, min: 1, max: featureListMockItems.length })}
      loading={boolean('Loading State', false)}
    />
  ),
  {
    info: Readme,
  },
)
