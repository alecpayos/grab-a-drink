import { Grid, Typography } from "@mui/material";

const Disclaimer = () => {
    return (
        <Grid container className="disclaimer">
            <Grid item xs={10} sm={8} md={5} lg={5}><Typography variant="h6">SpeccUp is currently in its Minimum Viable Product phase. We would like to thank our users for understanding and we apologize for any inconveniences.</Typography></Grid>
            <Grid item xs={10} sm={8} md={5} lg={5}><Typography variant="h6">SpeccUp will not be storing user data in any form of database. We assure our users that SpeccUp will only utilize the provided data for the benefit of the user and store their data in their respective localstorage which can be located only in their browsers</Typography></Grid>
        </Grid>
    )
}

export default Disclaimer;