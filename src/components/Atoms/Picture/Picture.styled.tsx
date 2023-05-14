import { media } from '@/styles/media'
import { css, styled } from '@/styles/styled'
import { StyledPictureProps } from './Picture.interface'

const disabledPicture = (isDisabled: boolean) => {
  if (isDisabled) {
    return css`
      -ms-filter: grayscale(100%);
      filter: grayscale(100%);
      opacity: 0.4;
      pointer-events: none;
    `
  }

  return ''
}

export const StyledPicture = styled.div<StyledPictureProps>`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 100%;

  ${({ disabled }) => disabledPicture(!!disabled)};

  ${media.ie11} {
    max-width: ${({ width }) => (width ? `${width}` : '100%')};
  }

  & img {
    ${({ rounded, theme }) => (rounded ? `border-radius: ${theme.dimension.borderRadius2};` : '')};
    ${({ imageMaxHeight }) => (imageMaxHeight ? `max-height: ${imageMaxHeight};` : '')};
    ${({ imageMaxWidth }) => (imageMaxWidth ? `max-width: ${imageMaxWidth};` : '')};
    ${({ height }) => (height ? `height: ${height};` : '')};
    ${({ objectFit }) => (objectFit ? `object-fit: ${objectFit};` : '')};

    ${media.ie11} {
      max-width: 100%;
      width: auto;
      height: auto;
    }
  }
`
