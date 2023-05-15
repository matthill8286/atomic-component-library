import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'
import * as React from 'react'
import { Heading } from '@/components/Atoms/Typography'
import { OtherClose } from 'atomic-icon-library'
import { useWindowDimensions } from '@/components/Helper/useWindowDimensions'
import { ModalButtonGroup } from '@/components/Molecules/ModalButtonGroup'
import { ModalHeadingProps, ModalProps } from './Modal.interface'
import {
  ModalWrapper,
  StlyedLeftContent,
  StyledIcon,
  StyledModalBackground,
  StyledModalContent,
  StyledModalDesktopWrapper,
  StyledModalHeader,
  StyledModalInnerWrapper,
} from './Modal.styled'

export const ModalHeading: React.FC<ModalHeadingProps> = ({ children, color }) => (
  <Heading margin="0" textAlign="center" weight="semibold" scale="level-3" tag="h1" color={color}>
    {children}
  </Heading>
)

export const Modal: React.FC<ModalProps> = ({
  buttonAlignment = 'space-between',
  children,
  className,
  contentBgColor,
  onClose,
  animation,
  position = 'top',
  primaryButtonProps,
  secondaryButtonProps,
  showButtonSeparator,
  size = 'lg',
  title,
  paddingSize = 'md',
  withScrollableContent = false,
  hideCloseButton = false,
  isWhite = false,
  canClose = true,
}): JSX.Element => {
  const { breakpointName } = useWindowDimensions()
  const modalDesktopWrapper = React.useRef<HTMLDivElement>(null)
  const modalInnerWrapper = React.useRef<HTMLDivElement>(null)
  const modalWrapper = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (breakpointName === 'xs') {
      disableBodyScroll(modalDesktopWrapper?.current)
    } else if (withScrollableContent) {
      disableBodyScroll(modalInnerWrapper?.current)
    } else {
      disableBodyScroll(modalWrapper?.current)
    }
    return () => clearAllBodyScrollLocks()
  }, [modalDesktopWrapper, modalInnerWrapper, modalWrapper, breakpointName, withScrollableContent])

  const handleClick = (method?: () => void) => (ev?: React.MouseEvent) => {
    if (ev) {
      ev.stopPropagation()
    }
    if (method) method()
  }

  const hasTitle = !!title

  const renderHeaderContent = () => (
    <>
      {!hideCloseButton && <StlyedLeftContent />}
      {hasTitle && <div>{typeof title === 'string' ? <ModalHeading>{title}</ModalHeading> : <>{title}</>}</div>}
      {!hideCloseButton && (
        <StyledIcon width={30} height={30} color="grey5" onClick={handleClick(onClose)}>
          <OtherClose data-test="modal-close-button" />
        </StyledIcon>
      )}
    </>
  )

  return (
    <ModalWrapper id="saiyan-styled-modal-wrapper" className={className} ref={modalWrapper}>
      <StyledModalBackground isWhite={isWhite} onClick={canClose ? handleClick(onClose) : undefined} />
      <StyledModalInnerWrapper
        paddingSize={paddingSize}
        contentBgColor={contentBgColor}
        size={size}
        position={position}
        animation={animation}
        onClick={(ev) => ev.stopPropagation()}
        withScrollableContent={withScrollableContent}
        ref={modalInnerWrapper}
      >
        <StyledModalHeader hasTitle={hasTitle}>{renderHeaderContent()}</StyledModalHeader>
        <StyledModalDesktopWrapper id="saiyan-styled-modal-desktop-wrapper" ref={modalDesktopWrapper}>
          <StyledModalContent>{children}</StyledModalContent>
          <ModalButtonGroup
            buttonAlignment={buttonAlignment}
            primaryButtonProps={primaryButtonProps}
            secondaryButtonProps={secondaryButtonProps}
            showButtonSeparator={showButtonSeparator}
          />
        </StyledModalDesktopWrapper>
      </StyledModalInnerWrapper>
    </ModalWrapper>
  )
}

Modal.displayName = 'Modal'
