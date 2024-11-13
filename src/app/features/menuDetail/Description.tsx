import fetchMenuItem from '@/app/lib/api/fetchMenuItem'
import { Box, Skeleton } from '@mui/material'
import Image from 'next/image'
import Grid from '@mui/material/Grid2';
import React from 'react'

type DescriptionProps = {
  menuTitle: string
  menuImage: string
  // price: number
}

const Description: React.FC<DescriptionProps> = async ({ menuTitle, menuImage }) => {

  return (
    <Box
    >
      <Grid container spacing={1}>
        <Grid size={4}>
          <img
            src={menuImage}
            alt='test'
            width={100}
            height={100}
          />
          {/* <Image
            src={menuImage}
            alt='test'
            width={100}
            height={100}
          /> */}
          {/* <Skeleton height={100} /> */}
        </Grid>
        <Grid size={8}>
          {menuTitle}
        </Grid>
      </Grid>
      <div>Item 1</div>
    </Box>
  )
}

export default Description
