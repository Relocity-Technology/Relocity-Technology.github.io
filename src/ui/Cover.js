import { Box, Button, Typography } from '@mui/material';
import i1 from '../assets/i1.svg'
import React from 'react'




function Cover({ children }) {
  return (
    <Box
      style={{ overflowX: "hidden" }}
      sx={{
        height: '100vh',
        width: '100%',
        
        background: "linear-gradient(121.77deg, #F95738 16.55%, #FB8D28 79.06%);",
      }}>

      {children}
      {/* bg circular vector */}
      <Box
        sx={{
          height: '50%',
          display: 'flex',
          position: 'absolute',
          right: '0px',
          bottom: '0px',
        }}>
        <img src={i1} alt="Relocity" />
      </Box>

      <Box style={{ paddingTop: "20vh" }} sx={{
        textAlign: 'center'
      }}>

        <Typography fontSize={60} fontWeight={800} color={'white'} lineHeight={'108.3%'}>
          Delivery Services that connects
        </Typography>
        <Typography variant='h2' fontWeight={800} color={'white'} lineHeight={'108.3%'}>
          businesses to their customers
        </Typography>
        <Typography paddingTop={'10px'} letterSpacing={1.5} variant='h5' fontWeight={600} color={'#FEEFE3'} lineHeight={'108.3%'}>
          An on-demand platform that offers delivery services for small
        </Typography>
        <Typography letterSpacing={1.5} variant='h5' fontWeight={600} color={'#FEEFE3'} lineHeight={'108.3%'}>
          businesses, retailers, and brands
        </Typography>
        <Button variant='contained'
          sx={{
            paddingX: '3%',
            borderRadius: '28px',
            backgroundColor: 'white',
            color: 'rgba(255, 94, 64, 1)',
            marginTop: '20px',
            fontWeight:600,
            '&:hover':{backgroundColor:'rgba(255,255,255,0.8)'}
          }}>Contact Us</Button>
      </Box>




    </Box>
  )
}

export default Cover
