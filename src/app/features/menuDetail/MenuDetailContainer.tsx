import React from 'react'
import Description from '@/app/features/menuDetail/Description'
import Opstion from '@/app/features/menuDetail/Opstion'
import fetchMenuItem from '@/app/lib/api/fetchMenuItem';

type MenuDetailContainerPorps = {
  menuId: string
}

const MenuDetailContainer: React.FC<MenuDetailContainerPorps> = async ({ menuId }) => {
  const menuItem = await fetchMenuItem(menuId);
  console.log('menuItem',menuItem)
  return (
    <>
      <Description
        menuTitle={menuItem.title}
        menuImage={menuItem.url}
      />
      <Opstion />
    </>
  )
}

export default MenuDetailContainer
