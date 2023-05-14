import React from 'react'
import { OtherClose } from '@matthill8286/atomic-icon-library'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { CopyText } from '../Typography'
import { Input } from './Input'
import { InputEvents, InputState, InputStyle } from './Input.interface'

describe('Input', () => {
  it('should render', () => {
    const wrapper = renderWithTheme(<Input />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render with different states', () => {
    const states: InputState[] = ['idle', 'valid', 'error', 'disabled']
    states.forEach((state) => {
      const wrapper = renderWithTheme(<Input state={state} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
  it('should render with helper component', () => {
    const wrapper = renderWithTheme(<Input helper={<CopyText>help text</CopyText>} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render with errorMessage', () => {
    const wrapper = renderWithTheme(<Input state="error" errorMessage="error message" />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render with masked input', () => {
    const wrapper = mountWithTheme(<Input inputMaskProps={{ mask: '11.11.1111' }} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render with dense inputStyle', () => {
    const inputStyles: InputStyle[] = ['default', 'dense', 'large']
    inputStyles.forEach((style) => {
      const wrapper = renderWithTheme(<Input inputStyle={style} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
  it('should fire InputEvents', () => {
    const events: InputEvents = {
      onMouseEnter: jest.fn(),
      onMouseLeave: jest.fn(),
      onClick: jest.fn(),
      onFocus: jest.fn(),
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onKeyDown: jest.fn(),
      onKeyUp: jest.fn(),
      onClickIcon: jest.fn(),
    }
    const wrapper = mountWithTheme(<Input {...events} />)
    const input = wrapper.find('input')

    input.simulate('mouseEnter')
    expect(events.onMouseEnter).toBeCalledTimes(1)

    input.simulate('mouseLeave')
    expect(events.onMouseLeave).toBeCalledTimes(1)

    input.simulate('click')
    expect(events.onClick).toBeCalledTimes(1)

    input.simulate('focus')
    expect(events.onFocus).toBeCalledTimes(1)

    input.simulate('blur')
    expect(events.onBlur).toBeCalledTimes(1)

    input.simulate('change', { target: { value: 'hallo!' } })
    expect(events.onChange).toBeCalledTimes(1)

    input.simulate('keyDown')
    expect(events.onKeyDown).toBeCalledTimes(1)

    input.simulate('keyUp')
    expect(events.onKeyUp).toBeCalledTimes(1)
  })

  describe('a11y:', () => {
    test('Input required attributes are set to true', () => {
      const wrapper = mountWithTheme(<Input state="idle" inputProps={{ required: true }} />)
      const input = wrapper.find('input')
      expect(input).toHaveLength(1)

      const inputProps = input.props()
      expect(inputProps['required']).toBe(true)
      expect(inputProps['aria-required']).toBe(true)
    })

    test('Input required attributes are set to false', () => {
      const wrapper = mountWithTheme(<Input state="idle" />)
      const input = wrapper.find('input')
      expect(input).toHaveLength(1)

      const inputProps = input.props()
      expect(inputProps['required']).toBe(false)
      expect(inputProps['aria-required']).toBe(false)
    })

    test('Input aria-invalid attribute is true if state = "error"', () => {
      const wrapper = mountWithTheme(<Input state="error" errorMessage="error message" />)
      const input = wrapper.find('input')
      expect(input).toHaveLength(1)

      const inputProps = input.props()
      expect(inputProps['aria-invalid']).toBe(true)
    })

    test('Input aria-invalid attribute is false if state = "error"', () => {
      const wrapper = mountWithTheme(<Input state="idle" />)
      const input = wrapper.find('input')
      expect(input).toHaveLength(1)

      const inputProps = input.props()
      expect(inputProps['aria-invalid']).toBe(false)
    })

    test('Icon has aria-label attribute', () => {
      const wrapper = mountWithTheme(
        <Input state="idle" iconLabel="Click me!" onClickIcon={() => null} inputIcon={<OtherClose />} />,
      )
      const btn = wrapper.find('button')
      expect(btn).toHaveLength(1)

      const btnProps = btn.props()
      expect(btnProps['aria-label']).toBe('Click me!')
    })
  })
})
