import React from 'react'
import { Box, Grid, Slide, Typography } from '@mui/material'
import FeatureCard from './components/FeatureCard'
import { parcel_box_icon,scheduling_icon, secure_icon, support_icon, bulk_icon, profitable_icon } from '../index.js'



function WhyRelocity() {
    return (
        <Box sx={{
            display: "flex", width: '100%', justifyContent: "center",
            alignItems: "center", backgroundColor: '#FFFCEF'
        }}>
            <Box sx={{ width: '80%',}}>
                <Slide in={true} direction="left">
                    <Typography color='#FF5E40' align='center' paddingTop='60px' fontWeight={700} variant='h3'>
                        Why Choose Relocity For Business?
                    </Typography>
                </Slide>
                <Slide in={true} direction="left">

                    <Typography color='rgba(108, 86, 82, 1)' align='center' fontWeight={700} variant='h6'>
                        Our delivery  services are fast , secure , reliable and at affordable price
                    </Typography>
                </Slide>
                <Grid paddingBottom={"80px"} container spacing={6} alignItems="center"
                    justifyContent="center">
                    <Grid item xs={6} md={4}>
                        <FeatureCard
                            icon={parcel_box_icon}
                            title="On-Demand"
                            desc="Instantly place orders and get them delivered anywhere in the city" />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <FeatureCard
                        icon={scheduling_icon}
                            title="Order Scheduling"
                            desc="Schedule your pick-up and drop-off up to 2 days in advance" />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <FeatureCard
                        icon={secure_icon}
                            title="Secured delivery"
                            desc="Assign OTP for each delivery to ensure your orders reach safely" />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <FeatureCard
                        icon={support_icon}
                            title="Customer Support"
                            desc="Live chat & call support for instant assistance with all order-related queries" />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <FeatureCard
                        icon={bulk_icon}
                            title="Bulk Orders"
                            desc="Delivering to multiple customers in the same order with one pick-up" />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <FeatureCard
                        icon={profitable_icon}
                            title="Profitable"
                            desc="Reach more customers and will make your business hassle-free without having to manage our own delivery fleet" />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default WhyRelocity
