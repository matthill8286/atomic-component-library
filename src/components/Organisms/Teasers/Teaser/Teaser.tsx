import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'
import { Card } from '@/components/Atoms/Card'
import { Foldable } from '@/components/Atoms/Foldable'
import { Icon } from '@/components/Atoms/Icon'
import { Link } from '@/components/Atoms/Link'
import { Picture } from '@/components/Atoms/Picture'
import { SkeletonBlockItem, SkeletonInlineItem } from '@/components/Atoms/Skeleton'
import { CopyText, HeadingFeatured } from '@/components/Atoms/Typography'
import { useWindowDimensions } from '@/components/Helper/useWindowDimensions'
import { DANONE } from '@/styles'
import { breakpoints } from '@/styles/sc-vars-global'
import { OtherArrow } from '@matthill8286/atomic-icon-library'
import { isAlternateTheme, useTheme } from '@/utils/helper'

import { useGraphCmsImages } from '@/utils/useGraphCmsImages'
import {
  ChevronProps,
  TeaserContentTextProps,
  FoldableWrapperProps,
  TeaserHeadingProps,
  ImageProps,
  LinkListProps,
  MainLinkProps,
  TeaserProps,
} from './Teaser.interface'
import {
  isPortrait,
  StyledContentContainer,
  StyledDummyLink,
  StyledHeadingContainer,
  StyledIcon,
  StyledInfoTextChildren,
  StyledInfoTextContainer,
  StyledLinkContainer,
  StyledLinkListContainer,
  StyledLinkListItemSpace,
  StyledPictureContainer,
  StyledResponsiveContainer,
  StyledTeaser,
  StyledTextLinkContainer,
} from './Teaser.styled'

const DEFAULT_LINE_LIMIT = 2

const Image: React.FC<ImageProps> = ({ image, withImagePadding, orientation, loading, alt }) => {
  if (image) {
    return (
      <StyledPictureContainer withImagePadding={withImagePadding} orientation={orientation}>
        {loading ? (
          <SkeletonBlockItem height="100%" width="100%" />
        ) : (
          <Picture
            alt={alt}
            src={image}
            height="100%"
            width="100%"
            objectFit={withImagePadding ? 'contain' : 'cover'}
          />
        )}
      </StyledPictureContainer>
    )
  }
  return null
}

const MainHeading: React.FC<TeaserHeadingProps> = ({
  headline,
  headlineLimitLines = DEFAULT_LINE_LIMIT,
  loading,
  orientation,
}) => {
  const { name } = useTheme()
  if (loading) {
    return <SkeletonInlineItem fontSize="xl" length={15} />
  }
  return (
    <HeadingFeatured
      fixedMdSize={name === DANONE}
      fixedSize={isPortrait(orientation) ? 'xl' : undefined}
      limitLines={headlineLimitLines}
    >
      {headline}
    </HeadingFeatured>
  )
}
/**
 * Renders the mainLink only if link and link label is given.
 */
const MainLink: React.FC<MainLinkProps> = ({
  color,
  decorationColor,
  dummyMainLink = false,
  isSmall,
  loading,
  mainLink,
}) => {
  if (mainLink && mainLink.label) {
    const kindOfLink = mainLink.to ? { to: mainLink.to } : { href: mainLink.href }
    return loading ? (
      <StyledTextLinkContainer isSmall={isSmall}>
        <SkeletonBlockItem height="20px" width="100px" />
      </StyledTextLinkContainer>
    ) : (
      <StyledTextLinkContainer isSmall={isSmall}>
        <Link
          fontSize="sm"
          iconLeft={
            <Icon color={decorationColor || 'primary'}>
              <OtherArrow />
            </Icon>
          }
          scale="small"
          {...(decorationColor && { decorationColor })}
          {...(color && { color })}
          {...kindOfLink}
        >
          {mainLink.label}
        </Link>
      </StyledTextLinkContainer>
    )
  } else if (dummyMainLink) {
    return <StyledDummyLink>{'\u00A0'}</StyledDummyLink>
  }

  return null
}

/**
 * Renders a Chevron for foldable or main link.
 * Renders the mainLink only without a link label. If link label is set, nothing will be rendered.
 */
const Chevron: React.FC<ChevronProps> = ({ isAlternate, isFoldable, isOpen, isSmall = true, mainLink }) => {
  if (isFoldable) {
    return (
      <StyledLinkContainer isSmall={isSmall}>
        <StyledIcon
          height="sm"
          width="sm"
          color={isAlternate ? 'grey4' : 'primary'}
          rotate={isOpen ? 0 : 180}
          isSmall={isSmall}
          hasMarginLeft
        >
          <OtherArrow />
        </StyledIcon>
      </StyledLinkContainer>
    )
  } else if (mainLink && !mainLink.label && (mainLink.to || mainLink.href)) {
    return (
      <StyledLinkContainer isSmall={isSmall}>
        <StyledIcon height="sm" width="sm" color="primary" isSmall={isSmall} hasMarginLeft>
          <OtherArrow />
        </StyledIcon>
      </StyledLinkContainer>
    )
  } else {
    return null
  }
}

