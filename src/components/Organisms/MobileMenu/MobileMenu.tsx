import React, { useState } from 'react'
import Menu from './Menu'

export const MobileMenu: React.FC = ({ data }: any) => {
  const [submenuShow, setSubmenuShow] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const [menu] = useState(data)

  return (
    <Menu
      data={menu}
      submenuShow={submenuShow}
      setSubmenuShow={setSubmenuShow}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
    />
  )
}

export default MobileMenu
