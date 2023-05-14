import React, { FC, Ref, useRef, MouseEvent } from 'react'
import { CopyText } from '@/components/Atoms/Typography'
import { TabItemProps } from './TabBar.interface'
import { StyledTabBarItemContainer } from './TabBar.styled'

export const TabItem: FC<TabItemProps> = (props) => {
  const {
    id,
    label,
    data,
    className,
    tabGroupName,
    enableSemanticTheme = false,
    surfaceColor = 'surfaceColor',
    isDisabled = false,
    isSelected = false,
    onClick,
  } = props
  const ref: Ref<HTMLDivElement> = useRef(null)

  const handleTabClick = (e: MouseEvent) => {
    e.preventDefault()
    if (!isDisabled && onClick) {
      onClick(id, data)
    }
  }

  if (isSelected && ref.current) {
    const rect = ref.current.getBoundingClientRect()
    if (rect.right < 0 || rect.left > window.innerWidth) {
      ref.current.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }

  return (
    <StyledTabBarItemContainer
      onClick={handleTabClick}
      ref={ref}
      className={className}
      surfaceColor={surfaceColor}
      enableSemanticTheme={enableSemanticTheme}
    >
      <input id={id} name={tabGroupName} type="radio" checked={isSelected} disabled={isDisabled} readOnly />
      <CopyText tag="label" htmlFor={id} disabled={isDisabled}>
        {label}
      </CopyText>
    </StyledTabBarItemContainer>
  )
}

TabItem.displayName = 'TabItem'
