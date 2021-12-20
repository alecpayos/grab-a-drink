import { Grid, Typography } from "@mui/material";

const Disclaimer = () => {
    return (
        <Grid container className="disclaimer">
            <Grid item xs={10} sm={8} md={5} lg={10}><Typography variant="h6">SpeccUp is currently in ( BETA v1.0.0 ) and most of its features are currently being planned. We are proud to announce that SpeccUp is in its Minimum Viable Product phase.</Typography></Grid>
            <Grid item xs={10} sm={8} md={5} lg={10}><Typography variant="h6">SpeccUp will not be storing user data in any form of database. We assure our users that SpeccUp will only utilize the provided data for the benefit of the user and store their data in their respective localstorage which can be located only in their browsers. We would like to thank our users for understanding and we apologize for any inconveniences.</Typography></Grid>
        </Grid>
    )
}

export default Disclaimer;