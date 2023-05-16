import React from 'react'
import { styled } from '@/styles/styled'

interface TypeRhythmProps {
  visible?: boolean
  children?: React.ReactNode
}

interface StyledTypeRhythmProps {
  visible: boolean
}

const StyledTypeRhythm = styled.div<StyledTypeRhythmProps>`
  ${({ theme, visible }) =>
    visible &&
    `
      background-size: ${theme.spacing.base.sm} ${theme.spacing.base.sm};
      background-image: linear-gradient(
        0deg,
        #eab 0%,
        #eab 25%,
        #fff 25%,
        #fff 50%,
        #eab 50%,
        #eab 75%,
        #fff 75%,
        #fff 100%
      );
    `}
`

export const TypeRhythm: React.FC<TypeRhythmProps> = ({ children, visible = true }): JSX.Element => {
  return <StyledTypeRhythm visible={visible}>{children}</StyledTypeRhythm>
}
