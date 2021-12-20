import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Greetings = () => {
    return (
        <Grid container className="greetings-container">
            <Grid item className="greetings" xs={12} sm={10} md={9} lg={5}>
                <Grid item><Typography variant="h5">SpeccUp offers a variety of workout plans that are best fitted to your body. Workout plans may vary in intensity and we suggest 3 categories: Light, Moderate, and Intense. Your information will be essential in generating the perfect workout plan.</Typography></Grid>
                <Grid item className="demo-button">
                    <Link to='/speccup-demo'><Button variant="contained">Try Demo</Button></Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Greetings;