import * as React from 'react'
import { styled } from '@/styles/styled'
import { Collapse } from '@/components/Atoms/Collapse/Collapse'
import { CopyText } from '@/components/Atoms/Typography'
import { Label } from '@/components/Atoms/Label/Label'

const StyledActionText = styled(CopyText)`
  margin: 0;
  text-decoration: underline;
  cursor: pointer;
`

export interface ReadMoreLabelProps {
  isOpen?: boolean
  collapsedHeight?: number
  htmlFor: string
  showMoreLabel: string
  showLessLabel: string
  onClick?: () => void
  onChange?: (collapsed: boolean) => void
}

export const ReadMoreLabel: React.FC<ReadMoreLabelProps> = ({
  children,
  htmlFor,
  isOpen = false,
  collapsedHeight = 0,
  showMoreLabel,
  showLessLabel,
  onClick = () => undefined,
  onChange = () => undefined,
}) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(!isOpen)

  const previousIsOpen = React.useRef<boolean>(isOpen)
  React.useEffect(() => {
    if (isOpen !== previousIsOpen.current && isOpen !== collapsed) {
      setCollapsed(!isOpen)
    }
    previousIsOpen.current = isOpen
  }, [isOpen, collapsed])

  const toggleCollapsed = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault()
    event.stopPropagation()
    setCollapsed(!collapsed)
    onChange(!collapsed)
  }

  const handleClick = () => {
    onClick()
  }

  return (
    <div>
      <Collapse isOpen={!collapsed} isControlled collapsedHeight={collapsedHeight} onClick={handleClick}>
        <Label htmlFor={htmlFor}>{children}</Label>
      </Collapse>
      <StyledActionText onClick={toggleCollapsed}>{collapsed ? showMoreLabel : showLessLabel}</StyledActionText>
    </div>
  )
}
