import { Grid } from "@material-ui/core"
import { Link } from "react-router-dom";
import '../styles/Hero.css'

export default function Footer () {
    return (
        <Grid container className='footer'>
            <Grid item lg={1} className='center'><Link to='#about'>About Us</Link></Grid>
            <Grid item lg={1} className='center'><Link to='/contact'>Contact Us</Link></Grid>
            <Grid item lg={1} className='center'><Link to='/delivery-info'>Delivery Info</Link></Grid>
            <Grid item lg={1} className='center'><Link to='/terms'>Terms of Use</Link></Grid>
            <Grid item lg={1} className='center'><Link to='/privacy-policy'>Privacy Policy</Link></Grid>
        </Grid>
    );
};
