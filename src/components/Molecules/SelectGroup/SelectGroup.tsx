import React, { useEffect, useState } from 'react'
import { Corners, Shape } from '@/components/Atoms/Card/Card.interface'
import { FlexBox } from '@/components/Helper/FlexBox'
import { isAlternateTheme } from '@/utils/helper'
import {
  SelectedOption,
  SelectGroupId,
  SelectGroupProps,
  SelectionHandlerAction,
  SelectItem,
} from './SelectGroup.interface'
import { SelectGroupItem } from './SelectGroupItem'
import {
  defaultShape,
  getItemBorder,
  getItemIndex,
  getItemPosition,
  getItemShape,
  getItemState,
  mapStateToSurface,
} from './utils'

// TODO: update the SelectGroup to have a checkbox behaviour
export const SelectGroup: React.FC<SelectGroupProps> = ({
  direction = 'column',
  elevation = 0,
  elevationHover = 0,
  group,
  onChange,
  padding,
  selected,
  selectedElevation = 0,
  showDivider = isAlternateTheme(),
  dividerWidth,
  textColor,
  ...otherProps
}) => {
  const [selection, changeSelection] = useState<SelectedOption>(selected)

  useEffect(() => {
    if (selected !== selection) {
      changeSelection(selected)
    }
  }, [group, selected])

  const addItem = (id: SelectGroupId): void => {
    changeSelection(id)
  }

  const handleOnClick = (id: SelectGroupId, action: SelectionHandlerAction, event: React.MouseEvent) => {
    if (action === 'add') {
      addItem(id)
    }
    // TODO: for the checkbox behavior a removeItem is required
    onChange(id, event)
  }

  const hasMoreThanOne = group.length > 1

  return (
    <FlexBox flexDirection={direction} {...otherProps}>
      {group.map(({ content, disabled = false, id }: SelectItem, index: number) => {
        const state = getItemState(id, selection, disabled)
        const hasSelectedElevation = state === 'selected' && selectedElevation
        const position = getItemPosition(index + 1, group.length)
        const selectedIndex = getItemIndex(selection, group)
        const noBorder = hasMoreThanOne ? getItemBorder(direction, position, index, selectedIndex) : []
        const shape: Corners<Shape> = hasMoreThanOne ? getItemShape(direction, position) : defaultShape
        const surface = mapStateToSurface(state)
        const itemElevation = hasSelectedElevation ? selectedElevation : elevation
        const itemElevationHover = hasSelectedElevation ? undefined : elevationHover

        return (
          <SelectGroupItem
            elevation={itemElevation}
            elevationHover={itemElevationHover}
            content={content}
            disabled={disabled}
            id={id}
            key={id}
            noBorder={noBorder}
            onClick={handleOnClick}
            padding={padding}
            shape={shape}
            surface={surface}
            textColor={textColor}
            showDivider={showDivider}
            dividerWidth={dividerWidth}
          />
        )
      })}
    </FlexBox>
  )
}
