import { css, styled } from '@/styles'
import ReactPlayer from 'react-player'

/**
 Aspect Ratio	Padding-Bottom
 1:1	                  100%
 16:9	                  56.25%
 4:3	                  75%
 3:2	                  66.66%
 8:5	                  62.5%
 **/

export const StyledVideoWrapper = styled.div<{ aspect: string }>(
  ({ aspect }) =>
    css`
      position: relative;
      height: 100%;
      width: 100%;

      :before {
        content: '';
        display: block;
        padding-bottom: calc(100% / calc(${aspect}));
      }

      > img {
        height: auto;
      }
    `,
)

export const StyledVideoPlayer = styled(ReactPlayer)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border: none;

  iframe {
    ${({ theme, rounded }) => (rounded ? `border-radius: ${theme.dimension.borderRadius2} !important;` : undefined)};
  }
`
