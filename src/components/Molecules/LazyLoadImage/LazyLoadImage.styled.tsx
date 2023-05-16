import { styled } from '@/styles/styled'

interface StyledLazyImageWrapperProps {
  width?: string
  height?: string
}

export const StyledLazyImageWrapper = styled.div<StyledLazyImageWrapperProps>`
  width: 100%;
  height: ${({ height }) => height};
  max-width: 100%;
  max-height: 100%;
`
