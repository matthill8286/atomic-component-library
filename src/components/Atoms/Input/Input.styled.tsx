import InputMask from 'react-input-mask'
import { Icon } from '@/components/Atoms/Icon'
import { defaultSpacing } from '@/styles'
import { getBoxDimension } from '@/styles/sc-shared-functions'
import { styled } from '@/styles/styled'
import { BoxDimensions } from '@/types'
import { InputStyle } from './Input.interface'
import { Divider } from '../Divider/Divider'

export const StyledInputWrapper = styled.div<{ margin: BoxDimensions; padding: BoxDimensions }>`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  vertical-align: top;
  width: 100%;

  ${({ margin, theme }) => margin && `margin: ${getBoxDimension(theme, margin)};`}
  ${({ padding, theme }) => padding && `padding: ${getBoxDimension(theme, padding)};`}

  ${Icon} {
    position: absolute;
    right: 0;
    top: ${3.5 * defaultSpacing}px;

    /* TODO - a11y: Remove the following once there are focus styles from UX */
    outline: none;

    &:focus {
      svg {
        fill: ${({ theme }) => theme.color.black};
      }
    }
  }
`

export const StyledInput = styled.input`
  border: 0;
  box-sizing: content-box;
  display: block;
  font-size: ${({ theme }) => theme.font.size.sm};
  font-family: ${({ theme }) => theme.font.family.default};
  margin: ${({ theme }) => theme.spacing.base.md} 0 0 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey4};
  background-color: ${({ theme }) => theme.color.white};
  min-width: 0;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.base.xs} ${theme.spacing.base.sm};`};
  line-height: ${({ theme }) => theme.font.lineHeight.xl};
  outline: none;
  position: relative;
  -webkit-tap-highlight-color: transparent;

  ::placeholder {
    opacity: 1;
  }
`
export const StyledInputArea = styled.textarea`
  border: 0;
  box-sizing: content-box;
  display: block;
  font-size: ${({ theme }) => theme.font.size.sm};
  font-family: ${({ theme }) => theme.font.family.default};
  margin: ${({ theme }) => theme.spacing.base.md} 0 0 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey4};
  background-color: ${({ theme }) => theme.color.white};
  min-width: 0;
  width: 100%;
  line-height: ${({ theme }) => theme.font.lineHeight.sm};
  outline: none;
  position: relative;
  -webkit-tap-highlight-color: transparent;

  ::placeholder {
    opacity: 1;
  }
`

// I duplicated this styles because passing a common css from css funcion results in some interpolation errors
// eslint-disable-next-line
export const StyledInputMask = styled(InputMask as any)`
  border: 0;
  box-sizing: content-box;
  display: block;
  font-size: ${({ theme }) => theme.font.size.sm};
  font-family: ${({ theme }) => theme.font.family.default};
  margin: ${({ theme }) => theme.spacing.base.md} 0 0 0;
  min-width: 0;
  width: 100%;
  height: ${({ theme }) => theme.spacing.base.md};
  line-height: ${({ theme }) => theme.font.lineHeight.sm};
  outline: none;
  position: relative;
  background: transparent;
  -webkit-tap-highlight-color: transparent;

  ::placeholder {
    opacity: 1;
  }
`

export const StyledHelpWrapper = styled.div<{ inputStyle: InputStyle }>`
  margin-top: ${({ theme, inputStyle }) => (inputStyle === 'dense' ? theme.spacing.base.xxs : theme.spacing.base.xs)};
`

export const StyledErrorDivider = styled(Divider)`
  position: absolute;
  left: 0;
  z-index: 99;
`
