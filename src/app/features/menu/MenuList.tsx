import Box from '@mui/material/Box';
import MenuBasicCard from '@/app/components/card/MenuBasicCard';

import { Stack } from '@mui/material';
const MenuList: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <MenuBasicCard
          menuTitle='メニュータイトルです'
        />
        <MenuBasicCard
          menuTitle='メニュータイトルです'
        />
      </Stack>

    </Box>
  )
}

export default MenuList
