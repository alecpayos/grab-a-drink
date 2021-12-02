import { Grid } from "@material-ui/core"
import { Link } from "react-router-dom";

export default function Footer () {
    return (
        <Grid item container>
            <Grid item lg={1}><Link to='/about-us'>About Us</Link></Grid>
            <Grid item lg={1}><Link to='/contact'>Contact Us</Link></Grid>
            <Grid item lg={1}><Link to='/delivery-info'>Delivery Info</Link></Grid>
            <Grid item lg={1}><Link to='/terms'>Terms of Use</Link></Grid>
            <Grid item lg={1}><Link to='/privacy-policy'>Privacy Policy</Link></Grid>
        </Grid>
    );
};