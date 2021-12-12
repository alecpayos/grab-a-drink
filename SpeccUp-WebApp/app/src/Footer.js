import './styles/Footer.css'
import { Grid, Typography } from "@material-ui/core"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Grid container className="footer">
            <Grid item container lg={2} className='footer-banner'>
                <Typography variant='h5'>
                    SpeccUp © 2021
                </Typography>
            </Grid>
            <Grid item container lg={6}>
                <Grid item lg={1}>
                    <Link to='/'>Home</Link>
                </Grid>
                <Grid item lg={1}>
                    <Link to='/about'>About Us</Link>
                </Grid>
                <Grid item lg={1}>
                    <Link to='/contact'>Contact Us</Link>
                </Grid>
                <Grid item lg={1}>
                    <Link to='/disclaimer'>Disclaimer</Link>
                </Grid>
                <Grid item lg={1}>
                    <Link to='/terms'>Terms of Use</Link>
                </Grid>
                <Grid item lg={1}>
                    <Link to='/privacy-policies'>Privacy Policy</Link>
                </Grid>
            </Grid>
        </Grid>
    );
}
 
export default Footer;