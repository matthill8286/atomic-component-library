import { renderWithTheme } from '@/testRenderer'
import { LoadingIndicator } from './LoadingIndicator'

describe('LoadingIndicator', () => {
  it('renders saiyan theme', () => {
    const tree = renderWithTheme(<LoadingIndicator isVisible={false} />)
    expect(tree).toMatchSnapshot()
  })
})
