import { Stack } from '@mui/material';
import Box from '@mui/material/Box';

import MenuBasicCard from '@/app/components/card/MenuBasicCard';
import fetchMenu from '@/app/lib/api/fetchMenu';
const MenuList: React.FC = async () => {
  const menuItems = await fetchMenu();

  console.log(menuItems);

  return (
    <Box sx={{ maxWidth: '480px', minWidth: '320px', mx: 'auto' }}>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction='row'
        sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {menuItems.map((menu) => (
          <MenuBasicCard
            key={menu.id}
            id={menu.id}
            menuTitle={menu.title}
            menuImage={menu.url}
            price={1200}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default MenuList;
