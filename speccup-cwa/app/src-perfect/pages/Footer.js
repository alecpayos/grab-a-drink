import '../styles/Footer.css'
import { Grid, Typography } from "@material-ui/core"
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <Grid container className='footer'>
            <Grid item container className='footer-banner' sm={4} md={3} lg={2}>
                    <Grid item sm={12} md={12} lg={12}><Typography variant="h5">SpeccUp © 2021</Typography></Grid>
                    <Grid item sm={2} md={2} lg={2}><FacebookIcon className='icon-links' /></Grid>
                    <Grid item sm={2} md={2} lg={2}><InstagramIcon className='icon-links' /></Grid>
                    <Grid item sm={2} md={2} lg={2}><TwitterIcon className='icon-links' /></Grid>
            </Grid>
            <Grid item container className='footer-links' sm={8} md={9} lg={7}>
                <Grid item><Link to='/'>Home</Link></Grid>
                <Grid item><Link to='/about'>About Us</Link></Grid>
                <Grid item><Link to='/contact'>Contact Us</Link></Grid>
                <Grid item><Link to='/disclaimer'>Disclaimer</Link></Grid>
                <Grid item><Link to='/terms'>Terms of Use</Link></Grid>
                <Grid item><Link to='/privacy'>Privacy Policy</Link> </Grid>
            </Grid>
        </Grid>
    );
}
 
export default Footer;