import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';


const MenuBasicCard = () => {
  return (
    <Card sx={{ maxWidth: 275, backgroundColor: 'unset', boxShadow: 'unset' }}>
      <CardContent>
        <CardMedia
          component="img"
          image="/img/test.jpg"
          alt="Paella dish"
        />
        <Typography>
          testtesttesttetetetete
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MenuBasicCard

