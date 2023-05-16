import React from 'react'
import ReactDOM from 'react-dom'
import { PortalProps } from './Portal.interface'

/**
 * Returns null if target element is not found in the dom.
 */
export const Portal: React.FC<PortalProps> = ({ targetRootId, dataTest, children }): React.ReactPortal | null => {
  const targetRootElement = document.getElementById(targetRootId)
  if (dataTest) {
    targetRootElement?.setAttribute('data-test', dataTest)
  }
  return targetRootElement ? ReactDOM.createPortal(children, targetRootElement) : null
}
