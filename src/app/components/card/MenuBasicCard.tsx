'use client'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { useRouter } from 'next/navigation';


type MenuBasicCardProps = {
  id: number
  menuTitle: string
  menuImage: string
  price: number
}

const MenuBasicCard: React.FC<MenuBasicCardProps> = ({ id , menuTitle , menuImage , price }) => {
  const router = useRouter();

  return (
    <Card
      sx={{ width: '45%', backgroundColor: 'unset', boxShadow: 'unset' }}
      onClick={() => {
        router.push(`menu/${id}`)
      }}
    >
      <CardContent>
        <CardMedia
          component="img"
          image={menuImage}
          alt={`${menuTitle}の画像`}
        />
        <Typography>
          {menuTitle}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5,  fontSize: '12px' }}>¥{price}</Typography>
      </CardContent>
    </Card>
  )
}

export default MenuBasicCard

