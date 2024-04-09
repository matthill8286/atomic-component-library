import React from 'react'
import { OtherShoppingCartAdd } from 'atomic-icon-library'
import { InitialStateWrapper, CopyTextCentralized, SVGCentralized } from './StoreSelector.styled'

import type { InitialStateProps } from './StoreSelector.types'

export function InitialState({ text, children }: InitialStateProps): JSX.Element {
  return (
    <InitialStateWrapper>
      <SVGCentralized width={108} height={108}>
        <OtherShoppingCartAdd />
      </SVGCentralized>
      <CopyTextCentralized fontSize="md" weight="semibold" tag="p" textAlign="center">
        {text}
      </CopyTextCentralized>
      {children}
    </InitialStateWrapper>
  )
}
