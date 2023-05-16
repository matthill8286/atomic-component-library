import * as React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { AmountPicker, StyledAmountPicker, StyledButtonForAmountPicker } from './AmountPicker'
import { AmountPickerProps } from './AmountPicker.interface'

describe('AmountPicker', () => {
  test('Should render an AmountPicker', () => {
    const tree = renderWithTheme(
      <AmountPicker
        label="Quantity for Sony Braia TV"
        max={10}
        min={1}
        minusLabel="Decrease quantity"
        onQuantityChange={jest.fn()}
        plusLabel="Increase quantity"
        quantity={1}
      />,
    )
    expect(tree).toMatchSnapshot()
  })

  describe('a11y:', () => {
    const getWrapper = (props: Partial<AmountPickerProps> = {}) => {
      return mountWithTheme(
        <AmountPicker
          label="Quantity for Sony Braia TV"
          max={10}
          min={1}
          minusLabel="Decrease quantity"
          onQuantityChange={jest.fn()}
          plusLabel="Increase quantity"
          quantity={2}
          {...props}
        />,
      )
    }

    test('Group exists', () => {
      const wrapper = getWrapper()
      const group = wrapper.find('[role="group"]')
      expect(group).toHaveLength(1)
      expect(group.prop('tabIndex')).toBe(-1)
    })

    test('StyledAmountPicker has spinbutton attributes', () => {
      const wrapper = getWrapper()
      const amountPicker = wrapper.find(StyledAmountPicker)
      expect(amountPicker).toHaveLength(1)
      expect(amountPicker.prop('tabIndex')).toBe(0)
      expect(amountPicker.prop('role')).toBe('spinbutton')
      expect(amountPicker.prop('aria-label')).toBe('Quantity for Sony Braia TV')
      expect(amountPicker.prop('aria-valuemax')).toBe(10)
      expect(amountPicker.prop('aria-valuemin')).toBe(1)
      expect(amountPicker.prop('aria-valuenow')).toBe(2)
    })

    test('aria-invalid is set correctly', () => {
      const valid = getWrapper()
      expect(valid.find(StyledAmountPicker).prop('aria-invalid')).toBe(false)

      const invalidMin = getWrapper({ quantity: 0 })
      expect(invalidMin.find(StyledAmountPicker).prop('aria-invalid')).toBe(true)

      const invalidMax = getWrapper({ quantity: 11 })
      expect(invalidMax.find(StyledAmountPicker).prop('aria-invalid')).toBe(true)
    })

    test('Minus button has aria attributes', () => {
      const wrapper = getWrapper()
      const buttons = wrapper.find(StyledButtonForAmountPicker)
      expect(buttons).toHaveLength(2)

      const minusBtn = buttons.at(0)
      expect(minusBtn.prop('aria-label')).toBe('Decrease quantity')

      const disabled = getWrapper({ quantity: 0 })
      const buttonsDisabled = disabled.find(StyledButtonForAmountPicker)
      expect(buttonsDisabled).toHaveLength(2)

      const minusBtnDisabled = buttonsDisabled.at(0)
      expect(minusBtnDisabled.prop('aria-disabled')).toBe(true)
    })

    test('Plus button has aria attributes', () => {
      const wrapper = getWrapper()
      const buttons = wrapper.find(StyledButtonForAmountPicker)
      expect(buttons).toHaveLength(2)

      const plusBtn = buttons.at(1)
      expect(plusBtn.prop('aria-label')).toBe('Increase quantity')
      expect(plusBtn.prop('aria-disabled')).toBe(false)

      const disabled = getWrapper({ quantity: 10 })
      const buttonsDisabled = disabled.find(StyledButtonForAmountPicker)
      expect(buttonsDisabled).toHaveLength(2)

      const plusBtnDisabled = buttonsDisabled.at(1)
      expect(plusBtnDisabled.prop('aria-disabled')).toBe(true)
    })
  })
})
