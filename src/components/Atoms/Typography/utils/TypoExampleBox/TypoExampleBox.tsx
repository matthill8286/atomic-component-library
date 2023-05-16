import * as React from 'react'
import { TypoExampleBoxProps } from './TypoExampleBox.interface'
import { StyledBox, StyledLabel1, StyledLabel2 } from './TypoExampleBox.styled'

export const TypoExampleBox: React.FC<TypoExampleBoxProps> = ({ children, labelTop, labelBottom: labelBottom }) => {
  return (
    <StyledBox>
      <StyledLabel1>{labelTop}</StyledLabel1>
      {children}
      <StyledLabel2>{labelBottom}</StyledLabel2>
    </StyledBox>
  )
}
