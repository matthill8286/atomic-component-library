import React from 'react'
import { CopyText, Heading } from '@/components/Atoms/Typography'
import { HeadingProps } from '@/components/Atoms/Typography/Heading/Heading.interface'
import { FlexBox, FlexItem, Spacer } from '@/index'
import { styled } from '@/styles/styled'
import { ThemeFontSizes, ThemeFontWeights } from '@/types/theme'
import { InfoText as InfoLine } from '../../Typography/InfoText'

interface ProductTitleProps {
  productName: string
  manufacturer: string
}

interface ProductWithDescriptionProps {
  productWithTitle: ProductTitleProps
  description?: string
}

interface ProductDataProps {
  product: ProductWithDescriptionProps
  subTexts: string[]
}

const headingProps: HeadingProps = {
  scale: 'level-5',
  tag: 'p',
  color: 'black',
  lineHeight: 'sm',
  fontFamily: 'default',
}

export const StyledProductDescription = styled(CopyText)`
  margin-left: 12px;
`

export const StyledProductDataWrapper = styled(FlexItem)`
  margin-left: 12px;
`

export const ProductTitle: React.FC<ProductTitleProps> = ({ productName, manufacturer }) => {
  return (
    <>
      <Heading {...headingProps} margin="0" limitLines={2} data-test="product-title">
        <CopyText fontSize="sm" tag="span" bold data-test="product-manufacturer">
          {manufacturer}
        </CopyText>
        {productName.replace(manufacturer || '', '')}
      </Heading>
    </>
  )
}

export const ProductWithDescription: React.FC<ProductWithDescriptionProps> = ({ productWithTitle, description }) => {
  return (
    <>
      <ProductTitle {...productWithTitle} />
      {description && (
        <FlexBox flexDirection="row">
          <StyledProductDescription fontSize="sm" tag="span" data-test="product-description">
            {description}
          </StyledProductDescription>
        </FlexBox>
      )}
    </>
  )
}

export const ProductData: React.FC<ProductDataProps> = ({ product, subTexts }) => {
  return (
    <>
      <ProductWithDescription {...product} />
      <Spacer size="xs" />
      {product.description ? (
        <FlexBox flexDirection="row">
          <StyledProductDataWrapper>
            {subTexts.map((subText, index) => (
              <CopyText key={index} fontSize="xxs" limitLines={0} margin="" tag="p">
                {subText}
              </CopyText>
            ))}
          </StyledProductDataWrapper>
        </FlexBox>
      ) : (
        subTexts.map((subText, index) => (
          <CopyText key={index} fontSize="xxs" limitLines={0} margin="" tag="p">
            {subText}
          </CopyText>
        ))
      )}
    </>
  )
}

interface PriceTextProps {
  text: string
  textWeight?: ThemeFontWeights
  fontSize?: ThemeFontSizes
  additionalInfo?: string
  additionalInfoTextAlign?: 'left' | 'right'
}

export const PriceText: React.FC<PriceTextProps> = ({
  text,
  textWeight = 'semibold',
  fontSize = 'xs',
  additionalInfo,
  additionalInfoTextAlign = 'right',
}) => {
  return (
    <>
      <Heading tag="h1" scale="level-2" weight={textWeight} fontSize={fontSize}>
        {text}
      </Heading>
      {additionalInfo && (
        <InfoLine fontSize={'xs'} textAlign={additionalInfoTextAlign}>
          {additionalInfo}
        </InfoLine>
      )}
    </>
  )
}