const ContentText: React.FC<TeaserContentTextProps> = ({ contentText, children, loading }) => {
  const { breakpoint: currentBreakpoint } = useWindowDimensions()
  const isMobile = currentBreakpoint < breakpoints.sm

  if (loading) {
    return (
      <React.Fragment>
        <SkeletonInlineItem margin="md 0 xxs" />
        <SkeletonBlockItem height="20px" width="200px" />
      </React.Fragment>
    )
  }

  if (contentText || children) {
    return (
      <StyledInfoTextContainer>
        {contentText && (
          <CopyText limitLines={5} fontSize="sm" lineHeight={isMobile ? 'xs' : 'sm'} margin="sm 0 0 0">
            {contentText}
          </CopyText>
        )}
        {children && <StyledInfoTextChildren>{children}</StyledInfoTextChildren>}
      </StyledInfoTextContainer>
    )
  } else {
    return null
  }
}

const LinkList: React.FC<LinkListProps> = ({ linkList }) => {
  if (linkList && linkList.length > 0) {
    const linkComponents = new Array<React.ReactElement>()

    for (let i = 0; i < linkList.length; i++) {
      const l = linkList[i]

      // add space between the links
      if (i > 0) {
        linkComponents.push(<StyledLinkListItemSpace key={'space_' + l.label} />)
      }

      // add link
      linkComponents.push(
        <Link key={l.label + '_' + l.to} scale="large" to={l.to}>
          {l.label}
        </Link>,
      )
    }

    return <StyledLinkListContainer>{linkComponents}</StyledLinkListContainer>
  } else {
    return null
  }
}

const FoldableWrapper: React.FC<FoldableWrapperProps> = ({ children, isFoldable, isOpen }) => {
  if (isFoldable) {
    return <Foldable isOpen={isOpen}>{children}</Foldable>
  } else {
    return <>{children}</>
  }
}

export const Teaser: React.FC<TeaserProps> = ({
  badgeActionType,
  badges,
  children,
  color,
  contentText,
  decorationColor,
  borderColor,
  dummyMainLink = false,
  elevation = 0,
  elevationHover = 4,
  foldable = 'never',
  growHeadline = false,
  headline,
  headlineLimitLines = DEFAULT_LINE_LIMIT,
  icon,
  image,
  altText,
  lazyloadLowQuality = false,
  linkList,
  loading = false,
  mainLink,
  onClick,
  orientation = 'auto',
  withImagePadding = false,
  contentful = false,
  ...rest
}) => {
  const { breakpoint: currentBreakpoint } = useWindowDimensions()
  const history = useHistory()
  const isMobile = currentBreakpoint < breakpoints.sm
  const isFoldable = foldable === 'always' || (foldable === 'mobile' && isMobile)
  const [isOpen, setOpen] = useState(!isFoldable)
  const hasLinkList: boolean = !!linkList && linkList.length > 0
  const isAlternate = isAlternateTheme()

  const onTeaserClick = React.useCallback(
    (event: React.MouseEvent) => {
      if (typeof onClick === 'function') {
        onClick(event)
      }

      if (isFoldable && !isOpen) {
        setOpen(true)
        return
      }

      if (isFoldable && isOpen && (!mainLink || !mainLink.label) && !hasLinkList) {
        // close only if there is no link inside
        setOpen(false)
        return
      }

      if (!isFoldable && mainLink) {
        // navigate to mainLink
        if (mainLink.to) return history.push(mainLink.to)
        if (mainLink.href) return (window.location.href = mainLink.href)
      }
    },
    [hasLinkList, history, isFoldable, isOpen, mainLink, onClick, setOpen],
  )

  const onHeadingClick = React.useCallback(() => {
    if (isFoldable && isOpen) {
      setOpen(false)
    }
  }, [isFoldable, isOpen, setOpen])

  const [finalImages, ref] = useGraphCmsImages([image], !lazyloadLowQuality)

  return (
    <StyledTeaser
      ref={ref}
      onClick={onTeaserClick}
      hasLinkList={hasLinkList}
      isOpen={isOpen}
      orientation={orientation}
      {...rest}
    >
      <Card
        elevation={elevation}
        elevationHover={hasLinkList ? 0 : elevationHover}
        shape="rounded-big"
        display="flex"
        badges={badges}
        borderColor={borderColor}
        badgeActionType={badgeActionType}
      >
        <StyledResponsiveContainer orientation={orientation}>
          <Image
            image={finalImages[0]}
            withImagePadding={withImagePadding}
            orientation={orientation}
            loading={loading}
            alt={altText}
          />
          <StyledContentContainer>
            <StyledHeadingContainer onClick={onHeadingClick} growHeadline={growHeadline}>
              <MainHeading
                headline={headline}
                headlineLimitLines={headlineLimitLines}
                loading={loading}
                orientation={orientation}
              />
              <Chevron isAlternate={isAlternate} isFoldable={isFoldable} isOpen={isOpen} mainLink={mainLink} />
            </StyledHeadingContainer>
            {icon && (
              <StyledIcon color="primary" hasMarginTop>
                {icon}
              </StyledIcon>
            )}
            <FoldableWrapper isFoldable={isFoldable} isOpen={isOpen}>
              <ContentText contentText={contentText} loading={loading}>
                {children}
              </ContentText>
              <LinkList linkList={linkList} />
              <MainLink
                color={color}
                decorationColor={decorationColor}
                dummyMainLink={dummyMainLink}
                loading={loading}
                mainLink={mainLink}
              />
            </FoldableWrapper>
          </StyledContentContainer>
        </StyledResponsiveContainer>
      </Card>
    </StyledTeaser>
  )
}
