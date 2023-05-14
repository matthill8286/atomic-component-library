import * as React from 'react'
import { ModalButtonGroupProps } from './ModalButtonGroup.interface'
import {
  StyledModalFooter,
  StyledModalFooterButton,
  StyledModalFooterPrimary,
  StyledModalFooterSecondary,
} from './ModalButtonGroup.styled'

export const ModalButtonGroup: React.FC<ModalButtonGroupProps> = ({
  buttonAlignment = 'space-between',
  primaryButtonProps,
  secondaryButtonProps,
  buttonWidth,
  showButtonSeparator = true,
}): JSX.Element => {
  if (!primaryButtonProps && !secondaryButtonProps) {
    return <React.Fragment />
  }

  const handleClick = (method?: () => void) => (ev?: React.MouseEvent) => {
    if (ev) ev.stopPropagation()
    if (method) method()
  }

  return (
    <StyledModalFooter
      showButtonSeparator={showButtonSeparator}
      buttonAlignment={buttonAlignment}
      data-test="saiyan-modal-footer-buttons"
    >
      {secondaryButtonProps && (
        <StyledModalFooterSecondary buttonAlignment={buttonAlignment}>
          <StyledModalFooterButton
            actionType="secondary"
            data-test={'saiyan-secondary-modal-footer-buttons'}
            onClick={secondaryButtonProps.onClick ? handleClick(secondaryButtonProps.onClick) : undefined}
            {...secondaryButtonProps}
          >
            {secondaryButtonProps.buttonLabel}
          </StyledModalFooterButton>
        </StyledModalFooterSecondary>
      )}
      {primaryButtonProps && (
        <StyledModalFooterPrimary buttonAlignment={buttonAlignment} buttonWidth={buttonWidth}>
          <StyledModalFooterButton
            actionType="primary"
            fullWidth={!!buttonWidth}
            data-test="saiyan-primary-modal-footer-buttons"
            onClick={primaryButtonProps.onClick ? handleClick(primaryButtonProps.onClick) : undefined}
            {...primaryButtonProps}
          >
            {primaryButtonProps.buttonLabel}
          </StyledModalFooterButton>
        </StyledModalFooterPrimary>
      )}
    </StyledModalFooter>
  )
}

ModalButtonGroup.displayName = 'ModalButtonGroup'
