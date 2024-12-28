import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import React from 'react';

type DescriptionProps = {
  menuTitle: string;
  menuImage: string;
  // price: number
};

const Description: React.FC<DescriptionProps> = async ({
  menuTitle,
  menuImage,
}) => {
  return (
    <Box
      sx={{ backgroundColor: '#fff', borderBottom: 'solid rgba(0,0,0,.2) 1px' }}
    >
      <Grid container spacing={1}>
        <Grid size={4}>
          <Box sx={{ m: 1 }}>
            <Image
              priority={true}
              src={menuImage}
              alt='画像の説明'
              width={100}
              height={100}
            />
          </Box>
        </Grid>
        <Grid size={8}>
          <Typography>{menuTitle}</Typography>
          <Typography>¥300</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Description;
