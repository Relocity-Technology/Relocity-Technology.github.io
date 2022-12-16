import React from 'react'
import i2 from '../assets/i2.svg'
import {Box} from '@mui/material'


function SendOrRecive() {
  return (
    <Box
      style={{ overflowX: "hidden" }}
      sx={{
        height: '600px',
        width: '100%',
      }}>
        <Box sx={{
          right: '0px',
          bottom: '0px',}}>
            <img src={i2}  />
        </Box>
      </Box>
  )
}

export default SendOrRecive
