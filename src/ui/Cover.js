import { Box, Typography } from '@mui/material';
import { style } from '@mui/system';


import React from 'react'
import Header from './Header';

function Cover({ children }) {
  return (
    <Box sx={{
      width: '100%',
      height: 720,
      background: "linear-gradient(121.77deg, #F95738 16.55%, #FB8D28 79.06%);",

    }}>
      <Header />
      <Box style={{paddingTop: "16%"}} sx={{
        textAlign: 'center'
        
      }}
      >
        <div style={{
  
        }}>
          <Typography variant='h4' fontWeight={700} fontStyle={'italic'} color={'white'} lineHeight={'108.3%'}>
            Delivery Services that connects
          </Typography>
          <Typography variant='h4' fontWeight={700} fontStyle={'italic'} color={'white'} lineHeight={'108.3%'}>
            businesses to their customers
          </Typography>
          <Typography variant='h6' fontWeight={600}  color={'#DFCECB'} lineHeight={'108.3%'}>
          An on-demand platform that offers delivery services for 
          </Typography>
          <Typography variant='h6' fontWeight={600}  color={'#DFCECB'} lineHeight={'108.3%'}>
          small businesses, retailers, and brands  
          </Typography>
        </div>

      </Box>
      <>
      </>
    </Box>
  )
}

export default Cover
