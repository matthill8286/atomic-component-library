import React from 'react'
import { SkeletonBlockItem, SkeletonInlineItem } from '@/components/Atoms/Skeleton'
import { ProductTileCompactChildProps } from './ProductTileCompact.interface'
import {
  StyledContentColumn,
  StyledIconsWrapper,
  StyledProductTileCompactElementWrapper,
  StyledRightIconsInfoText,
  StyledRightIconsWrapper,
  StyledInformationTypo,
} from './ProductTileCompact.styled'
import { CopyText, Typo } from '@/components/Atoms/Typography'
import { FlexBox, useWindowDimensions } from '@/components/Helper'
import { StyledProductInformation } from '@/components/Organisms/ProductTileCompact/elements'
import { breakpoints } from '@/styles'

export const ProductTileCompactElement: React.FC<ProductTileCompactChildProps> = ({
  children,
  headerFontSize,
  loading = false,
  provider,
  iconsComponent,
  showInteractions = true,
  type,
  competency,
  label,
  description,
  title,
  mobile,
  ...props
}) => {
  const { breakpoint: currentBreakpoint } = useWindowDimensions()
  const isMobile = currentBreakpoint < breakpoints.md

  const renderRightIcons = () => {
    if (!iconsComponent) {
      return null
    }

    return (
      <>
        {loading ? (
          <>
            <SkeletonInlineItem text="interaction icons" />
            <SkeletonBlockItem width="300px" height="10px" />
          </>
        ) : (
          <StyledRightIconsInfoText fontSize="xs" weight="bold">
            <StyledIconsWrapper>{iconsComponent}</StyledIconsWrapper>
          </StyledRightIconsInfoText>
        )}
      </>
    )
  }

  const productInformation = !loading ? (
    <>
      <CopyText
        limitLines={2}
        tag="div"
        display="flex"
        color={'grey6'}
        fontSize="md"
        margin="sm 0 0">
        {title}
      </CopyText>
      {!isMobile ? (
        <FlexBox display="inline-flex">
          {provider ? (
            <StyledInformationTypo
              display="inline-flex"
              tag="div"
              color={'grey4'}
              fontSize="xs"
              padding="0 sm 0 0">
              {provider}
            </StyledInformationTypo>
          ) : null}
          {type ? (
            <StyledInformationTypo
              display="inline-flex"
              tag="div"
              color={'grey4'}
              fontSize="xs"
              padding="0 sm">
              {type}
            </StyledInformationTypo>
          ) : null}
          {competency ? (
            <Typo display="inline-flex" tag="div" color={'grey4'} fontSize="xs" padding="0 sm">
              {competency}
            </Typo>
          ) : null}
        </FlexBox>
      ) : null}
    </>
  ) : (
    <>
      <SkeletonInlineItem text="product title" margin="sm 0" />
      <SkeletonInlineItem text="product meta info" margin="0" />
    </>
  )

  return (
    <StyledProductTileCompactElementWrapper {...props}>
      <StyledContentColumn>
        <StyledProductInformation>{productInformation}</StyledProductInformation>
      </StyledContentColumn>
      <StyledRightIconsWrapper>
        {showInteractions && !loading && (
          <StyledIconsWrapper>{renderRightIcons()}</StyledIconsWrapper>
        )}
        {children}
      </StyledRightIconsWrapper>
    </StyledProductTileCompactElementWrapper>
  )
}
