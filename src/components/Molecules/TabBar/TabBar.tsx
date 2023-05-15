import React, { FC, Ref, useEffect, useRef, useState } from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { useWindowDimensions } from '@/components/Helper/useWindowDimensions'
import { OtherArrow } from 'atomic-icon-library'
import { TabBarProps, TabData, TabId } from './TabBar.interface'
import { StyledArrowButton, StyledTabBar, StyledTabsContainer, StyledTabBarCard } from './TabBar.styled'
import { TabItem } from './TabItem'

export const TabBar: FC<TabBarProps> = (props) => {
  const {
    onChange,
    selected,
    tabs,
    tabGroupName,
    enableSemanticTheme = false,
    surfaceColor = 'surfaceColor',
    elevation = 0,
    noBorder = false,
    isFixed = false,
    changeDelay = 1000,
    flexDirection,
    ...otherProps
  } = props

  const [tab, setTab] = useState(selected || null)
  const [hasOverflow, setHasOverflow] = useState(false)
  const ref: Ref<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const { width } = useWindowDimensions()

  const handleTabClick = (id: TabId, data?: TabData) => {
    setTab(id)
    if (onChange) {
      onChange(id, data)
    }
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      if (tab !== selected && selected) {
        setTab(selected)
      }
    }, changeDelay)

    return () => {
      clearTimeout(handler)
    }
  }, [selected, changeDelay])

  useEffect(() => {
    if (ref.current) {
      const { offsetWidth, scrollWidth } = ref.current
      const hasWidthOverflow = offsetWidth < scrollWidth

      if (hasOverflow !== hasWidthOverflow) {
        setHasOverflow(hasWidthOverflow)
      }
    }
  }, [tabs, width])

  const handlePrevClick = () => {
    if (ref.current) {
      ref.current.scrollBy({
        behavior: 'smooth',
        left: -200,
      })
    }
  }

  const handleNextClick = () => {
    if (ref.current) {
      ref.current.scrollBy({
        behavior: 'smooth',
        left: 200,
      })
    }
  }

  return (
    <StyledTabBar isFixed={isFixed}>
      <StyledTabBarCard
        elevation={elevation}
        shape="rounded-small"
        noBorder={noBorder ? ['top', 'right', 'bottom', 'left'] : []}
        display="flex"
        surfaceColor={surfaceColor}
        enableSemanticTheme={enableSemanticTheme}
        {...otherProps}
      >
        {hasOverflow && (
          <StyledArrowButton
            actionType="ghost"
            onClick={handlePrevClick}
            surfaceColor={surfaceColor}
            enableSemanticTheme={enableSemanticTheme}
          >
            <Icon height={16} width={16} rotate={180}>
              <OtherArrow />
            </Icon>
          </StyledArrowButton>
        )}
        <StyledTabsContainer flexDirection={flexDirection} ref={ref}>
          {tabs.map(({ id, label, data, isDisabled = false }) => (
            <TabItem
              key={id}
              id={id}
              label={label}
              data={data}
              tabGroupName={tabGroupName}
              isSelected={tab === id}
              isDisabled={isDisabled}
              onClick={handleTabClick}
              enableSemanticTheme={enableSemanticTheme}
              surfaceColor={surfaceColor}
            />
          ))}
        </StyledTabsContainer>
        {hasOverflow && (
          <StyledArrowButton
            actionType="ghost"
            onClick={handleNextClick}
            enableSemanticTheme={enableSemanticTheme}
            surfaceColor={surfaceColor}
          >
            <Icon height={16} width={16}>
              <OtherArrow />
            </Icon>
          </StyledArrowButton>
        )}
      </StyledTabBarCard>
    </StyledTabBar>
  )
}

TabBar.displayName = 'TabBar'
