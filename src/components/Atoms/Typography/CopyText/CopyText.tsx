import React from 'react'
import { BoxDimensions, ThemeFontSizes } from '@/types/theme'
import { Typo } from '../Typo'
import { FontSizeMap } from '../Typo/Typo.interface'
import { CopyTextProps } from './CopyText.interface'

const getMargins = (fontSize?: ThemeFontSizes): BoxDimensions => {
  if (fontSize && (fontSize === 'xs' || fontSize === 'sm')) {
    return 'xs 0 md'
  } else {
    return ''
  }
}

export const CopyText: React.FC<CopyTextProps> = ({
  tag = 'p',
  withMargins = false,
  bold = false,
  color = 'grey5',
  fontSize = 'xs',
  children,
  margin,
  ...restProps
}) => (
  <Typo
    tag={tag}
    color={color}
    fontSize={fontSize}
    weight={bold ? 'bold' : 'regular'}
    margin={
      (withMargins &&
        fontSize &&
        (typeof fontSize === 'string' ? getMargins(fontSize) : getMargins((fontSize as FontSizeMap)?.mobile))) ||
      margin
    }
    {...restProps}
  >
    {children}
  </Typo>
)

CopyText.displayName = 'CopyText'
