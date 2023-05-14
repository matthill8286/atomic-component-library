import { FoldableAcceptedBreakpoints } from '@/components/Atoms/Foldable/Foldable.interface'
import { BoxDimensions, ThemeColors, ThemeFontSizes, ThemeFontWeights } from '@/types/theme'

export interface AccordionChangeEvent {
  index: number
  eventType: 'HIDE' | 'SHOW'
}

type accordionEntryChangeHandler = (id: string) => void

export interface AccordionProps {
  className?: string
  entries: AccordionEntryObject[]
  isLarge?: boolean
  isUnfoldable?: boolean /* allows multiple entries to be open at the same time */
  isExpandedFrom?:
    | ''
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl' /* is in expanded mode from given size upwards but on smaller sizes looks the same as default */
  openedIndex?: number
  onChange?: (event: AccordionChangeEvent) => void
  customLabelHeading?: LabelHeadingProps
  labelPadding?: BoxDimensions
  entryPadding?: BoxDimensions
  withIconsOnRight?: boolean
  withCustomIcon?: boolean
  customIcon?: JSX.Element | React.ReactNode
}

export interface AccordionRefObject {
  openEntryById: (id: string) => void
}

export interface AccordionEntryObject {
  details: React.ReactNode
  id?: string
  isOpenInitially?: boolean
  noBorderTop?: boolean
  title?: React.ReactNode
}

export interface AccordionEntryProps {
  ref?: React.Ref<HTMLElement>
  details: React.ReactNode
  isLarge?: boolean
  id: string
  isOpen?: boolean
  looksOpenInitiallyFromBreakpoint?: FoldableAcceptedBreakpoints
  onChange: accordionEntryChangeHandler
  title: React.ReactNode
  customLabelHeading?: LabelHeadingProps
  labelPadding?: BoxDimensions
  entryPadding?: BoxDimensions
  noBorderTop?: boolean
  withIconsOnRight?: boolean
  withCustomIcon?: boolean
  customIcon?: JSX.Element | React.ReactNode
}

export interface LabelHeadingProps {
  tag?: string
  size?: ThemeFontSizes
  color?: ThemeColors
  bold?: ThemeFontWeights
  margin?: BoxDimensions
}

export interface OpenCloseAction {
  type: 'open' | 'close'
  id: string
  shouldCloseOthers?: boolean
}

export interface OpenBatchAction {
  type: 'openBatch'
  entries: AccordionEntryObject[]
}

export interface CheckNewEntriesAction {
  type: 'checkNewEntries'
  entries: AccordionEntryObject[]
}

export type ActionType = OpenCloseAction | OpenBatchAction | CheckNewEntriesAction

export interface StyledAccordionEntryProps {
  noBorder: boolean
}

export interface StyledLabelProps {
  isLarge: boolean
  withIconsOnRight: boolean
  padding?: BoxDimensions
  withCustomIcon?: boolean
  customIcon?: JSX.Element | React.ReactNode
}

export interface StyledLabelTextProps {
  withoutIconSpace: boolean
  isLarge: boolean
}

export interface StyledEntryContentProps {
  isLarge: boolean
  padding?: BoxDimensions
}
