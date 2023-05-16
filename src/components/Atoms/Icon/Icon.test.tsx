import { OtherArticle } from 'atomic-icon-library'
import { renderWithTheme } from '@/testRenderer'
import { Icon } from './Icon'

describe('Icon', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Icon>
        <OtherArticle />
      </Icon>,
    )
    expect(tree).toMatchSnapshot()
  })
})
