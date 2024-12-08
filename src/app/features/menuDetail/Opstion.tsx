import { Box, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';

import MenuOptionButtonGroup from '@/app/components/button/MenuOptionButtonGroup';

const Opstion = () => {
  return (
    <Box
      sx={{ backgroundColor: '#fff', borderBottom: 'solid rgba(0,0,0,.2) 1px' }}
    >
      <FormGroup sx={{ display: 'block' }}>
        <FormControlLabel
          control={<MenuOptionButtonGroup />}
          label='ホット/アイス'
          labelPlacement='start'
        />
      </FormGroup>
      <FormGroup sx={{ display: 'block' }}>
        <FormControlLabel
          control={<MenuOptionButtonGroup />}
          label='サイズ'
          labelPlacement='start'
        />
      </FormGroup>
    </Box>
  );
};

export default Opstion;
