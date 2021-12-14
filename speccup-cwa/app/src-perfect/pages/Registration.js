import '../styles/Registration.css'
import { Grid, TextField } from "@mui/material";
import { Typography } from '@material-ui/core';

const placeholders = ["Username", "Email address", "Password", "Confirm password", "First name", "Middle name ( Optional )", "Last name", "Birthdate", "Street", "City", "Zip Code", "Country", "Mobile no.", "Subscription package", "Card type", "0000", "0000", "0000", "0000", "CVC"]

const Registration = () => {
    return (
        <Grid container className="registration-component">
            <Grid item container className="account-info" lg={7}>
                <Grid item lg={12}><Typography variant='h5'>Account Information</Typography></Grid>
                <Grid item lg={2}><TextField variant="outlined" placeholder="Username">test</TextField></Grid>
                <Grid item lg={2}><TextField variant="outlined" placeholder="Email address">test</TextField></Grid>
                <Grid item lg={2}><TextField variant="outlined" placeholder="Password">test</TextField></Grid>
                <Grid item lg={2}><TextField variant="outlined" placeholder="Confirm password">test</TextField></Grid>
            </Grid>
            <Grid item container className="basic-info" lg={7}>
                <Grid item lg={12}><Typography variant='h5'>Basic Information</Typography></Grid>
                <Grid item container lg={6}>
                    <Grid item><TextField variant="outlined" placeholder="First name">test</TextField></Grid>
                    <Grid item><TextField variant="outlined" placeholder="Middle name ( Optional )">test</TextField></Grid>
                    <Grid item><TextField variant="outlined" placeholder="Last name">test</TextField></Grid>
                    <Grid item><TextField variant="outlined" placeholder="Birthdate">test</TextField></Grid>
                </Grid>
                <Grid item container lg={6}>
                    <Grid item><TextField variant="outlined" placeholder="Street">test</TextField></Grid>
                    <Grid item><TextField variant="outlined" placeholder="City">test</TextField></Grid>
                    <Grid item><TextField variant="outlined" placeholder="Zip Code">test</TextField></Grid>
                    <Grid item><TextField variant="outlined" placeholder="Country">test</TextField></Grid>
                    <Grid item><TextField variant="outlined" placeholder="Mobile no.">test</TextField></Grid>
                </Grid>
            </Grid>
            <Grid item container className="subscription-info" lg={7}>
                <Grid item lg={12}><Typography variant='h5'>Subscription Information</Typography></Grid>
                <Grid item><TextField variant="outlined" placeholder="Subscription package">test</TextField></Grid>
                <Grid item><TextField variant="outlined" placeholder="Card type">test</TextField></Grid>
                <Grid item><TextField variant="outlined" placeholder="0000">test</TextField></Grid>
                <Grid item><TextField variant="outlined" placeholder="0000">test</TextField></Grid>
                <Grid item><TextField variant="outlined" placeholder="0000">test</TextField></Grid>
                <Grid item><TextField variant="outlined" placeholder="0000">test</TextField></Grid>
                <Grid item><TextField variant="outlined" placeholder="CVC">test</TextField></Grid>
            </Grid>
        </Grid>
    );
}

export default Registration;