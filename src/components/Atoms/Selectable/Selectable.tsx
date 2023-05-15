import * as React from 'react'
import { Icon } from '../Icon'
import { CopyText } from '../Typography'
import { SelectableProps } from './Selectable.interface'
import {
  StyledButtonLabel,
  StyledButtonText,
  StyledCopyText,
  StyledFocusedIndicator,
  StyledIcon,
  StyledLabel,
  StyledNativeSelectable,
  StyledRadioMark,
  StyledSelectableButton,
  StyledSelectableButtonContentWrapper,
  StyledSelectableContent,
  StyledSelectableContentWrapper,
} from './Selectable.styled'
import { OtherDone } from 'atomic-icon-library'

export const Selectable: React.FC<SelectableProps> = ({
  children,
  displayType,
  errorMessage,
  icon,
  isChecked,
  label,
  selectableId,
  state = 'idle',
  onChangeValue,
  selectableSize = 'large',
  type,
  value = '',
  name,
  inputRef,
  ...otherProps
}) => {
  const onInputChange = (event) => {
    onChangeValue?.(event.target.checked, event.target.value)
  }

  const isCheckedValue = isChecked && { checked: isChecked }
  const showError = state === 'error' && errorMessage

  const SelectableRadioOrCheckbox = (
    <StyledLabel
      key={selectableId + isChecked}
      selectableSize={selectableSize}
      state={state}
      type={type}
      htmlFor={selectableId}
      {...otherProps}
    >
      <StyledNativeSelectable
        id={selectableId}
        {...isCheckedValue}
        type={type}
        name={name}
        value={value}
        state={state}
        selectableSize={selectableSize}
        onChange={(e) => onInputChange(e)}
        ref={inputRef}
      />
      {type === 'checkbox' && (
        <StyledIcon selectableSize={selectableSize} state={state}>
          <OtherDone />
        </StyledIcon>
      )}
      {type === 'radio' && <StyledRadioMark selectableSize={selectableSize} state={state} />}
      <StyledSelectableContentWrapper>
        <StyledCopyText
          padding="0 0 0 xs"
          fontSize={selectableSize === 'large' ? 'sm' : 'xs'}
          lineHeight={selectableSize === 'large' ? 'sm' : 'xs'}
        >
          {children || label}
        </StyledCopyText>
        {showError && (
          <CopyText
            tag="div"
            color="error"
            fontSize="xxs"
            margin="xs 0 0 0"
            padding="0 0 0 xs"
            data-test={`${name}__error`}
          >
            {errorMessage}
          </CopyText>
        )}
      </StyledSelectableContentWrapper>
      <StyledFocusedIndicator />
    </StyledLabel>
  )

  const SelectableButton = (
    <StyledButtonLabel key={selectableId + isChecked} htmlFor={selectableId}>
      <StyledSelectableButton
        id={selectableId}
        {...isCheckedValue}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onInputChange(e)}
        ref={inputRef}
      />
      <StyledSelectableButtonContentWrapper
        elevation={isChecked ? 1 : 0}
        shape="rounded-small"
        surface={isChecked ? 'selected' : 'white'}
        padding={{ top: 'xs', right: 'sm', bottom: 'xs', left: 'sm' }}
      >
        <StyledSelectableContent>
          <Icon height={selectableSize === 'large' ? 14 : 12} width={selectableSize === 'large' ? 14 : 12}>
            {icon}
          </Icon>
          <StyledButtonText
            bold={isChecked}
            color={isChecked ? 'black' : 'grey4'}
            fontSize={selectableSize === 'large' ? 'sm' : 'xs'}
            lineHeight={selectableSize === 'large' ? 'sm' : 'xs'}
          >
            {children || label}
          </StyledButtonText>
        </StyledSelectableContent>
      </StyledSelectableButtonContentWrapper>
      <StyledFocusedIndicator />
    </StyledButtonLabel>
  )

  return displayType === 'button' ? SelectableButton : SelectableRadioOrCheckbox
}
