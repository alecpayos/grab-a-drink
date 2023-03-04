import { Grid } from "@material-ui/core"
import { Link } from "react-router-dom";
import '../styles/Hero.css'

export default function Footer () {
    return (
        <Grid container className='footer'>
            <Grid item xs={4} sm={2} md={1} lg={1}><Link to='/'>About Us</Link></Grid>
            <Grid item xs={4} sm={2} md={1} lg={1}><Link to='/contact'>Contact Us</Link></Grid>
            <Grid item xs={4} sm={2} md={1} lg={1}><Link to='/delivery-info'>Delivery Info</Link></Grid>
            <Grid item xs={4} sm={2} md={1} lg={1}><Link to='/terms'>Terms of Use</Link></Grid>
            <Grid item xs={4} sm={2} md={1} lg={1}><Link to='/privacy-policy'>Privacy Policy</Link></Grid>
        </Grid>
    );
};
