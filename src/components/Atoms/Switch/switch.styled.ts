import { styled } from '@/styles'
import { SwitchButtonProps, StyledSwitchProps } from './Switch.interface'

export const StyledSwitchButton = styled.span<SwitchButtonProps>`
  ${({ disabled, ariaChecked, theme: { color } }) => `
    background: ${disabled ? color.grey2 : color.white};
    border-radius: 50%;
    height: 16px;
    position: absolute;
    left: 2px;
    top: 2px;
    transition: background 150ms linear, transform 150ms linear;
    width: 16px;
    will-change: background, transform;
    transform: translateX(${ariaChecked ? '18px' : '0px'});
  `}
`

export const StyledSwitch = styled.span<StyledSwitchProps>`
  ${({ 'aria-checked': ariaChecked, disabled, theme: { color, spacing } }) => `
    background: ${disabled ? color.grey1 : ariaChecked ? color.primary : color.grey2};
    border-radius: ${spacing.base.md};
    display: inline-block;
    height: 20px;
    margin: 0;
    padding: 0;
    position: relative;
    width: 38px;

    input {
      display: none;
    }
  `}
`
