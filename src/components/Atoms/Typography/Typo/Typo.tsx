import React from 'react'
import { TypoProps } from './Typo.interface'
import { StyledInfoTypo } from './Typo.styled'

export const Typo: React.FC<TypoProps> = ({ tag = 'span', children, ...restProps }) => (
  <StyledInfoTypo as={tag} tag={tag} {...restProps}>
    {children}
  </StyledInfoTypo>
)

Typo.displayName = 'Typo'
