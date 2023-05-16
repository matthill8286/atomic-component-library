export interface ToolTipProps {
  anchor?: React.ReactNode | string
  content?: React.ReactNode | string
  primary?: boolean
  limitLines?: number
  children?: React.ReactNode
}

export interface StyledToolTipProps {
  primary: boolean
}

export interface StyledToolTipContentProps {
  primary: boolean
}
