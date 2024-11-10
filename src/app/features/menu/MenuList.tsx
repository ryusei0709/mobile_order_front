import Box from '@mui/material/Box';
import MenuBasicCard from '@/app/components/card/MenuBasicCard';

import { Stack } from '@mui/material';
import { useState } from 'react';
const MenuList: React.FC = () => {

  const TestMenus = [
    { id: 1, title: 'メニュー1', price: 600, image: '/img/test.jpg' },
    { id: 2, title: 'メニュー2', price: 700, image: '/img/test.jpg' },
    { id: 3, title: 'メニュー3', price: 800, image: '/img/test.jpg' },
    { id: 4, title: 'メニュー4', price: 900, image: '/img/test.jpg' },
    { id: 5, title: 'メニュー5', price: 1000, image: '/img/test.jpg' }
  ]

  return (
    <Box sx={{ maxWidth: '480px' , minWidth: '320px' }}>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {TestMenus.map(menu => (
          <MenuBasicCard
            key={menu.id}
            id={menu.id}
            menuTitle={menu.title}
            menuImage={menu.image}
            price={menu.price}
          />
        ))}
      </Stack>

    </Box>
  )
}

export default MenuList
