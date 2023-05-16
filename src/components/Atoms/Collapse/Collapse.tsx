import * as React from 'react'
import { css, styled } from '@/styles/styled'

const StyledCollapse = styled.div<Omit<CollapseProps, 'onClick'>>`
  ${({ theme, isOpen, collapsedHeight }) =>
    isOpen
      ? css`
          height: auto;
          overflow: initial;
        `
      : css`
          height: ${collapsedHeight ? `${collapsedHeight}px` : theme.spacing.base.sm};
          overflow: hidden;
        `}

  position: relative;
  cursor: pointer;

  & > * {
    cursor: pointer;
  }
`

export interface CollapseProps {
  isOpen?: boolean
  isControlled?: boolean
  collapsedHeight?: number
  onClick?: () => void
  onChange?: (collapsed: boolean) => void
}

export const Collapse: React.FC<CollapseProps> = ({
  children,
  isOpen = true,
  isControlled = false,
  collapsedHeight = 0,
  onClick = () => {},
  onChange = () => {},
}) => {
  const [open, setOpen] = React.useState<boolean>(isOpen)

  const previousIsOpen = React.useRef<boolean>(isOpen)
  React.useEffect(() => {
    if (isOpen !== previousIsOpen.current && isOpen !== open) {
      setOpen(isOpen)
    }
    previousIsOpen.current = isOpen
  }, [isOpen, open])

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation()
    event.preventDefault()

    if (!isControlled) {
      setOpen(!open)
    }

    onClick()
    onChange(!open)
  }

  return (
    <StyledCollapse isOpen={open} collapsedHeight={collapsedHeight} onClick={handleClick}>
      {children}
    </StyledCollapse>
  )
}
