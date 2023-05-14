export type FoldableAcceptedBreakpoints = 512 | 752 | 1008 | 1232 | 1472

export interface FoldableProps {
  isOpen: boolean
  looksOpenInitiallyFromBreakpoint?: FoldableAcceptedBreakpoints
  children: React.ReactNode | React.ReactNode[]
  className?: string
  itemType?: string
  itemProp?: string
  itemScope?: boolean
}

export interface FoldableState {
  height: number | 'auto'
  transition: string
  looksOpenFromBreakpoint?: FoldableAcceptedBreakpoints
}
