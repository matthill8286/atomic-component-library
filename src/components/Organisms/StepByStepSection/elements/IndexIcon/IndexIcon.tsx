import * as React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { StyledHeading, StyledIndex } from './IndexIcon.styled'
import { IndexIconProps } from './IndexIcon.types'

export const IndexIcon: React.FC<IndexIconProps> = ({ color = 'black', content = '00', ...props }) => {
  return (
    <Icon color={color} {...props}>
      <StyledIndex color={color}>
        <StyledHeading color={color} fontFamily="featured" margin="0" scale="level-3" tag="span">
          {content}
        </StyledHeading>
      </StyledIndex>
    </Icon>
  )
}
