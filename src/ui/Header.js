import React from 'react'
import { Typography, Grid } from '@mui/material';



function Header() {
  return (



    <Grid style={{ paddingTop: "40px", paddingLeft: "40px", paddingRight: "40px" }} container spacing={2}>
      <Grid xs={6}>
        <Typography  color="white"  fontWeight={700}>
          Relociy
        </Typography>
      </Grid>
      <Grid xs={6} style={{paddingLeft: "100px"}}>
        <Typography display="inline" style={{ paddingRight: "25px" }} color="white"  fontWeight={600}>
          Home
        </Typography>
        <Typography display="inline" style={{ paddingRight: "25px" }} color="white"  fontWeight={600}>
          About us
        </Typography>
        <Typography display="inline" style={{ paddingRight: "25px" }} color="white"  fontWeight={600}>
          How it works?
        </Typography>
        <Typography display="inline" style={{ paddingRight: "25px" }} color="white"  fontWeight={600}>
          For Business
        </Typography>
        <Typography display="inline" style={{ paddingRight: "25px" }} color="white"  fontWeight={600}>
          Get in Touch
        </Typography>
      </Grid>
    </Grid>



  )
}

export default Header
