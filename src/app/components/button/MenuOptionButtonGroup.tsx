'use client';
import { Box, Button, ButtonGroup } from '@mui/material';
import React, { useState } from 'react';

const MenuOptionButtonGroup = () => {
  const [isActiveIndex, setIsActiveIndex] = useState<number | null>(null);

  return (
    <Box
      sx={{
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup color='success' size='small' aria-label='Small button group'>
        {Array.from({ length: 3 }).map((_, i) => (
          <Button
            key={i}
            onClick={() => setIsActiveIndex(i)}
            sx={{
              backgroundColor: isActiveIndex === i ? '#008248' : 'unset',
              color: isActiveIndex === i ? '#fff' : '',
            }}
          >
            S
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default MenuOptionButtonGroup;
