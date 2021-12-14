import React from "react"
import { Button, Grid, TextField, Typography } from "@mui/material"
import DatePickers from "./DatePickers"

const Content = () => {
    return (
        <Grid container className="content">
            <Grid item container sm={7} md={7} lg={5} xl={3} spacing={2} className="form">
                <Grid item xs={9} sm={9} md={9} lg={10} className="form-headers"><Typography variant="h5">Personal Information</Typography></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField variant="outlined" InputLabelProps={{ shrink: true }} label="First Name" placeholder="e.g. Alec"></TextField></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField variant="outlined" InputLabelProps={{ shrink: true }} label="Last Name" placeholder="e.g Payos"></TextField></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><DatePickers /></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10} className="form-headers"><Typography variant="h5">Physiological Information</Typography></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField variant="outlined" InputLabelProps={{ shrink: true }} label="Weight in kg" placeholder="e.g 50" type="number"></TextField></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField variant="outlined" InputLabelProps={{ shrink: true }} label="Height in cm" placeholder="e.g 171" type="number"></TextField></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField variant="outlined" InputLabelProps={{ shrink: true }} label="Age" placeholder="18" type="number"></TextField></Grid>
                <Grid item lg={12} className="button"><Button variant="contained">Generate Workout</Button></Grid>
            </Grid>
        </Grid>
    )
}

export default Content