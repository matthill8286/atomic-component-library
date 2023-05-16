import * as React from 'react'
import { Link } from '@/components/Atoms/Link'
import { SkeletonInlineItem } from '@/components/Atoms/Skeleton'
import { CopyText, Heading, InfoText } from '@/components/Atoms/Typography'
import { FontSizeMap } from '@/components/Atoms/Typography/Typo/Typo.interface'
import { FlexBox, FlexItem } from '@/components/Helper/FlexBox'
import { styled } from '@/styles/styled'
import { ThemeFontSizes, ThemeFontWeights } from '@/types'
import { useWindowDimensions } from '@/components/Helper'
import { breakpoints } from '@/styles'

interface ProductTitleProps {
  headerFontSize?: ThemeFontSizes | FontSizeMap
  headerFontWeight?: ThemeFontWeights
  href?: string
  target?: string
  loading?: boolean
  provider?: string
  showProvider?: boolean
  description?: string
  title: string
  onClick?: () => void
}

const StyledProductHeaderWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.base.sm};
  margin-right: ${({ theme }) => theme.spacing.base.xs};
`

const StyledHeading = styled(Heading)`
  width: 90%;
`

const StyledLink = styled(Link)`
  display: inline;
`

export const ProductHeader: React.FC<ProductTitleProps> = ({
  headerFontSize,
  headerFontWeight = 'semibold',
  href,
  target,
  loading = false,
  provider,
  showProvider = true,
  description,
  title,
  onClick,
}) => {
  if (loading) {
    return (
      <StyledProductHeaderWrapper>
        <SkeletonInlineItem text="Manufacturer" fontSize="xs" />
        &nbsp;
        <SkeletonInlineItem text="Product Line Item Headline" fontSize="xs" />
        {showProvider && <SkeletonInlineItem text="Subline" fontSize="xxs" newLine />}
      </StyledProductHeaderWrapper>
    )
  }

  const cleanTitle = provider ? title.replace(provider, '') : title
  const { breakpoint: currentBreakpoint } = useWindowDimensions()
  const isMobile = currentBreakpoint < breakpoints.sm

  const Heading: React.FC = () => (
    <StyledHeading
      color="black"
      fontSize={headerFontSize || 'lg'}
      limitLines={3}
      lineHeight={isMobile ? 'sm' : 'md'}
      scale="level-1"
      spacing="half"
      tag="p"
    >
      <CopyText fontSize={headerFontSize || 'lg'} tag="div" color="grey6" weight={headerFontWeight}>
        {cleanTitle}
      </CopyText>
    </StyledHeading>
  )

  return (
    <StyledProductHeaderWrapper>
      {showProvider && (
        <FlexBox flexWrap="nowrap" justifyContent="space-between">
          {description && (
            <FlexItem>
              <InfoText
                data-test="learning-product-provider"
                fontSize="xs"
                toUpperCase
                margin="0 0 xs"
                tag="p"
                color="grey5"
              >
                {description}
              </InfoText>
            </FlexItem>
          )}
        </FlexBox>
      )}
      {href ? (
        <StyledLink inline={false} underline={false} {...(target ? { href, target, onClick } : { to: href, onClick })}>
          <Heading />
        </StyledLink>
      ) : (
        <Heading />
      )}
    </StyledProductHeaderWrapper>
  )
}
