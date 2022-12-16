import React from 'react'
import {Box, Typography} from '@mui/material'

function Sectors() {
  return (
    <Box
      style={{ overflowX: "hidden" }}
      sx={{
        height: '500px',
        width: '100%',
        background: "linear-gradient(121.77deg, #F95738 16.55%, #FB8D28 79.06%);",
      }}>
        <Typography paddingTop={'60px'} textAlign={'center'} variant='h5' fontWeight={600} color={'white'} lineHeight={'108.3%'}>
        We are going to help a wide range of businesses to  reach their customer’s doorstep
        </Typography>
      </Box>
  )
}

export default Sectors
