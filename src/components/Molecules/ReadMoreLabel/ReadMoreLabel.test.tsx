import React from 'react'
import { mountWithTheme } from '@/testRenderer'
import { Collapse } from '@/components/Atoms/Collapse/Collapse'
import { CopyText } from '@/components/Atoms/Typography'
import { ReadMoreLabel } from './ReadMoreLabel'

describe('<ReadMoreLabel> Atom', () => {
  test('renders correct open state', () => {
    const wrapper = mountWithTheme(
      <ReadMoreLabel htmlFor="id" isOpen showMoreLabel="more more" showLessLabel="less less">
        A label
      </ReadMoreLabel>,
    )
    expect(wrapper.find(ReadMoreLabel).prop('isOpen')).toEqual(true)
  })

  test('renders correct collapsed state', () => {
    const wrapper = mountWithTheme(
      <ReadMoreLabel
        htmlFor="id"
        isOpen={false}
        collapsedHeight={24}
        showMoreLabel="show more"
        showLessLabel="show less"
      >
        A label
      </ReadMoreLabel>,
    )
    expect(wrapper.find(ReadMoreLabel).prop('isOpen')).toEqual(false)
    expect(wrapper.find(ReadMoreLabel).prop('collapsedHeight')).toEqual(24)
  })

  test('emits onClick events', () => {
    const mockClickHandler = jest.fn()
    const wrapper = mountWithTheme(
      <ReadMoreLabel
        htmlFor="id"
        isOpen={false}
        onClick={mockClickHandler}
        showMoreLabel="show more"
        showLessLabel="show less"
      >
        A label
      </ReadMoreLabel>,
    )
    wrapper.find(Collapse).simulate('click')
    expect(mockClickHandler).toHaveBeenCalledTimes(1)
  })

  test('emits onChange events', () => {
    const mockChangeHandler = jest.fn()
    const wrapper = mountWithTheme(
      <ReadMoreLabel
        htmlFor="id"
        isOpen={false}
        onChange={mockChangeHandler}
        showMoreLabel="show more"
        showLessLabel="show less"
      >
        A label
      </ReadMoreLabel>,
    )

    wrapper.find(CopyText).simulate('click')
    expect(mockChangeHandler).toHaveBeenCalledTimes(1)
    expect(mockChangeHandler).toHaveBeenCalledWith(false)

    wrapper.find(CopyText).simulate('click')
    expect(mockChangeHandler).toHaveBeenCalledTimes(2)
    expect(mockChangeHandler).toHaveBeenCalledWith(true)
  })
})
