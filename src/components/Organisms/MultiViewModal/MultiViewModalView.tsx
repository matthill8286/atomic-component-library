import React, { FC } from 'react'
import { ModalButtonProps } from '../../../index'

export type MultiViewModalViewProps = {
  id: string
  children: React.ReactNode
  primaryButtonProps?: ModalButtonProps
  secondaryButtonProps?: ModalButtonProps
}

export const MultiViewModalView: FC<MultiViewModalViewProps> = ({ id, children }) => {
  return <div id={id}>{children}</div>
}
