import React, { FC } from 'react'
import { media } from '@/styles/media'
import { css, styled } from '@/styles/styled'

export type FlexAlignItemsOptions = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch'

export interface FlexBoxProps {
  debug?: boolean
  display?: 'flex' | 'inline-flex'
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  alignItems?: FlexAlignItemsOptions
}

const StyledBox = styled.div<FlexBoxProps>`
  ${({ debug }) =>
    debug &&
    css`
      border: 1px solid green;
      padding: 8px;
    `}
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap}`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
`

export const FlexBox: FC<FlexBoxProps> = (props) => {
  const {
    debug = false,
    display = 'flex',
    flexDirection = 'row',
    flexWrap,
    justifyContent,
    alignContent,
    alignItems,
    children,
    ...otherProps
  } = props

  return (
    <StyledBox
      debug={debug}
      display={display}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      justifyContent={justifyContent}
      alignContent={alignContent}
      alignItems={alignItems}
      {...otherProps}
    >
      {children}
    </StyledBox>
  )
}

FlexBox.displayName = 'FlexBox'

export interface FlexItemProps {
  debug?: boolean
  order?: number
  flex?: string
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  padding?: boolean
}

const StyledFlexItem = styled.div<FlexItemProps>`
  ${({ debug }) =>
    debug &&
    css`
      border: 1px solid blue;
      padding: 8px;
    `}
  order: ${({ order }) => order};
  flex: ${({ flex }) => flex};
  align-self: ${({ alignSelf }) => alignSelf};
  padding: ${({ theme, padding }) => (padding ? `0 ${theme.spacing.base.xs}` : 0)};
`

export const FlexItem: FC<FlexItemProps> = (props) => {
  const { children, debug, order = 0, flex = '0 1 auto', alignSelf = 'auto', ...otherProps } = props

  return (
    <StyledFlexItem debug={debug} order={order} flex={flex} alignSelf={alignSelf} {...otherProps}>
      {children}
    </StyledFlexItem>
  )
}

FlexItem.displayName = 'FlexItem'
