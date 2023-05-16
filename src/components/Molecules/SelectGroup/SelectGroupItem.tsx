import * as React from 'react'
import { Card } from '@/components/Atoms/Card'
import { Padding } from '@/types/theme'
import { SelectGroupItemProps, SelectionHandlerAction } from './SelectGroup.interface'
import { SelectGroupItemContainer } from './SelectGroup.styled'

const cardPadding: Padding = {
  top: 'lg',
  bottom: 'lg',
  left: 'md',
  right: 'md',
}

export const SelectGroupItem: React.FC<SelectGroupItemProps> = ({
  content,
  disabled = false,
  elevation = 0,
  elevationHover = 0,
  showDivider = false,
  id,
  margin,
  noBorder,
  onClick,
  padding,
  shape,
  surface,
  dividerWidth,
  textColor,
  ...otherProps
}) => {
  const isSelected = surface === 'selected'
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (disabled) {
      return
    }
    const action: SelectionHandlerAction = isSelected ? 'remove' : 'add'
    onClick(id, action, e)
  }
  return (
    <SelectGroupItemContainer
      disabled={disabled}
      surface={surface}
      margin={margin}
      showDivider={showDivider}
      onClick={handleOnClick}
      {...otherProps}
    >
      <Card
        padding={padding || cardPadding}
        elevation={elevation}
        elevationHover={elevationHover}
        noBorder={noBorder}
        showDivider={showDivider}
        dividerWidth={dividerWidth}
        key={id}
        shape={shape}
        surface={surface}
        textColor={textColor}
      >
        {content}
      </Card>
    </SelectGroupItemContainer>
  )
}
