import { Corners, Shape, Surface } from '@/components/Atoms/Card/Card.interface'
import { Position } from '@/types/theme'
import {
  SelectedOption,
  SelectGroupId,
  SelectionDirection,
  SelectionPosition,
  SelectionState,
  SelectItem,
} from './SelectGroup.interface'

export const mapStateToSurface = (state: SelectionState): Surface => {
  if (state === 'selected') return 'selected'

  return 'white'
}

export const getItemState = (
  itemId: SelectGroupId,
  selectedItemId: SelectedOption,
  disabled: boolean,
): SelectionState => {
  if (disabled) {
    return 'disabled'
  }
  if (selectedItemId == null) {
    return 'default'
  }
  return itemId === selectedItemId ? 'selected' : 'unselected'
}

export const getItemPosition = (position: number, totalItems: number): SelectionPosition => {
  if (position === 1) {
    return 'first'
  }
  if (position === totalItems) {
    return 'last'
  }
  return 'middle'
}

const roundedShape: Shape = 'rounded-small'
export const defaultShape: Corners<Shape> = {
  bottomLeft: roundedShape,
  bottomRight: roundedShape,
  topLeft: roundedShape,
  topRight: roundedShape,
}

const sharpShape: Shape = 'sharp'
const middle: Corners<Shape> = {
  bottomLeft: sharpShape,
  bottomRight: sharpShape,
  topLeft: sharpShape,
  topRight: sharpShape,
}

export const getItemShape = (direction: SelectionDirection, position: SelectionPosition): Corners<Shape> => {
  if (position === 'middle') return middle

  const shapes = {
    column: {
      first: {
        ...defaultShape,
        bottomLeft: sharpShape,
        bottomRight: sharpShape,
      },
      last: {
        ...defaultShape,
        topLeft: sharpShape,
        topRight: sharpShape,
      },
    },
    row: {
      first: {
        ...defaultShape,
        bottomRight: sharpShape,
        topRight: sharpShape,
      },
      last: {
        ...defaultShape,
        topLeft: sharpShape,
        topRight: sharpShape,
      },
    },
  }

  return shapes[direction][position]
}

export const getItemBorder = (
  direction: SelectionDirection,
  position: SelectionPosition,
  itemIndex: number,
  selectedIndex: number | null,
): Position | Position[] => {
  const isRow = direction === 'row'
  let adjacent: Position | null = null
  if (selectedIndex !== null) {
    if (itemIndex === selectedIndex) {
      return []
    }
    if (itemIndex === selectedIndex - 1) {
      adjacent = isRow ? 'right' : 'bottom'
    } else if (itemIndex === selectedIndex + 1 && position !== 'first') {
      adjacent = isRow ? 'left' : 'top'
    }
  }

  if (position === 'first') {
    return [...(adjacent != null ? [adjacent] : [])]
  }
  const pos: Position = isRow ? 'left' : 'top'
  return [pos, ...(adjacent != null && adjacent !== pos ? [adjacent] : [])]
}

export const getItemIndex = (selection: SelectedOption, items: SelectItem[]): number | null => {
  if (selection == null) {
    return null
  }
  if (typeof selection === 'string') {
    return items.findIndex((item) => item.id === selection)
  }
  return null
}
