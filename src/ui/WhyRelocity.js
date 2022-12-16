import React from 'react'
import { Box,Slide, Typography } from '@mui/material'

function WhyRelocity() {
    return (
        <Box sx={{backgroundColor:'#FFFCEF'}}>
        <Slide in={true} direction="left">
            <Typography color='#FF5E40' align='center' paddingTop='40px' fontWeight={700} variant='h4'>
                Why Choose Relocity For Business?
            </Typography>
            </Slide>
            <Slide in={true} direction="left">

            <Typography color='rgba(108, 86, 82, 1)' align='center'  fontWeight={700} variant='h6'>
                Our delivery  services are fast , secure , reliable and at affordable price
            </Typography>
            </Slide>
            
        </Box>
    )
}

export default WhyRelocity
