import { styled } from '@/styles/styled'
import { media } from '@/styles/media'
import { InfoText, CopyText } from '@/components/Atoms/Typography'
import { TextAlign } from '@/components/Atoms/Typography/Typo/Typo.interface'
import { FlexItem } from '@/components/Helper/FlexBox'
import { TypoProps } from '../../Typography/Typo/Typo.interface'
import { Typo } from '../../Typography'

export const PriceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`

export const WrapperFullWidth = styled.div`
  width: 100%;
`

export const BrandedPriceTypoSizedPrefix = styled.span`
  color: inherit;
`

export const InfoLine = styled(InfoText)`
  display: flex;
  justify-content: flex-end;
`

export const FlexEnergyLabel = styled(FlexItem)`
  margin: 6px;
`

export const BrandedPriceFlexWrapper = styled(FlexItem)<{ size: string }>`
  display: -ms-inline-flexbox;
  display: inline-grid;
  -ms-grid-columns: auto 1fr auto;
  -ms-grid-rows: auto;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto;
  padding: ${({ theme, size }) => theme.price.branded.flexWrapper.padding[size]};
`

export const Prefix = styled(Typo)<{ size: string }>`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 3px;
  box-shadow: none;
  line-height: ${({ size, theme }) => theme.price.branded.prefix.lineHeight[size]};
  font-size: ${({ size, theme }) => theme.price.branded.prefix.fontSize[size]};
  ${({ theme, size }) =>
    size === 'responsive'
      ? `
    line-height: ${theme.price.branded.prefix.lineHeight['small']};
    font-size: ${theme.price.branded.prefix.fontSize['small']};

    ${media.lg} {
      line-height: ${theme.price.branded.prefix.lineHeight['large']};
      font-size: ${theme.price.branded.prefix.fontSize['large']};
    }
  `
      : ``}
`

export const WholePrice = styled(Typo)<TypoProps & { size: string }>`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  align-self: flex-end;
  letter-spacing: ${({ size, theme }) => theme.price.branded.letterSpacing[size]};
  text-shadow: ${({ theme }) => theme.price.shadow};
  line-height: ${({ size, theme }) => theme.price.branded.whole.lineHeight[size]};
  font-size: ${({ size, theme }) => theme.price.branded.whole.fontSize[size]};

  ${({ theme, size }) =>
    size === 'responsive'
      ? `
    line-height: ${theme.price.branded.whole.lineHeight['small']};
    letter-spacing: ${theme.price.branded.letterSpacing['small']};
    font-size: ${theme.price.branded.whole.fontSize['small']};

    ${media.lg} {
      line-height: ${theme.price.branded.whole.lineHeight['large']};
      letter-spacing: ${theme.price.branded.letterSpacing['large']};
      font-size: ${theme.price.branded.whole.fontSize['large']};
    }
  `
      : ``}
`

export const DecimalPrice = styled(Typo)<TypoProps & { size: string }>`
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  text-shadow: ${({ theme }) => theme.price.shadow};
  top: ${({ size, theme }) => theme.price.branded.decimal.top[size]};
  line-height: ${({ size, theme }) => theme.price.branded.decimal.lineHeight[size]};
  font-size: ${({ size, theme }) => theme.price.branded.decimal.fontSize[size]};

  ${({ theme, size }) =>
    size === 'responsive'
      ? `
    line-height: ${theme.price.branded.decimal.lineHeight['small']};
    font-size: ${theme.price.branded.decimal.fontSize['small']};
    top: ${theme.price.branded.decimal.top['small']};

    ${media.lg} {
      line-height: ${theme.price.branded.decimal.lineHeight['large']};
      font-size: ${theme.price.branded.decimal.fontSize['large']};
      top: ${theme.price.branded.decimal.top['large']};
    }
  `
      : ``}
`

export const PriceRow = styled.div<{ justify?: 'space-between' | 'flex-start' | 'flex-end' }>`
  display: flex;
  flex: 1 1 100%;
  align-items: ${({ justify }) => justify || 'flex-end'};
  justify-content: ${({ justify }) => justify || 'space-between'};
`

export const StyledLoyaltyText = styled(CopyText)<{ align?: TextAlign }>`
  font-size: ${({ theme }) => theme.font.size.md};
  text-align: ${({ align }) => (align ? align : `right`)};

  width: 100%;

  ${media.lg} {
    margin-bottom: ${({ theme }) => theme.spacing.base.xxs};
  }
`
