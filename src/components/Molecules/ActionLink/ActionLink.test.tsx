import React from 'react'
import { Link } from '../../../'
import { ActionLink } from './index'
import { ActionLinkProps } from './ActionLink.interface'
import { mountWithTheme, renderWithTheme } from '../../../testRenderer'

describe('<ActionLink /> component', () => {
  const props: ActionLinkProps = {
    children: 'Click me',
  }

  const defaultActionLink = <ActionLink {...props} />

  test('should render a <Link /> component', () => {
    const actionLink = renderWithTheme(defaultActionLink)
    const wrapper = mountWithTheme(defaultActionLink)
    expect(wrapper.find(Link)).toHaveLength(1)
    expect(actionLink).toMatchSnapshot()
  })
})
