import { mount } from 'enzyme'
import React from 'react'
import { renderWithThemeAndRouter } from '@/testRenderer'
import { Foldable, StyledFoldable } from './Foldable'

const assertHeightIsCorrect = (wrapper, height) => {
  expect(wrapper.find(StyledFoldable).prop('style').height).toBe(height)
}

describe('Foldable', () => {
  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'clientHeight', { configurable: true, value: 50 })
  })

  it('should render', () => {
    const tree = renderWithThemeAndRouter(
      <Foldable isOpen>
        <div>HIDDEN</div>
      </Foldable>,
    )
    expect(tree).toMatchSnapshot()
  })
  it('should have a height of auto if initially opened', () => {
    const props = {
      isOpen: true,
    }
    const wrapper = mount(
      <Foldable {...props}>
        <div>HIDDEN</div>
      </Foldable>,
    )
    expect(wrapper.state('height')).toBe(50)
    assertHeightIsCorrect(wrapper, 50)
  })

  it('should have a height of 0 if initially closed', () => {
    const props = {
      isOpen: false,
    }
    const wrapper = mount(
      <Foldable {...props}>
        <div>HIDDEN</div>
      </Foldable>,
    )
    expect(wrapper.state('height')).toBe(0)
    assertHeightIsCorrect(wrapper, 0)
  })

  it('should update the height two times when opened', () => {
    const props = {
      isOpen: false,
    }
    const wrapper = mount<Foldable>(
      <Foldable {...props}>
        <div>HIDDEN</div>
      </Foldable>,
    )
    const node = wrapper.find('[data-test="inner-foldable"]').instance()
    Object.defineProperty(node, 'clientHeight', { value: 100 })

    const spy = jest.spyOn(wrapper.instance(), 'setState')

    expect(wrapper.state('height')).toBe(0)
    assertHeightIsCorrect(wrapper, 0)
    expect(spy).toHaveBeenCalledTimes(0)

    wrapper.setProps({ isOpen: true })
    wrapper.childAt(0).simulate('transitionEnd')

    expect(spy).toHaveBeenCalledTimes(2)
    const calls = spy.mock.calls
    const call1Arg1 = calls && calls[0] && calls[0][0]
    const call2Arg1 = calls && calls[1] && calls[1][0]
    if (call1Arg1 && 'height' in call1Arg1) {
      expect(call1Arg1.height).toBe(100)
    }
    if (call2Arg1 && 'height' in call2Arg1) {
      expect(call2Arg1.height).toBe('auto')
    }
    spy.mockClear()
  })

  it('should update the height two times when closed', () => {
    const props = {
      isOpen: true,
    }
    const wrapper = mount<Foldable>(
      <Foldable {...props}>
        <div>HIDDEN</div>
      </Foldable>,
    )
    const node = wrapper.find('[data-test="inner-foldable"]').instance()
    Object.defineProperty(node, 'clientHeight', { value: 100 })

    const spy = jest.spyOn(wrapper.instance(), 'setState')

    expect(wrapper.state('height')).toBe(50)
    assertHeightIsCorrect(wrapper, 50)
    expect(spy).toHaveBeenCalledTimes(0)

    wrapper.setProps({ isOpen: false })

    expect(spy).toHaveBeenCalledTimes(2)
    const calls = spy.mock.calls
    const call1Arg1 = calls && calls[0] && calls[0][0]
    const call2Arg1 = calls && calls[1] && calls[1][0]

    if (call1Arg1 && 'height' in call1Arg1) {
      expect(call1Arg1.height).toBe(100)
    }
    if (call2Arg1 && 'height' in call2Arg1) {
      expect(call2Arg1.height).toBe(0)
    }
    spy.mockClear()
  })
})
