import { Grid, Typography } from "@mui/material";

const Disclaimer = () => {
    return (
        <Grid container className="disclaimer-container">
            <Grid item container className="disclaimer" lg={5}>
                <Grid item lg={12}><Typography variant="h5">SpeccUp is currently in ( BETA v1.0.0 ) and most of its features are currently being planned.</Typography></Grid>
                <Grid item lg={12}><Typography variant="h5">We are proud to announce that SpeccUp is in its Minimum Viable Product phase.</Typography></Grid>
                <Grid item lg={12}><Typography variant="h5">Your information will not be permanently stored as it will only be available to us when you use the app.</Typography></Grid>
            </Grid>
        </Grid>
    )
}

export default Disclaimer;