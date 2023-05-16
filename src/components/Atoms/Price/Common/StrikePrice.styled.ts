import { styled } from '@/styles/styled'
import { media } from '@/styles/media'
import { Typo } from '@/components/Atoms/Typography'

interface StyledStrikePriceWrapperProps {
  size: 'small' | 'large' | 'responsive'
  justify?: 'space-between' | 'flex-start' | 'flex-end'
}

export const StyledStrikePriceWrapper = styled.div<StyledStrikePriceWrapperProps>`
  width: 100%;
  display: inline-flex;
  align-items: center;
  position: relative;
  justify-content: ${({ justify }) => (justify ? justify : `flex-end`)};
  padding-left: 0;
  padding-bottom: ${({ size, theme }) => theme.price.strikeInfo.priceWrapper.paddingBottom[size]};
  bottom: ${({ size, theme }) => theme.price.strikeInfo.priceWrapper.bottom[size]};
  right: ${({ size, theme }) => theme.price.strikeInfo.priceWrapper.right[size]};

  ${({ theme, size }) =>
    size === 'responsive'
      ? `
      padding-bottom: ${theme.price.strikeInfo.priceWrapper.paddingBottom['small']};
      bottom: ${theme.price.strikeInfo.priceWrapper.bottom['small']};
      right: ${theme.price.strikeInfo.priceWrapper.right['small']};

      ${media.lg} {
        padding-bottom: ${theme.price.strikeInfo.priceWrapper.paddingBottom['large']};
        bottom: ${theme.price.strikeInfo.priceWrapper.bottom['large']};
        right: ${theme.price.strikeInfo.priceWrapper.right['large']};
      }
    `
      : ``}
`

export const StyledSuperPrice = styled(Typo)<{ size: string }>`
  left: ${({ size, theme }) => theme.price.strikeInfo.superPrice.left[size]};
  color: ${({ theme }) => theme.price.strikeInfo.color};
  font-size: ${({ size, theme }) => theme.price.strikeInfo.superPrice.fontSize[size]};

  ${({ theme, size }) =>
    size === 'responsive'
      ? `
      left: ${theme.price.strikeInfo.superPrice.left['small']};
      font-size: ${theme.price.strikeInfo.superPrice.fontSize['small']};

      ${media.lg} {
        left: ${theme.price.strikeInfo.superPrice.left['large']};
        font-size: ${theme.price.strikeInfo.superPrice.fontSize['large']};
      }
    `
      : ``}
`

export const StyledBrandedStrikePrice = styled.div<{ size: string }>`
  ${({ theme, size }) => `
    padding: 0 ${theme.spacing.base.xs};
    background-color: ${theme.color.white};
    border-radius: ${theme.dimension.borderRadius1};
    height: ${theme.price.strikeInfo.height[size]};
  `}

  ${({ theme, size }) =>
    size === 'responsive'
      ? `
      height: ${theme.price.strikeInfo.height['small']};

      ${media.lg} {
        height: ${theme.price.strikeInfo.height['large']};
      }
    `
      : ``}
`
