import Description from '@/app/features/menuDetail/Description'
import MenuDetailContainer from '@/app/features/menuDetail/MenuDetailContainer'
import Opstion from '@/app/features/menuDetail/Opstion'
import React from 'react'

const MeunDetailPage = async ({ params }: {
  params: Promise<{ menuId: string }>
}) => {
  const menuId = (await params).menuId

  return (
    <>
      <MenuDetailContainer
        menuId={menuId}
      />
    </>
  )
}

export default MeunDetailPage

