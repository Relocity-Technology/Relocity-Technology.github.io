import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function FeatureCard(props) {
    return (
        <Box sx={{ padding: '8px', display: "flex", justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>

            <div style={{ display: "block", }}>
                <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                    <img src={props.icon} height="170px" />
                </div>
                <div style={{ display: "block" }}>
                    <Typography color={'rgba(255, 107, 79, 1)'} fontWeight={600} fontSize={22}>
                        {props.title}
                    </Typography>
                    <Typography color={'#6C5652'} fontWeight={600} fontSize={18}>
                        {props.desc}
                    </Typography>
                </div>
            </div>

        </Box>
    )
}

export default FeatureCard
