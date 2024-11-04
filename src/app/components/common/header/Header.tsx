import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';



const Header: React.FC = () => {
  return (
    <header>
      <Box>
        <AppBar position="static" color="default">
          <Toolbar sx={{ display: 'block' }}>
            <Box sx={{ textAlign: 'center' }}>
              <h1>商品を選択</h1>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  )
}

export default Header

