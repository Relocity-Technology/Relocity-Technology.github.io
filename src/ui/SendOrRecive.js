import React from 'react'
import i2 from '../assets/i2.svg'
import { Box, Typography } from '@mui/material'


function SendOrRecive() {
  return (
    <Box
      style={{ padding: '8%',overflow: "hidden", position: 'relative' }}
      sx={{
        height: '600px',
        width: '100%',
      }}>
      <Typography display={'inline'} paddingRight='10px' variant='h2' fontWeight={800} color={'#FF6B4F'}>
        Send or Receive 
      </Typography>
      <Typography display={'inline'} variant='h2' fontWeight={800} color={'#352927'}>
        items from
      </Typography>
      <Typography variant='h2' fontWeight={800} color={'#352927'}>
        anywhere in your city
      </Typography>
      <Box
        sx={{
          display: 'fixed',
          position: 'absolute',
          right: '0px',
          bottom: '-15px',
        }}>
        <img src={i2} />
      </Box>

    </Box>
  )
}

export default SendOrRecive
