import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';


type MenuBasicCardProps = {
  menuTitle : string
}

const MenuBasicCard: React.FC<MenuBasicCardProps> = ({ menuTitle }) => {
  return (
    <Card sx={{ maxWidth: 275, backgroundColor: 'unset', boxShadow: 'unset' }}>
      <CardContent>
        <CardMedia
          component="img"
          image="/img/test.jpg"
          alt="Paella dish"
        />
        <Typography>
          {menuTitle}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MenuBasicCard

