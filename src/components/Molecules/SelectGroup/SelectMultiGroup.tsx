import React, { FC, useEffect, useState } from 'react'
import { FlexBox } from '@/components/Helper/FlexBox'
import {
  SelectedOption,
  SelectGroupId,
  SelectionHandlerAction,
  SelectItem,
  SelectMultiGroupProps,
} from './SelectGroup.interface'
import { SelectGroupItem } from './SelectGroupItem'

export const SelectMultiGroup: FC<SelectMultiGroupProps> = (props) => {
  const {
    direction = 'row',
    elevation = 0,
    elevationHover = 0,
    group = [],
    selected = [],
    onChange,
    ...otherProps
  } = props

  const [selection, changeSelection] = useState<SelectedOption[]>(selected)

  useEffect(() => {
    if (!selected.find((sel) => selection.includes(sel))) {
      changeSelection(selected)
    }
  }, [group, selected])

  const handleClick = (id: SelectGroupId, action: SelectionHandlerAction, event: React.MouseEvent) => {
    let changed: SelectedOption[] = []
    if (action === 'add') {
      changed = [...selection, id]
    }
    if (action === 'remove') {
      changed = selection.filter((element) => element !== id)
    }
    changeSelection(changed)
    onChange(changed, event)
  }

  const isOptionActive = (item: SelectItem) => {
    return selection.includes(item.id)
  }

  return (
    <FlexBox flexDirection={direction} {...otherProps}>
      {group.map((option: SelectItem) => (
        <SelectGroupItem
          id={option.id}
          key={option.id}
          elevation={elevation}
          elevationHover={elevationHover}
          margin={direction === 'row' ? '0 12px' : '12px 0'}
          content={option.content}
          disabled={option.disabled}
          noBorder={[]}
          onClick={handleClick}
          shape="rounded-small"
          surface={isOptionActive(option) ? 'selected' : 'white'}
        />
      ))}
    </FlexBox>
  )
}
