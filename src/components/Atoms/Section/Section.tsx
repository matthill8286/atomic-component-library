import { media } from '@/styles/media'
import { css, styled } from '@/styles/styled'
import { HeightMap, ImageMap, ThemeColors, VerticalPaddingMap } from '@/types/theme'
import { Shape, Corners } from '@/components/Atoms/Card/Card.interface'
import { handleShape } from '@/components/Atoms/Card/Card.styled'

export interface SectionProps {
  color?: ThemeColors
  image?: ImageMap | undefined
  paddingTop?: VerticalPaddingMap
  paddingBottom?: VerticalPaddingMap
  height?: HeightMap
  center?: boolean
  shape?: Shape | Corners<Shape>
}

const handlePadding = (paddingTop, paddingBottom) => {
  const { ...top } = paddingTop
  const { ...bottom } = paddingBottom

  return (props) => css`
    ${top.mobile && `padding-top: ${props.theme.spacing.base[top.mobile]}`};
    ${bottom.mobile && `padding-bottom: ${props.theme.spacing.base[bottom.mobile]}`};

    ${media.md} {
      ${top.tablet && `padding-top: ${props.theme.spacing.base[top.tablet]}`};
      ${bottom.tablet && `padding-bottom: ${props.theme.spacing.base[bottom.tablet]}`};
    }

    ${media.lg} {
      ${top.desktop && `padding-top: ${props.theme.spacing.base[top.desktop]}`};
      ${bottom.desktop && `padding-bottom: ${props.theme.spacing.base[bottom.desktop]}`};
    }
  `
}

export const Section = styled.section<SectionProps>`
  width: 100%;
  height: ${({ height }) => height && height.mobile && `${height.mobile}px`};
  left: 0;
  right: 0;
  background: ${({ color, theme }) => color && theme.color[color]} no-repeat center center;
  background-image: ${({ image }) => image && image.mobile && `url(${image.mobile}) `};
  background-size: cover;
  ${({ paddingTop, paddingBottom }) => handlePadding(paddingTop, paddingBottom)}
  ${({ center }) => center && `text-align: center;`}
  ${({ shape }) => shape && handleShape(shape)}

  ${media.md} {
    background-image: ${({ image }) => image && image.tablet && `url(${image.tablet}) `};
    height: ${({ height }) => height && height.tablet && `${height.tablet}px`};
  }

  ${media.lg} {
    background-image: ${({ image }) => image && image.desktop && `url(${image.desktop}) `};
    height: ${({ height }) => height && height.desktop && `${height.desktop}px`};
  }
`
