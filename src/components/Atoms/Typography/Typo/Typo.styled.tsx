import { media } from '@/styles/media'
import { getBoxDimension } from '@/styles/sc-shared-functions'
import { css, styled, ThemedStyledProps } from '@/styles/styled'
import { Saiyan } from '@/styles/themes'
import { Theme } from '@/types/theme'
import { FontSizeMap, StyledInfoTextProps } from './Typo.interface'

const getLineHeight = (theme, fontSize, lineHeight) => {
  const lh = lineHeight ? lineHeight : fontSize
  return theme.font.lineHeight[lh] || theme.font.lineHeight.sm
}

const getfontSize = (theme, fontSize) => (fontSize && theme.font.size[fontSize]) || fontSize || theme.font.size.sm

const superscript = (theme, fontSize) => {
  if (fontSize && typeof fontSize === 'string') {
    return css`
      font-size: ${(fontSize && theme.font.superscript.size[fontSize]) || theme.font.superscript.size.sm};
      top: ${(fontSize && theme.font.superscript.top[fontSize]) || theme.font.superscript.top.sm};
    `
  } else {
    if (fontSize && (fontSize as FontSizeMap)?.mobile) {
      return css`
        font-size: ${(fontSize && theme.font.superscript.size[fontSize.mobile]) || theme.font.superscript.size.sm};
        top: ${(fontSize && theme.font.superscript.top[fontSize.mobile]) || theme.font.superscript.top.sm};
      `
    }

    if (fontSize && (fontSize as FontSizeMap)?.tablet) {
      return css`
        ${media.md} {
          font-size: ${(fontSize && theme.font.superscript.size[fontSize.tablet]) || theme.font.superscript.size.sm};
          top: ${(fontSize && theme.font.superscript.top[fontSize.tablet]) || theme.font.superscript.top.sm};
        }
      `
    }

    if (fontSize && (fontSize as FontSizeMap)?.desktop) {
      return css`
        ${media.lg} {
          font-size: ${(fontSize && theme.font.superscript.size[fontSize.desktop]) || theme.font.superscript.size.sm};
          top: ${(fontSize && theme.font.superscript.top[fontSize.desktop]) || theme.font.superscript.top.sm};
        }
      `
    }
  }
}

const ul = ({ theme }: ThemedStyledProps<StyledInfoTextProps, Theme>) => css`
  list-style-type: disc;
  padding-left: ${theme.spacing.base.lg};
  & li {
    list-style-type: disc;
  }
`

const ol = ({ theme }: ThemedStyledProps<StyledInfoTextProps, Theme>) => css`
  list-style-type: decimal;
  padding-left: ${theme.spacing.base.lg};

  & li {
    list-style-type: decimal;
  }
`

export const StyledInfoTypo = styled.div<StyledInfoTextProps>(
  ({
    theme,
    tag,
    display,
    background,
    borderRadius,
    color,
    fontSize,
    lineHeight,
    weight,
    fontFamily,
    limitLines,
    underline,
    spacing,
    margin,
    padding,
    textAlign,
    toUpperCase,
    showCursor,
  }) => css`
    ${margin ? `margin: ${getBoxDimension(theme, margin) || 0};` : ''}
    ${padding ? `padding: ${getBoxDimension(theme, padding) || 0};` : ''}
  ${color ? `color: ${(color && theme.color[color]) || theme.color.grey4};` : ''}
  font-size: ${fontSize &&
    (typeof fontSize === 'string'
      ? getfontSize(theme, fontSize)
      : getfontSize(theme, (fontSize as FontSizeMap).mobile))};
    line-height: ${fontSize &&
    (typeof fontSize === 'string'
      ? getLineHeight(theme, fontSize, lineHeight)
      : getLineHeight(theme, (fontSize as FontSizeMap).mobile, lineHeight))};
    font-family: ${(fontFamily && theme.font.family[fontFamily]) || theme.font.family.default};
    font-weight: ${(weight && theme.font.weight[weight]) || theme.font.weight.regular};
    letter-spacing: ${spacing ? theme.font.spacing[spacing] : 'normal'};
    ${toUpperCase && `text-transform: uppercase;`}

    ${textAlign ? `text-align: ${textAlign}` : ''};
    ${showCursor ? `cursor: pointer` : ''};
    ${display ? `display: ${display};` : ''}
    ${underline ? `text-decoration: underline;` : ''}
  ${background ? `background: ${theme.color[background] || background};` : ''}
  ${borderRadius ? `border-radius: ${theme.dimension[borderRadius] || '0'};` : ''}

  ${tag === 'sup' && superscript(theme, fontSize)}
  ${tag === 'ul' && ul}
  ${tag === 'ol' && ol}

  ${limitLines && limitLines > 0
      ? // Maximum support for single line ellipsis
        limitLines === 1
        ? css`
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            ${fontFamily === 'featured' && theme.name === Saiyan && `padding-left: 2px;`}
          `
        : css`
            white-space: normal;
            overflow: hidden;
            ${fontFamily === 'featured' && theme.name === Saiyan && `padding-left: 2px;`}
            /* stylelint-disable function-calc-no-invalid, this is a false positive  */
            max-height: calc(${getLineHeight(theme, fontSize, lineHeight)} * ${limitLines});
            -webkit-line-clamp: ${limitLines};
            /* stylelint-disable value-no-vendor-prefix  */
            display: -webkit-box;
            /* stylelint-disable property-no-vendor-prefix  */
            -webkit-box-orient: vertical;
          `
      : ''}
  ${(fontSize as FontSizeMap)?.tablet &&
    css`
      ${media.md} {
        font-size: ${getfontSize(theme, (fontSize as FontSizeMap).tablet)};
        line-height: ${getLineHeight(theme, (fontSize as FontSizeMap).tablet, lineHeight)};
      }
    `}
    
  ${(fontSize as FontSizeMap)?.desktop &&
    css`
      ${media.lg} {
        font-size: ${getfontSize(theme, (fontSize as FontSizeMap).desktop)};
        line-height: ${getLineHeight(theme, (fontSize as FontSizeMap).desktop, lineHeight)};
      }
    `}
  `,
)
