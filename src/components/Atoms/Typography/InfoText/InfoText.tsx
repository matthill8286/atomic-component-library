import React from 'react'
import { Typo } from '../Typo'
import { InfoTextProps } from './InfoText.interface'

export const InfoText: React.FC<InfoTextProps> = ({
  tag = 'span',
  scale = 'small',
  color = 'grey4',
  weight,
  fontSize,
  children,
  ...restProps
}) => {
  const isSmall = scale === 'small'
  const isExtraSmall = scale === 'extra-small'
  const isHighlighted = scale === 'small-highlighted'

  const presetFontSize = ((isSmall || isHighlighted) && 'xxs') || (isExtraSmall && 'xxxs')
  const presetFontWeight = ((isSmall || isExtraSmall) && 'regular') || (isHighlighted && 'semibold')

  return (
    <Typo
      tag={tag}
      color={color}
      fontSize={fontSize || presetFontSize || undefined}
      weight={weight || presetFontWeight || undefined}
      {...restProps}
    >
      {children}
    </Typo>
  )
}

InfoText.displayName = 'InfoText'
