import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
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
        <MenuBasicCard />
        <MenuBasicCard />
        <MenuBasicCard />
        <MenuBasicCard />
      </Stack>

    </Box>
  )
}

export default MenuList
