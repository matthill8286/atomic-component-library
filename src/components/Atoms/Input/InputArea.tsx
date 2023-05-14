import React, { useState } from 'react'
import { CopyText } from '../Typography'
import { InputAreaProps, MapStateToColor } from './Input.interface'
import { StyledErrorDivider, StyledHelpWrapper, StyledInputArea, StyledInputWrapper } from './Input.styled'
import { InputDivider } from './InputDivider'
import { InputIcon, InputIconState } from './InputIcon'
import { InputLabel } from './InputLabel'

type InputAction = null | 'hover' | 'press' | 'focus'

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

export const InputArea: React.FC<InputAreaProps> = (props) => {
  const {
    className,
    margin = '',
    padding = '',
    inputProps,
    state = 'idle',
    label = '',
    inputStyle = 'default',
    placeholder = '',
    autofocus = false,
    value = '',
    inputRef,
    inputIcon,
    rows,
    helpText,
    helper,
    errorMessage,
    onMouseEnter,
    onMouseLeave,
    onClick,
    onClickIcon,
    onBlur,
    onChange,
    onKeyUp,
    onKeyDown,
    onFocus,
  } = props

  const [shrink, changeShrink] = useState<boolean>(value !== '')
  const [action, changeAction] = useState<InputAction>(null)

  const onMouseEnterHandler = (ev: React.MouseEvent<HTMLTextAreaElement>) => {
    if (!['error', 'disabled'].includes(state)) {
      changeAction('hover')
    }
    if (onMouseEnter) onMouseEnter(ev)
  }

  const onMouseLeaveHandler = (ev: React.MouseEvent<HTMLTextAreaElement>) => {
    if (onMouseLeave) onMouseLeave(ev)
    changeAction(null)
  }

  const onFocusHandler = (ev: React.FocusEvent<HTMLTextAreaElement>) => {
    if (onFocus) onFocus(ev)
    changeShrink(true)
    changeAction('focus')
  }

  const onBlurHandler = (ev: React.FocusEvent<HTMLTextAreaElement>) => {
    if (onBlur) onBlur(ev)
    if (value === '') {
      changeShrink(false)
    }
    changeAction(null)
  }

  const onChangeHandler = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(ev)
  }

  const onClickHandler = (ev: React.MouseEvent<HTMLTextAreaElement>) => {
    ev.stopPropagation()
    if (onClick) onClick(ev)
  }

  const onClickIconHandler = (ev: React.MouseEvent<HTMLInputElement>) => {
    ev.stopPropagation()
    if (onClickIcon) onClickIcon(ev)
  }

  const showError = state === 'error' && errorMessage
  const showIcon = state === 'valid' || state === 'error' || inputIcon
  const color = action ? 'grey5' : mapStateToColor[state]
  const iconState: InputIconState = mapStateToIconState[state] || 'default'

  const combinedInputProps = {
    ...inputProps,
    placeholder: placeholder,
    autoFocus: autofocus,
    inputStyle,
    value,
    rows,
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

  return (
    <StyledInputWrapper className={className} margin={margin} padding={padding}>
      <InputLabel color={color} label={label} inputStyle={inputStyle}>
        {<StyledInputArea {...combinedInputProps} ref={inputRef} />}
        {showError && <StyledErrorDivider height={1.75} color={color} />}
      </InputLabel>

      {showIcon && <InputIcon iconState={iconState} icon={inputIcon} onClick={onClickIconHandler} />}

      {helper && <StyledHelpWrapper inputStyle={inputStyle}>{helper}</StyledHelpWrapper>}

      {helpText && (
        <StyledHelpWrapper inputStyle={inputStyle}>
          <CopyText tag="span" fontSize="xxs">
            {helpText}
          </CopyText>
        </StyledHelpWrapper>
      )}

      {showError && (
        <StyledHelpWrapper inputStyle={inputStyle}>
          <CopyText tag="span" color="error" fontSize="xxs">
            {errorMessage}
          </CopyText>
        </StyledHelpWrapper>
      )}
    </StyledInputWrapper>
  )
}

InputArea.displayName = 'Input'
