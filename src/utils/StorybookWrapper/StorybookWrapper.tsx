/* istanbul ignore file */
import { MemoryRouter as Router } from 'react-router-dom'
import { styled } from '@/styles/styled'
import { media } from '@/styles'

/**
 * small helper component for wrapping a story with proper paddings
 */
const StyledStorybookWrapper = styled.div`
  padding: 20px 40px 40px;

  ${media.maxSm} {
    padding: 20px 0;
  }
`

export const StorybookWrapper = StyledStorybookWrapper

export const StorybookRouterWrapper = ({ children }) => (
  <StyledStorybookWrapper>
    <Router>{children}</Router>
  </StyledStorybookWrapper>
)
