import { BrowserRouter as Router } from 'react-router-dom'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { Button } from './Button'

describe('Button', () => {
  const onClick = jest.fn()
  const buttonContent = 'Button '

  it('Should render a button', () => {
    const tree = renderWithTheme(<Button onClick={onClick}>{buttonContent}</Button>)
    expect(tree).toMatchSnapshot()
  })

  it('Should be clickable', () => {
    const tree = mountWithTheme(<Button onClick={onClick}>{buttonContent}</Button>)
    tree.find('button').simulate('click')
    expect(onClick.mock.calls.length).toEqual(1)
  })

  it('Should render an anchor', () => {
    const tree = renderWithTheme(<Button href="#">{buttonContent}</Button>)
    expect(tree).toMatchSnapshot()
  })

  it('Should render a router Link', () => {
    const tree = renderWithTheme(
      <Router>
        <Button to="/">{buttonContent}</Button>
      </Router>,
    )
    expect(tree).toMatchSnapshot()
  })

  it('Should render a loading state', () => {
    const tree = renderWithTheme(
      <Button onClick={onClick} isLoading>
        {buttonContent}
      </Button>,
    )
    expect(tree).toMatchSnapshot()
  })

  it('Should render a completed checkmark', () => {
    const tree = renderWithTheme(
      <Button onClick={onClick} showCheckmark>
        {buttonContent}
      </Button>,
    )
    expect(tree).toMatchSnapshot()
  })
})
