import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

function Footer() {
  return (
    <Box
      style={{ overflowX: "hidden" }}
      sx={{
        height: '300px',
        width: '100%',
        color: 'white',
        background: "linear-gradient(121.77deg, #F95738 16.55%, #FB8D28 79.06%);",
      }}>
      <Grid container spacing={6} alignItems="center"
        justifyContent="center">
        <Grid item xs={6} md={6} >
          <Typography variant="h5"
            fontWeight={900}
            letterSpacing={2}
            fontStyle="italic">
            Relocity
          </Typography>
          <Typography>
            A hyperlocal delivery service that offers instant pickup and drop-off services to both businesses and consumers
          </Typography>
        </Grid>
        <Grid item xs={2} md={2}>
          <Typography variant="h5"
            fontWeight={900}
            letterSpacing={2}
            fontStyle="italic">
            Relocity
          </Typography>
        </Grid>
        <Grid item xs={2} md={2}>
          <Typography variant="h5"
            fontWeight={900}
            letterSpacing={2}
            fontStyle="italic">
            Relocity
          </Typography>
        </Grid>
        <Grid item xs={2} md={2}>
          <Typography variant="h5"
            fontWeight={900}
            letterSpacing={2}
            fontStyle="italic">
            Relocity
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
