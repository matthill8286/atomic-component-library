import React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { CopyText } from '@/components/Atoms/Typography'
import { styled } from '@/styles'
import { OtherCompleteChecked } from '@matthill8286/atomic-icon-library'

export interface SelectionViewProps {
  modalDescription: string
  searchField: React.ReactNode
}

const StyledPickupIcon = styled(Icon)`
  & svg {
    margin-left: auto;
    margin-right: auto;
  }
`

const StyledContainer = styled.div`
  max-width: 390px;
  margin-left: auto;
  margin-right: auto;
`

const StyledCopyText = styled(CopyText)`
  margin-left: auto;
  margin-right: auto;
`

export const SelectionView: React.FC<SelectionViewProps> = ({ modalDescription, searchField }) => {
  return (
    <StyledContainer>
      <StyledPickupIcon width={108} height={108}>
        <OtherCompleteChecked />
      </StyledPickupIcon>
      <StyledCopyText fontSize="md" weight="semibold" tag="p" textAlign="center">
        {modalDescription}
      </StyledCopyText>
      {searchField}
    </StyledContainer>
  )
}
