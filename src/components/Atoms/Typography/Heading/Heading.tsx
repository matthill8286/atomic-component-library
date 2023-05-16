import React from 'react'
import { Typo } from '../Typo'
import { TypoProps } from '../Typo/Typo.interface'
import { HeadingProps } from './Heading.interface'
import { HeadingPresets } from './HeadingPresets'

export const Heading: React.FC<HeadingProps> = ({
  scale,
  margin,
  children,
  bold = false,
  uppercase = false,
  limitLines,
  limitWidth,
  color,
  showCursor,
  ...restProps
}) => {
  const props: TypoProps = {
    margin: '0',
    color: color,
    fontFamily: 'default',
    spacing: 'base',
    ...HeadingPresets[scale],
    ...restProps,
  }

  if (margin) {
    props.margin = margin
  }

  if (bold) {
    props.weight = 'bold'
  }

  return (
    <Typo limitLines={limitLines} limitWidth={limitWidth} toUpperCase={uppercase} {...props}>
      {children}
    </Typo>
  )
}

Heading.displayName = 'Heading'
