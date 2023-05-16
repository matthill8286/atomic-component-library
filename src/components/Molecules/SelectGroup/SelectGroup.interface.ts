import { MarginProperty } from 'csstype'
import { Corners, Shape, Surface } from '@/components/Atoms/Card/Card.interface'
import { Elevation, Padding, Position, ThemeColors, VerticalPadding, VerticalPaddingMap } from '@/types/theme'

export type SelectionDirection = 'row' | 'column'
export type SelectionState = 'default' | 'unselected' | 'selected' | 'disabled'
export type SelectionHandlerAction = 'add' | 'remove'
export type SelectionPosition = 'first' | 'last' | 'middle'

export type SelectGroupId = string
export type SelectedOption = SelectGroupId | null

export interface SelectItem {
  content: React.ReactNode
  disabled?: boolean
  id: SelectGroupId
}

export interface SelectGroupItemContainerProps {
  disabled: boolean
  surface: Surface
  textColor?: ThemeColors
  margin?: MarginProperty<string>
  showDivider?: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

export interface SelectGroupItemProps extends SelectItem {
  disabled?: boolean
  margin?: MarginProperty<string>
  elevation?: Elevation
  elevationHover?: Elevation
  noBorder: Position | Position[]
  onClick: (id: SelectGroupId, action: SelectionHandlerAction, event: React.MouseEvent) => void
  padding?: VerticalPaddingMap | VerticalPadding | Padding
  shape: Shape | Corners<Shape>
  surface: Surface
  textColor?: ThemeColors
  showDivider?: boolean
  dividerWidth?: string | number
}

export interface SelectGroupProps {
  direction?: SelectionDirection
  elevation?: Elevation
  elevationHover?: Elevation
  group: SelectItem[]
  onChange: (selected: SelectGroupId, event?: React.MouseEvent) => void
  padding?: VerticalPaddingMap | VerticalPadding | Padding
  selected: SelectedOption
  selectedElevation?: Elevation
  textColor?: ThemeColors
  showDivider?: boolean
  dividerWidth?: string | number
}

export interface SelectMultiGroupProps {
  direction?: SelectionDirection
  elevation?: Elevation
  elevationHover?: Elevation
  group: SelectItem[]
  onChange: (selected: SelectedOption[], event: React.MouseEvent) => void
  selected: SelectedOption[]
}
