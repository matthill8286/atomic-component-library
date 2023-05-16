import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { SkeletonBlockItem } from './SkeletonBlockItem'
import { SkeletonInlineItem } from './SkeletonInlineItem'

describe('Skeleton', () => {
  describe('SkeletonBlockItem', () => {
    it('should render', () => {
      const wrapper = renderWithTheme(<SkeletonBlockItem height="200px" />)
      expect(wrapper).toMatchSnapshot()
    })

    it('should render with height', () => {
      const wrapper = renderWithTheme(<SkeletonBlockItem height="200px" width="100%" />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('SkeletonInlineItem', () => {
    it('should render', () => {
      const wrapper = renderWithTheme(<SkeletonInlineItem text="Lorem Ipsum" />)
      expect(wrapper).toMatchSnapshot()
    })

    it('should render with font-size', () => {
      const wrapper = renderWithTheme(<SkeletonInlineItem text="Lorem Ipsum" fontSize="xxl" />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
