import { FC, ReactElement } from 'react'
import { DropdownProps } from '@/components/Molecules/Dropdown/Dropdown.interface'
import { styled } from '@/styles/styled'
import { ThemeColors } from '@/types/theme'
import { CopyText } from '../Typography'
import { InputProps, InputStyle } from './Input.interface'

const StyledInputLabelWrapper = styled.div`
  margin-right: ${({ theme }) => theme.spacing.base.lg};
`

const StyledLabel = styled(CopyText)`
  position: absolute;
`

export interface InputLabelProps {
  children: ReactElement<InputProps | DropdownProps> | any
  color: ThemeColors
  htmlFor?: string
  inputStyle: InputStyle
  label: string
}

export const InputLabel: FC<InputLabelProps> = (props) => {
  const { children, color, htmlFor, inputStyle, label } = props

  const fontSize = inputStyle === 'dense' ? 'xs' : 'sm'

  return (
    <StyledInputLabelWrapper>
      <StyledLabel tag="label" color={color} fontSize={fontSize} lineHeight="xs" htmlFor={htmlFor}>
        {label}
      </StyledLabel>
      {children}
    </StyledInputLabelWrapper>
  )
}
