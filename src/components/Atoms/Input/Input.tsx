import React, { useState } from 'react'
import { CopyText } from '../Typography'
import { InputProps, MapStateToColor } from './Input.interface'
import { StyledErrorDivider, StyledHelpWrapper, StyledInput, StyledInputWrapper } from './Input.styled'
import { InputIcon, InputIconState } from './InputIcon'
import { InputLabel } from './InputLabel'

const mapStateToColor: MapStateToColor = {
  idle: 'grey3',
  valid: 'success',
  error: 'error',
  disabled: 'grey2',
}

const mapStateToIconState = {
  valid: 'valid',
  error: 'error',
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    autofocus = false,
    className,
    errorMessage,
    helper,
    helpText,
    iconLabel,
    inputIcon,
    inputIconSize,
    inputProps,
    inputRef,
    inputStyle = 'default',
    inputType = 'text',
    label = '',
    margin = '',
    onBlur,
    onChange,
    onClick,
    onClickIcon,
    onFocus,
    onKeyDown,
    onKeyUp,
    onMouseEnter,
    onMouseLeave,
    padding = '',
    placeholder = '',
    state = 'idle',
    value,
  } = props

  const [shrink, changeShrink] = useState<boolean>(false)
  const [isFocus, changeFocus] = useState<boolean>(autofocus)
  const [isHover, changeHover] = useState<boolean>(false)

  React.useEffect(() => {
    changeShrink(isFocus || !!value)
  }, [value])

  const onMouseEnterHandler = (ev: React.MouseEvent<HTMLInputElement>) => {
    if (!['error', 'disabled'].includes(state)) {
      changeHover(true)
    }
    if (onMouseEnter) onMouseEnter(ev)
  }

  const onMouseLeaveHandler = (ev: React.MouseEvent<HTMLInputElement>) => {
    if (onMouseLeave) onMouseLeave(ev)
    changeHover(false)
  }

  const onFocusHandler = (ev: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(ev)
    changeShrink(true)
    changeFocus(true)
  }

  const onBlurHandler = (ev: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(ev)
    if (!value) {
      changeShrink(false)
    }
    changeFocus(false)
  }

  const onChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(ev)
  }

  const onClickHandler = (ev: React.MouseEvent<HTMLInputElement>) => {
    ev.stopPropagation()
    if (onClick) onClick(ev)
  }

  const onClickIconHandler = (ev: React.MouseEvent<HTMLInputElement>) => {
    ev.stopPropagation()

    if (onClickIcon) {
      onClickIcon(ev)
    }
  }

  const showError = state === 'error' && errorMessage
  const showIcon = state === 'valid' || state === 'error' || inputIcon
  const color = isFocus || isHover ? 'grey5' : mapStateToColor[state]
  const iconState: InputIconState = mapStateToIconState[state] || 'default'
  const isRequired = !!inputProps?.required

  const combinedInputProps = {
    ...inputProps,
    placeholder: placeholder,
    autoFocus: autofocus,
    type: inputType,
    value,
    onMouseEnter: onMouseEnterHandler,
    onMouseLeave: onMouseLeaveHandler,
    onClick: onClickHandler,
    onFocus: onFocusHandler,
    onChange: onChangeHandler,
    onKeyUp: onKeyUp,
    onKeyDown: onKeyDown,
    onBlur: onBlurHandler,
    disabled: state === 'disabled',
  }

  const isAriaInvalid = state === 'error' ? true : false
  const ariaAttrs = {
    'aria-invalid': isAriaInvalid,
    'aria-required': isRequired,
    required: isRequired,
  }

  return (
    <StyledInputWrapper className={className} margin={margin} padding={padding}>
      <InputLabel color={color} htmlFor={inputProps?.id} inputStyle={inputStyle} label={label}>
        <StyledInput {...combinedInputProps} {...ariaAttrs} data-test={inputProps?.name} ref={inputRef} />
        {showError && <StyledErrorDivider height={1.75} color={color} />}
      </InputLabel>

      {showIcon && (
        <InputIcon
          icon={inputIcon}
          iconLabel={iconLabel}
          iconSize={inputIconSize}
          iconState={iconState}
          onClick={onClickIcon ? onClickIconHandler : undefined}
        />
      )}

      {showError && (
        <StyledHelpWrapper inputStyle={inputStyle}>
          <CopyText tag="span" color="error" fontSize="xxs">
            {errorMessage}
          </CopyText>
        </StyledHelpWrapper>
      )}

      {helper && <StyledHelpWrapper inputStyle={inputStyle}>{helper}</StyledHelpWrapper>}

      {helpText && (
        <StyledHelpWrapper inputStyle={inputStyle}>
          <CopyText tag="span" fontSize="xxs">
            {helpText}
          </CopyText>
        </StyledHelpWrapper>
      )}
    </StyledInputWrapper>
  )
}

Input.displayName = 'Input'
