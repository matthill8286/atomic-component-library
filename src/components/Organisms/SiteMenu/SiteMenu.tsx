import React from 'react'
import { Card } from '@/components/Atoms/Card'
import { Grid } from '@/components/Helper/Grid'
import { TabBar } from '@/components/Molecules/TabBar'
import { Tab } from '@/components/Molecules/TabBar/TabBar.interface'
import { StyledCard } from '@/components/Atoms/Card/Card.styled'
import { styled, css } from '@/styles/styled'
import { Elevation, ThemeColors } from '@/types/theme'
import { smoothScrollWithSelector } from '@/utils'

export interface SiteMenuItemProps {
  itemId: string
  title: string
  surfaceColor?: ThemeColors
}

const StyledGrid = styled(Grid)`
  display: flex;

  > :first-child {
    flex-grow: 1;
    overflow: hidden;
  }
`

const StyledSiteMenuCard = styled(Card)<{
  enableSemanticTheme: boolean
  surfaceColor: ThemeColors
}>`
  position: sticky;
  top: 0;
  z-index: 2;

  ${StyledCard} {
    ${({ enableSemanticTheme, theme, surfaceColor }) =>
      enableSemanticTheme &&
      css`
        background-color: ${theme.color[surfaceColor]};
        color: ${theme.color.textColor};
      `}
  }
`

export interface SiteMenuProps {
  enableSemanticTheme?: boolean
  surfaceColor?: ThemeColors
  isFixed?: boolean
  menuItems?: SiteMenuItemProps[]
  noBorder?: boolean
  elevation?: Elevation
  activeItemId?: string
  scrollOffset?: number
  changeDelay?: number
  onTracking?: (e: string) => void
  onChange?: (id: string, title: string) => void
}

export const SiteMenu: React.FC<SiteMenuProps> = React.memo(
  ({
    isFixed,
    menuItems,
    activeItemId,
    scrollOffset = 0,
    onTracking,
    onChange,
    changeDelay,
    enableSemanticTheme = false,
    children,
    surfaceColor = 'surfaceColor',
  }) => {
    if (!menuItems || !menuItems.length) {
      return null
    }

    const tabs: Tab[] = menuItems.map((item) => ({
      label: item.title,
      id: `tab-${item.itemId}`,
      data: { anchor: item.itemId },
    }))

    const handleChange = (id, data) => {
      smoothScrollWithSelector(`#${data?.anchor}`, scrollOffset)

      const item = menuItems.find((i) => i.itemId === data.anchor)

      if (onTracking) {
        onTracking(item?.title || '')
      }

      if (onChange) {
        onChange(item?.itemId || '', item?.title || '')
      }
    }

    return menuItems && menuItems.length > 0 ? (
      <StyledSiteMenuCard
        elevation={2}
        shape="sharp"
        enableSemanticTheme={enableSemanticTheme}
        surfaceColor={surfaceColor}
      >
        <StyledGrid>
          <TabBar
            isFixed={isFixed}
            tabs={tabs}
            tabGroupName=""
            noBorder
            elevation={0}
            onChange={handleChange}
            selected={activeItemId ? `tab-${activeItemId}` : undefined}
            changeDelay={changeDelay}
            enableSemanticTheme={enableSemanticTheme}
            surfaceColor={surfaceColor}
          />
          {children}
        </StyledGrid>
      </StyledSiteMenuCard>
    ) : null
  },
)
