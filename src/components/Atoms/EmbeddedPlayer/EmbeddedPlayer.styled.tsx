import { css, styled } from '@/styles'

/**
 
Aspect Ratio	Padding-Bottom
1:1	                  100%
16:9	              56.25%
4:3	                  75%
3:2	                   66.66%
8:5	                   62.5%

**/

export const StyledRelativeEmbeddedParent = styled.div<{
  aspect: string
  maxHeight?: string | number
}>(
  ({ aspect, maxHeight }) =>
    css`
      position: relative;
      width: 100%;
      max-height: ${maxHeight ?? '500px'};

      :before {
        content: '';
        display: block;
        padding-bottom: calc(100% / calc(${aspect}));
      }

      > :first-child {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      > img {
        height: auto;
      }
    `,
)
