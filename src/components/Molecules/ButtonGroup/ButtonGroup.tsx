/* global JSX */
import React from 'react'
import { StyledButtonGroup } from './ButtonGroup.styled'

export function ButtonGroup(props: { children: React.ReactNode }): JSX.Element {
  return <StyledButtonGroup>{props.children}</StyledButtonGroup>
}

ButtonGroup.displayName = 'ButtonGroup'
