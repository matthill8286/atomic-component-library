import React, { FC } from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { styled } from '@/styles/styled'
import { OtherArticle } from 'atomic-icon-library'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { ThemeColors } from '@/types/theme'
import { Step } from './Step'
import { StepConnectorRoot } from './StepConnector'
import { StepConnectorLineProps, StepConnectorProps, StepPrivateProps, StepPublicProps } from './Steps.interface'

const props: StepPublicProps & StepPrivateProps = {
  title: 'Sign In',
  description: 'Test description',
  color: 'primary',
  active: false,
  completed: false,
  elementPosition: 'first',
  stepIndex: 0,
  variant: 'prominent',
}

describe('Step', () => {
  it('should render', () => {
    const tree = renderWithTheme(<Step {...props} />)
    expect(tree).toMatchSnapshot()
  })

  it('should render with custom icon', () => {
    interface CustomIconProps {
      active?: boolean
      completed?: boolean
      color?: ThemeColors
    }

    const CustomIcon: FC<CustomIconProps> = ({ active = false, completed = false, color = 'primary', ...props }) => (
      <Icon color={active ? 'white' : completed ? color : 'grey2'} {...props}>
        <OtherArticle />
      </Icon>
    )

    const withIconProps = {
      ...props,
      icon: <CustomIcon />,
    }
    const tree = renderWithTheme(<Step {...withIconProps} />)
    expect(tree).toMatchSnapshot()
  })

  it('should render with custom connector', () => {
    const CustomConnectorLine = styled.span<StepConnectorLineProps>`
      border-color: ${({ theme, color = 'primary', active, completed, elementPosition = 'default' }) =>
        completed || active || elementPosition === 'first' ? theme.color[color] : theme.color.black};
      border-style: solid;
      border-top-width: ${({ borderWidth }) => borderWidth};
      border-bottom-width: ${({ borderWidth }) => borderWidth};
      border-radius: 4px;
      display: block;
      position: 'relative';
      z-index: 'auto';
    `

    const CustomConnector: FC<StepConnectorProps> = (props) => (
      <StepConnectorRoot {...props}>
        <CustomConnectorLine {...props} borderWidth={props.variant === 'simple' ? '2px' : '4px'} />
      </StepConnectorRoot>
    )

    const withIconProps = {
      ...props,
      connector: <CustomConnector />,
    }
    const tree = renderWithTheme(<Step {...withIconProps} />)
    expect(tree).toMatchSnapshot()
  })

  it('should call onClick function', () => {
    const onClick = jest.fn()
    const three = mountWithTheme(<Step {...props} onClick={onClick} />)
    three.childAt(0).simulate('click')
    expect(onClick.mock.calls.length).toEqual(1)
  })
})
