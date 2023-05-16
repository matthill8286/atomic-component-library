import React from 'react'
import { LikeProps, StyledLikeProps } from './Like.interface'
import { Likes, StyledIconWrapper, StyledLike, Text } from './Like.styled'

export const Like: React.FC<LikeProps> = ({
  bold = false,
  children,
  className,
  cursor,
  color,
  decorationColor,
  disabled = false,
  fontSize,
  iconLeft,
  iconRight,
  inline = false,
  lineHeight,
  onClick,
  scale = 'small',
  copy,
  likes,
  underline = true,
  ...props
}): JSX.Element | null => {
  const isSmall = scale === 'small'
  const styleProps: StyledLikeProps = {
    color: decorationColor || color,
    cursor,
    hasIconLeft: !!iconLeft,
    hasIconRight: !!iconRight,
    isBold: bold,
    isDisabled: disabled,
    isInline: inline,
    isLarge: scale === 'large',
    isSmall,
    isUnderlined: underline,
  }

  if (!likes) {
    return null
  }

  return (
    <StyledLike className={className} onClick={onClick} {...styleProps} {...props}>
      {iconLeft && <StyledIconWrapper {...styleProps}>{iconLeft}</StyledIconWrapper>}
      <Likes
        tag="div"
        fontSize={fontSize || (isSmall ? 'xs' : 'sm')}
        lineHeight={lineHeight}
        bold={bold}
        color={color}
        isInline={inline}
      >
        {likes}
      </Likes>
      <Text
        tag="div"
        fontSize={fontSize || (isSmall ? 'xs' : 'sm')}
        lineHeight={lineHeight}
        color={color}
        isInline={inline}
      >
        {children}
      </Text>
      {iconRight && <StyledIconWrapper {...styleProps}>{iconRight}</StyledIconWrapper>}
    </StyledLike>
  )
}
