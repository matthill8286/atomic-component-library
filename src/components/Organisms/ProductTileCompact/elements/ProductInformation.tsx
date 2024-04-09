import React from 'react'
import { CopyText, Typo } from '@/components/Atoms/Typography'
import { FlexBox } from '@/components/Helper/FlexBox'
import { media, styled } from '@/styles'

export interface StyledProductInformationProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export interface ProductInformationProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  label?: string
  provider?: string
  type?: string | undefined | null
  competency?: string
  id?: string
  url?: string
}

export const StyledProductInformation = styled.div<StyledProductInformationProps>`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin: auto;
    padding: ${theme.spacing.base.xxs} 0;
    padding-left: 0;
    hyphens: auto;
    cursor: pointer;
    text-align: left;
    align-self: center;
    
    ${media.maxSm} {
        padding: 0 ${theme.spacing.base.sm};
    }
  `}
`

export const StyledInformationTypo = styled(Typo)`
  border-right: 1px solid ${({ theme }) => theme.color.grey5};
`

export const ProductInformation: React.FC<ProductInformationProps> = props => {
  const { label, provider, type, competency, onClick } = props
  return (
    <StyledProductInformation onClick={onClick}>
      <CopyText bold tag="div" color={'grey6'} fontSize="sm" margin="0">
        {label}
      </CopyText>
      <FlexBox display="inline-flex">
        <StyledInformationTypo
          display="inline-flex"
          tag="div"
          color={'grey4'}
          fontSize="xs"
          padding="0 sm 0 0">
          {provider}
        </StyledInformationTypo>
        <StyledInformationTypo
          display="inline-flex"
          tag="div"
          color={'grey4'}
          fontSize="xs"
          padding="0 sm">
          {type}
        </StyledInformationTypo>
        <Typo display="inline-flex" tag="div" color={'grey4'} fontSize="xs" padding="0 sm">
          {competency}
        </Typo>
      </FlexBox>
    </StyledProductInformation>
  )
}

ProductInformation.displayName = 'ProductInformation'
