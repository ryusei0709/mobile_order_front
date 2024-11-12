import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Description = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
        }}
      >
        <div>
          <Image
            src='/img/test.jpg'
            alt='test'
            width={75}
            height={75}
          />
        </div>
        <div>Item 1</div>
      </Box>
    </div>
  )
}

export default Description
