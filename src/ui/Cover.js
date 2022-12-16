import { Box, Typography } from '@mui/material';
import i1 from '../assets/i1.svg'
import React from 'react'
import { width } from '@mui/system';



function Cover({children}) {
  return (
    <Box
      style={{ overflowX: "hidden" }}
      sx={{
        height: '100vh',
        width: '100%',
        background: "linear-gradient(121.77deg, #F95738 16.55%, #FB8D28 79.06%);",
      }}>
        
        {children}
    
      
      <Box style={{ paddingTop: "25vh" }} sx={{
        textAlign: 'center'
      }}>

        <Typography variant='h3' fontWeight={800}  color={'white'} lineHeight={'108.3%'}>
          Delivery Services that connects
        </Typography>
        <Typography variant='h3' fontWeight={800}  color={'white'} lineHeight={'108.3%'}>
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
            height: '50%',
            display: 'flex',
            position: 'absolute',
            right: '0px',
            bottom: '0px',
          }}>
          <img src={i1} alt="Relocity"/>
      </Box>
    </Box>
  )
}

export default Cover
