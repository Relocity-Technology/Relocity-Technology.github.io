import { Box, Typography } from '@mui/material';


import React from 'react'
import Header from './Header';

function Cover({ children }) {
  return (
    <Box 
    
    style={{overflowX: "hidden"}}

    sx={{
      width: '100%',
      height: 720,
      background: "linear-gradient(121.77deg, #F95738 16.55%, #FB8D28 79.06%);",
    }}>
      <Header />
      <Box style={{ paddingTop: "13%" }} sx={{
        textAlign: 'center'
      }}>
        <Typography variant='h3' fontWeight={700} fontStyle={'italic'} color={'white'} lineHeight={'108.3%'}>
          Delivery Services that connects
        </Typography>
        <Typography variant='h3' fontWeight={700} fontStyle={'italic'} color={'white'} lineHeight={'108.3%'}>
          businesses to their customers
        </Typography>
        <Typography paddingTop={'10px'} letterSpacing={1.5} variant='h6' fontWeight={600} color={'#FEEFE3'} lineHeight={'108.3%'}>
        An on-demand platform that offers delivery services for small 
        </Typography>
        <Typography letterSpacing={1.5} variant='h6' fontWeight={600} color={'#FEEFE3'} lineHeight={'108.3%'}>
        businesses, retailers, and brands
        </Typography>
      </Box>
      
      {/* bg circular vector */}
      <Box

      sx={{
        display: 'flex',
        background: 'linear-gradient(90.76deg, rgba(253, 196, 83, 1) -36.18%, rgba(255, 212, 60, 0) 54.74%)',
        borderRadius: '274.5px',
          position: 'absolute',
          right: '-110px',
        width: "550px",
        height: "550px",
        transform: 'matrix(-0.12, 0.99, 0.99, 0.12, 0, 0)'

        
      }}>
          
      </Box>
    </Box>
  )
}

export default Cover
