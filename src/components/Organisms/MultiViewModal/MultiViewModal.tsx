import React, { FC, Children, PropsWithChildren, useMemo } from 'react'
import { Portal, Modal, Button, styled, Icon } from '../../../index'
import { useMultiViewModalState, useMultiViewModalAction } from './MultiViewModal.store'
import { OtherArrow } from '@matthill8286/atomic-icon-library'

export type MultiViewModalProps = {
  targetId: string
  withScrollableContent?: boolean
  hideCloseButton?: boolean
}

const StyledBackButton = styled(Button)`
  padding-left: 0;
`

const StyledBackArrow = styled(Icon)`
  padding: 0 !important;
  position: relative;
  left: -7px;
`

export const MultiViewModal: FC<PropsWithChildren<MultiViewModalProps>> = ({
  targetId,
  children,
  withScrollableContent,
  hideCloseButton = false,
}) => {
  const { isActive, activeViewId, hasBackButton } = useMultiViewModalState()
  const { goHome, close } = useMultiViewModalAction()
  const activeChild = useMemo<any>(
    () => Children.toArray(children).find((child: any) => child.props.id === activeViewId),
    [children, activeViewId],
  )
  if (!isActive) return null
  return (
    <Portal targetRootId={targetId}>
      <Modal
        onClose={close}
        primaryButtonProps={activeChild?.props.primaryButtonProps}
        secondaryButtonProps={activeChild?.props.secondaryButtonProps}
        withScrollableContent={withScrollableContent}
        hideCloseButton={hideCloseButton}
      >
        <>
          {hasBackButton && (
            <StyledBackButton actionType="ghost" onClick={goHome}>
              <StyledBackArrow rotate={180} width="sm" height="sm">
                <OtherArrow />
              </StyledBackArrow>
              {'multiViewModal.backButtonText'}
            </StyledBackButton>
          )}
          {activeChild}
        </>
      </Modal>
    </Portal>
  )
}

MultiViewModal.displayName = 'MultiViewModal'
