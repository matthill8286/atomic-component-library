import { css, styled } from '@/styles/styled'
import { FadeOutOverlayProps, LabelWrapperProps, WrapperProps } from './ShowMore.interface'

export const Wrapper = styled.div<WrapperProps>(({ visibleHeight, isCollapsed }) => {
  if (!isCollapsed) {
    return ''
  }
  return css`
    display: flex;
    position: relative;
    overflow-y: hidden;
    max-height: ${visibleHeight}px;
    white-space: initial;
  `
})

export const LabelWrapper = styled.div<LabelWrapperProps>(
  ({ theme, labelAlignment, fontColor = 'grey5', fontWeight = 'semibold', fontSize = 16, padding = 0, lineHeight }) =>
    css`
      display: flex;
      cursor: pointer;
      color: ${theme.color[fontColor]};
      font-size: ${fontSize}px;
      font-family: ${theme.font.family.default};
      font-weight: ${theme.font.weight[fontWeight]};
      justify-content: ${labelAlignment};
      align-items: flex-start;
      padding: 0 ${padding}px;
      ${lineHeight ? `height: ${lineHeight}px;` : ''}
    `,
)

export const FadeOutOverlay = styled.div<FadeOutOverlayProps>(
  ({ fadeOutHeight = 0, fadeOutBackgroundColor = '#ffffff' }) =>
    css`
      pointer-events: none;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: ${fadeOutHeight}px;
      background-image: linear-gradient(rgba(255, 255, 255, 0), ${fadeOutBackgroundColor});
    `,
)

export const ContentWrapper = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.font.family.default};
  white-space: initial;
`

export const FlexItem = styled.div`
  display: flex;
`
