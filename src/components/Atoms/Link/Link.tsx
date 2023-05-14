import React from 'react'
import { smoothScrollWithEvent } from '@/utils'
import { LinkProps, StyledLinkProps } from './Link.interface'
import { StyledIconWrapper, StyledLinkAnchor, StyledLinkButton, StyledLinkRouter, Text } from './Link.styled'

export const Link: React.FC<LinkProps> = ({
  bold = false,
  branded = false,
  children,
  className,
  cursor,
  color = 'grey4',
  decorationColor,
  disabled = false,
  fontSize,
  href,
  iconLeft,
  iconRight,
  inline = false,
  lineHeight,
  onClick,
  onMouseDown,
  scale = 'small',
  scrollOffset = 0,
  smooth = false,
  target = '_self',
  title,
  to,
  underline = true,
  isGrouped = false,
  ariaLabel,
  ...otherProps
}): JSX.Element => {
  const isSmall = scale === 'small'
  const isButton = onClick && !href && !to
  const isRouterLink = to

  const styleProps: StyledLinkProps = {
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
    isGrouped,
  }
  let onClickWrapper

  if (smooth) {
    onClickWrapper = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      try {
        smoothScrollWithEvent(event, scrollOffset)
      } catch (e) {
        //failsafe
      }
      if ('function' == typeof onClick) {
        return onClick(event)
      }
    }
  } else {
    onClickWrapper = onClick
  }

  const getChildren = (): JSX.Element => (
    <>
      {iconLeft && <StyledIconWrapper {...styleProps}>{iconLeft}</StyledIconWrapper>}
      {typeof children === 'string' ? (
        <Text
          tag="span"
          fontSize={fontSize || (isSmall ? 'xs' : 'sm')}
          lineHeight={lineHeight}
          bold={bold}
          color={color}
          isBranded={branded}
          isInline={inline}
          aria-label={ariaLabel}
        >
          {children}
        </Text>
      ) : (
        children
      )}
      {iconRight && <StyledIconWrapper {...styleProps}>{iconRight}</StyledIconWrapper>}
    </>
  )

  const linkType = (): JSX.Element => {
    if (isButton) {
      return (
        <StyledLinkButton
          className={className}
          {...(disabled ? {} : { onClick: onClickWrapper })}
          {...styleProps}
          {...otherProps}
        >
          {getChildren()}
        </StyledLinkButton>
      )
    }

    if (isRouterLink) {
      return (
        <StyledLinkRouter
          onClick={onClickWrapper}
          to={to}
          className={className}
          {...styleProps}
          data-test="ewb-router-link"
        >
          {getChildren()}
        </StyledLinkRouter>
      )
    }

    return (
      <StyledLinkAnchor
        className={className}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : otherProps.rel}
        {...(disabled ? {} : { href, onClick: onClickWrapper })}
        {...styleProps}
        {...otherProps}
      >
        {getChildren()}
      </StyledLinkAnchor>
    )
  }

  return linkType()
}
