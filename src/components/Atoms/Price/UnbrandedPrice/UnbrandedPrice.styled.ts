import { styled, css } from '@/styles/styled'
import { InfoText, CopyText } from '@/components/Atoms/Typography'
import { FlexBox } from '@/components/Helper'

export const StyledPriceEnergyEfficiency = styled('div')<{ size: string }>`
  position: relative;
  align-self: flex-start;
  margin-top: ${({ size, theme }) => theme.price.regular.energyEfficiency.marginTop[size]};
  margin-bottom: ${({ theme }) => theme.spacing.base.xxs};
`

export const StyledUnbrandedPriceDisplayWrapper = styled.div<{
  strikePriceRight?: boolean
  strikeThrough?: boolean
  justify?: string
}>`
  ${({ strikePriceRight, strikeThrough, theme, justify }) => `
    display: inline-block;
    order: ${strikeThrough ? (strikePriceRight ? '3' : '1') : '1'};
    top: ${justify};
    margin-right: ${justify !== 'flex-end' ? theme.spacing.base.xs : 0};
    &:last-child {
      margin-left: ${justify === 'flex-end' ? theme.spacing.base.xs : 0};
      margin-right: 0;
    }
  `}
`

export const StyledLoyaltyText = styled(CopyText)`
  color: ${({ theme }) => theme.color.grey5};
  font-size: ${({ theme }) => theme.font.size.xs};
  margin-bottom: -${({ theme }) => theme.spacing.base.xxs};
`

export const InfoBox = styled(FlexBox)`
  flex-direction: column;
  margin: 0;
`

export const InfoLine = styled(InfoText)`
  display: flex;
`

interface PriceRowProps {
  justify?: 'space-between' | 'flex-start' | 'flex-end'
}

export const StyledPriceRow = styled.div<PriceRowProps>`
  display: flex;
  flex: 1 1 100%;
  align-items: ${({ justify }) => justify || 'flex-end'};
  justify-content: ${({ justify }) => justify || 'space-between'};
`

interface WrapperProps {
  display?: string
  justify?: 'space-between' | 'flex-start' | 'flex-end'
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ display, justify }) =>
    css`
      display: ${display};
      flex-wrap: wrap;
      justify-content: ${justify || 'space-between'};
      align-items: flex-start;
    `}
`

export const PriceContainer = styled.div`
  position: relative;
`
