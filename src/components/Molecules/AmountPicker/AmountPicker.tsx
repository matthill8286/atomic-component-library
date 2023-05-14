import * as React from 'react'
import { Button } from '@/components/Atoms/Button'
import { Icon } from '@/components/Atoms/Icon'
import { styled } from '@/styles/styled'
import { OtherAdd, OtherRemove } from '@matthill8286/atomic-icon-library'
import { AmountPickerProps, ButtonTypes, OnQuantityChangeEvent } from './AmountPicker.interface'
import { getNewQuantity } from './helpers/getNewQuantity'

export const StyledButtonForAmountPicker = styled(Button)`
  background: none;
  padding: 0;
  border: none;
  margin: 0 ${({ theme }) => theme.spacing.base.xs};
  max-height: 40px;

  ${Icon} {
    & svg {
      width: 16px;
      height: 16px;
      fill: ${({ theme }) => theme.color.grey5};
    }
  }

  :active ${Icon} {
    & svg {
      fill: ${({ theme }) => theme.color.selected};
    }
  }

  :disabled ${Icon} {
    & svg {
      fill: ${({ theme }) => theme.color.grey2};
    }
  }
`
export const StyledAmountPicker = styled.div`
  box-sizing: border-box;
  align-items: center;
  border-radius: ${({ theme }) => theme.dimension.borderRadius1};
  border: 1px solid ${({ theme }) => theme.color.grey2};
  display: inline-flex;
  font-family: ${({ theme }) => theme.font.family.default};
  font-size: ${({ theme }) => theme.font.size.sm};
  height: 40px;
  justify-content: center;
  position: relative;
`

export const AmountPicker: React.FC<AmountPickerProps> = ({
  label = '',
  max,
  min,
  minusLabel = '',
  onDisabledQuantityClick,
  onQuantityChange,
  plusLabel = '',
  quantity,
  ...props
}) => {
  const isMinusDisabled = quantity <= min
  const isPlusDisabled = quantity >= max
  const handleOnClick = (buttonType: ButtonTypes) => (event: OnQuantityChangeEvent) => {
    onQuantityChange(event, getNewQuantity(buttonType, quantity, min, max), quantity)
  }

  const handleDisabledClick = (type: ButtonTypes) => (event: OnQuantityChangeEvent) => {
    if (onDisabledQuantityClick) {
      onDisabledQuantityClick(event as React.MouseEvent, type)
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault()

    switch (event.key) {
      case 'ArrowUp':
        onQuantityChange(event, getNewQuantity('plus', quantity, min, max), quantity)
        break

      case 'ArrowDown':
        onQuantityChange(event, getNewQuantity('minus', quantity, min, max), quantity)
        break

      case 'End':
        onQuantityChange(event, max, quantity)
        break

      case 'Home':
        onQuantityChange(event, min, quantity)
        break

      default:
        break
    }
  }

  return (
    <div onKeyDown={handleKeyPress} role="group" tabIndex={-1}>
      <StyledAmountPicker
        {...props}
        aria-invalid={!!(quantity < min || quantity > max)}
        aria-label={label}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={quantity}
        data-test="amount-picker"
        role="spinbutton"
        tabIndex={0}
      >
        <div onClick={isMinusDisabled ? handleDisabledClick('minus') : undefined}>
          <StyledButtonForAmountPicker
            actionType="ghost"
            aria-disabled={isMinusDisabled}
            aria-label={minusLabel}
            disabled={isMinusDisabled}
            onClick={handleOnClick('minus')}
            tabIndex={-1}
          >
            <Icon color={'primary'} height={20} width={20}>
              <OtherRemove />
            </Icon>
          </StyledButtonForAmountPicker>
        </div>
        {quantity}
        <div onClick={isPlusDisabled ? handleDisabledClick('plus') : undefined}>
          <StyledButtonForAmountPicker
            actionType="ghost"
            aria-disabled={isPlusDisabled}
            aria-label={plusLabel}
            disabled={isPlusDisabled}
            onClick={handleOnClick('plus')}
            tabIndex={-1}
          >
            <Icon color={'primary'} height={20} width={20}>
              <OtherAdd />
            </Icon>
          </StyledButtonForAmountPicker>
        </div>
      </StyledAmountPicker>
    </div>
  )
}
