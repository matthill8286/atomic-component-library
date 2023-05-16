import React from 'react'
import { css, media, styled } from '@/styles'
import { getColor } from '@/utils/helper'
import { Typo } from '../Typo'
import { TypoProps } from '../Typo/Typo.interface'
import { HeadingFeaturedProps, StyledHeadingFeaturedProps } from './Heading.interface'

const StyledFeaturedHeading = styled(Typo)<StyledHeadingFeaturedProps>(
  ({ theme, fixedSize, fixedMdSize }) => css`
    font-weight: bold;
    letter-spacing: normal;
    max-height: fit-content;
    padding-top: ${theme.heading.featured.fontPadding};
    text-transform: ${theme.heading.featured.textTransform};
    line-height: ${theme.heading.featured.lineHeight.xs};
    font-size: ${fixedSize ? theme.font.size[fixedSize] : theme.heading.featured.fontSize};
    ${media.ie11} {
      max-height: 100%;
    }
    ${!fixedSize &&
    css`
      ${media.md} {
        font-size: ${theme.font.size.xxxxl};
        line-height: ${theme.heading.featured.lineHeight.md};
      }

      ${!fixedMdSize &&
      css`
        ${media.xl} {
          font-size: ${theme.heading.featured.fontSize};
          line-height: ${theme.heading.featured.lineHeight.xl};
        }
      `}
    `}
  `,
)

export const HeadingFeatured: React.FC<HeadingFeaturedProps> = ({
  children,
  uppercase = false,
  limitLines = 2,
  color = 'primary',
  tag = 'p',
  ...restProps
}) => {
  const props: TypoProps = {
    margin: '0',
    tag: tag,
    color: getColor({
      defaultColor: 'grey6',
      color,
    }),
    fontFamily: 'featured',
    fontSize: 'xxxxl',
    spacing: 'base',
    ...restProps,
  }

  return (
    <StyledFeaturedHeading limitLines={limitLines} toUpperCase={uppercase} {...props}>
      {children}
    </StyledFeaturedHeading>
  )
}

HeadingFeatured.displayName = 'HeadingFeatured'
