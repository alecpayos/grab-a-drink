import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Greetings = () => {
    return (
        <Grid container className="greetings-container" lg={12}>
            <Grid item className="greetings" xs={12} sm={12} md={9} lg={6}>
                <Typography variant="h4">
                    SpeccUp offers a variety of workout plans that are best fitted to your body. Workout plans may vary in intensity and we suggest 3 categories: Light, Moderate, and Intense. Your information will be essential in generating the perfect workout plan.
                </Typography>
                <Link className="demo-button" to='/speccup-demo'>
                    <Button variant="contained">
                        <Typography variant="h6">Try Demo</Typography>
                    </Button>
                </Link>
        </Grid>
        </Grid>
    )
}

export default Greetings;