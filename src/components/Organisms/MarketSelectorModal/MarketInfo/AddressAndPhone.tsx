import React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { CopyText } from '@/components/Atoms/Typography'
import { styled } from '@/styles/styled'
import { OtherPencil, OtherDone } from '@matthill8286/atomic-icon-library'
import { isAlternateTheme } from '@/utils/helper'
import { Address } from '../MarketSelectorModal.interface'
import { AddressAndPhoneProps } from './MarketInfo.interface'
import { MemoIconSePin } from './SaturnPin'

export const buildAddress = (address: Address, lineBreak = false): React.ReactNode => {
  return (
    <>
      {`${address.street}${address.street_number ? ' ' + address.street_number : ''}`}
      {lineBreak ? <br /> : ', '}
      {`${address.zip_code} ${address.city}`}
    </>
  )
}

const StyledAdressRow = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.base.xxs} 0;
`

const StyledIcon = styled(Icon)`
  position: relative;
  top: 2px;
`

export const AddressAndPhone: React.FC<AddressAndPhoneProps> = ({
  market,
  showPhoneNumber = true,
}: AddressAndPhoneProps): React.ReactElement | null => {
  if (!(market && market.address)) {
    return null
  }
  const color = !isAlternateTheme() ? 'grey3' : undefined
  return (
    <div>
      <StyledAdressRow>
        <StyledIcon width={16} height={16} color={color}>
          {isAlternateTheme() ? <MemoIconSePin /> : <OtherPencil />}
        </StyledIcon>
        <CopyText margin="0 0 0 xs">{buildAddress(market.address, !showPhoneNumber)}</CopyText>
      </StyledAdressRow>
      {showPhoneNumber && (
        <StyledAdressRow>
          <StyledIcon width={16} height={16} color="grey3">
            <OtherDone />
          </StyledIcon>
          {market.address.phone && <CopyText margin="0 0 0 xs">{market.address.phone}</CopyText>}
        </StyledAdressRow>
      )}
    </div>
  )
}
