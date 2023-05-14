import * as React from 'react'
import { LoadingIndicatorColor } from '../LoadingIndicator'
import { ButtonActionType, ButtonProps } from './Button.interface'
import { StyledAnchorButton, StyledButton, StyledLoadingIndicator, StyledRouterButton } from './Button.styled'
import { ButtonCheckmarkCircle } from './ButtonCheckmarkCircle'

const buttonColours = {
  secondary: 'black',
  inverted: 'black',
  lightBorder: 'black',
  darkBorder: 'black',
  ghost: 'black',
  outlined: 'primary',
  primary: 'white',
  prominent: 'white',
}

export const Button: React.FC<ButtonProps> = ({
  actionType = 'prominent',
  children,
  disabled = false,
  round = false,
  squared = false,
  curved = false,
  fullWidth = false,
  isLoading = false,
  isFlat = false,
  elevated = false,
  showCheckmark = false,
  weight,
  onClick,
  size = 'md',
  to,
  href,
  type = 'button',
  className,
  id,
  ...otherProps
}) => {
  const handleOnClick = (ev: React.MouseEvent<HTMLElement>) => {
    ev.stopPropagation()
    if (disabled || isLoading) {
      return
    }
    if (onClick) {
      onClick(ev)
    }
  }

  const renderLoading = (actionType: ButtonActionType) => {
    const color = buttonColours[actionType] as LoadingIndicatorColor
    return <StyledLoadingIndicator isVisible={true} size={20} color={color} />
  }

  if (href) {
    return (
      <StyledAnchorButton
        actionType={actionType}
        size={size}
        type={type}
        fullWidth={fullWidth}
        disabled={disabled}
        round={round}
        squared={squared}
        curved={curved}
        elevated={elevated}
        weight={weight}
        href={href}
        isLoading={isLoading}
        className={className}
        id={id}
        {...otherProps}
      >
        {children}
        {isLoading && !disabled && renderLoading(actionType)}
      </StyledAnchorButton>
    )
  }

  if (to != null && to !== '') {
    return (
      <StyledRouterButton
        actionType={actionType}
        size={size}
        type={type}
        fullWidth={fullWidth}
        disabled={disabled}
        round={round}
        squared={squared}
        curved={curved}
        elevated={elevated}
        weight={weight}
        isLoading={isLoading}
        to={to}
        className={className}
        id={id}
        {...otherProps}
      >
        {children}
        {isLoading && !disabled && renderLoading(actionType)}
      </StyledRouterButton>
    )
  }

  return (
    <StyledButton
      actionType={actionType}
      size={size}
      type={type}
      isFlat={isFlat}
      fullWidth={fullWidth}
      disabled={disabled}
      round={round}
      squared={squared}
      curved={curved}
      elevated={elevated}
      weight={weight}
      isLoading={isLoading}
      onClick={handleOnClick}
      className={className}
      id={id}
      {...otherProps}
    >
      {children}
      {showCheckmark && <ButtonCheckmarkCircle />}
      {isLoading && !disabled && renderLoading(actionType)}
    </StyledButton>
  )
}
