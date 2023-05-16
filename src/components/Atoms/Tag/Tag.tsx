import * as React from 'react'
import { Typo } from '../Typography'
import { TagProps, TagTextProps } from './Tag.interface'
import { StyledAnchorTag, StyledTagWrapper } from './Tag.styled'

const TagText: React.FC<TagTextProps> = ({ color, children, weight }): JSX.Element => {
  return (
    <Typo weight={weight} color={!color ? 'grey3' : color} fontSize={'xs'} lineHeight="xxs">
      {children}
    </Typo>
  )
}

export const Tag: React.FC<TagProps> = ({
  text,
  href,
  targetBlank,
  marginBottom,
  marginRight,
  color,
  weight,
  padding,
  className,
}): JSX.Element => {
  return (
    <StyledTagWrapper
      className={className}
      marginBottom={marginBottom}
      marginRight={marginRight}
      hasLink={!!href}
      padding={padding}
      color={color}
    >
      {href ? (
        <StyledAnchorTag href={href} target={targetBlank ? '_blank' : undefined}>
          <TagText weight={weight} color={color}>
            {text}
          </TagText>
        </StyledAnchorTag>
      ) : (
        <TagText color={color}>{text}</TagText>
      )}
    </StyledTagWrapper>
  )
}
