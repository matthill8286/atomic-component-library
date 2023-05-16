import React from 'react'
import { SkeletonInlineItem } from '@/components/Atoms/Skeleton'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { FeatureList } from './FeatureList'
import { featureListMockItems } from './FeatureList.mock'

describe('FeatureList', () => {
  it('should render with items', () => {
    const wrapper = renderWithTheme(<FeatureList features={featureListMockItems} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should show the number of items as specified by chowCount', () => {
    const wrapper = mountWithTheme(<FeatureList features={featureListMockItems} showCount={4} />)

    expect(wrapper).toBeDefined()
    expect(wrapper.find('li')).toHaveLength(4)
  })

  it('should render items with reduced count', () => {
    const wrapper = renderWithTheme(<FeatureList features={featureListMockItems} showCount={4} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render loading state without items', () => {
    const wrapper = mountWithTheme(<FeatureList loading={true} showCount={4} />)
    expect(wrapper.find(SkeletonInlineItem)).toHaveLength(8)
  })
})
