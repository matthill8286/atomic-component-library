import React, { FunctionComponent } from 'react'
import { styled, css, media } from '@/styles'
import { Breakpoints } from '@/types'

interface MediaHideProps {
  from?: keyof Breakpoints
  until?: keyof Breakpoints
}

const Wrapped = styled.div<MediaHideProps>`
  ${({ until }) =>
    until
      ? css`
          ${media[`max${until.slice(0, 1).toUpperCase()}${until.slice(1)}`]} {
            display: none !important;
          }
        `
      : ''}
  ${({ from }) =>
    from
      ? css`
          ${media[from]} {
            display: none !important;
          }
        `
      : ''}
`

export const MediaHide: FunctionComponent<MediaHideProps> = ({ from, until, children }) => (
  <>
    {React.Children.map(children, (child, idx) => {
      if (React.isValidElement(child) && typeof child.type !== 'string') {
        return <Wrapped key={idx} until={until} from={from} as={child.type} {...child.props} />
      }
      return (
        <Wrapped key={idx} until={until} from={from}>
          {child}
        </Wrapped>
      )
    })}
  </>
)
