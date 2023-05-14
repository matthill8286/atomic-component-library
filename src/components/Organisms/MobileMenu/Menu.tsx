import React from 'react'
import { StyledMenu, StyledList, StyledActionLink } from './MobileMenu.styled'

export const Menu: React.FC<any> = ({
  data,
  submenuShow,
  setSubmenuShow,
  selectedIndex,
  setSelectedIndex,
  children,
}: any) => {
  const onPress = (idx) => {
    const submenu = data[idx]?.submenu

    if (submenu) {
      setSubmenuShow(!submenuShow)
      if (selectedIndex !== idx) {
        setSelectedIndex(idx)
      }
    }
  }

  if (!data) {
    return null
  }

  return (
    <StyledMenu submenuShow={submenuShow}>
      {data.map((item, idx) => {
        return (
          <StyledList color={item.color} key={`MobileListItem-${item.id}`}>
            <StyledActionLink
              id={item.id}
              href={item.href}
              to={item.to}
              onClick={() => onPress(idx)}
              isSubItem={item?.isSubItem}
            >
              {item.label}
            </StyledActionLink>
          </StyledList>
        )
      })}
      {children}
    </StyledMenu>
  )
}

export default Menu
