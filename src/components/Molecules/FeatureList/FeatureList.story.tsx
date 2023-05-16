import { boolean, number } from '@storybook/addon-knobs'
import * as React from 'react'
import { FeatureList } from './FeatureList'
import { featureListMockItems } from './FeatureList.mock'
import Readme from './FeatureList.readme.md'

export default {
  title: 'Design System/Molecules/FeatureList',
}

export const Default = () => (
  <FeatureList
    features={featureListMockItems}
    showCount={number('Show Count', 4, { range: true, min: 1, max: featureListMockItems.length })}
    loading={boolean('Loading State', false)}
  />
)

Default.story = {
  parameters: {
    info: Readme,
  },
}
