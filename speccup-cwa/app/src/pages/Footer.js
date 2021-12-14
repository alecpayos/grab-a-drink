import { Grid, Typography } from "@mui/material"

const Footer = () => {
    return (
<<<<<<< HEAD
        <Grid container className='footer'>
            <Grid item container className='footer-banner' sm={4} md={3} lg={2}>
                    <Grid item xs={6} sm={12} md={12} lg={12}><Typography variant="h5">SpeccUp © 2021</Typography></Grid>
                    <Grid item xs={1} sm={2} md={2} lg={2}><FacebookIcon className='icon-links' /></Grid>
                    <Grid item xs={1} sm={2} md={2} lg={2}><InstagramIcon className='icon-links' /></Grid>
                    <Grid item xs={1} sm={2} md={2} lg={2}><TwitterIcon className='icon-links' /></Grid>
            </Grid>
            <Grid item container className='footer-links' sm={8} md={9} lg={7}>
                <Grid item><Link to='/'>Home</Link></Grid>
                <Grid item><Link to='/about'>About Us</Link></Grid>
                <Grid item><Link to='/contact'>Contact Us</Link></Grid>
                <Grid item><Link to='/disclaimer'>Disclaimer</Link></Grid>
                <Grid item><Link to='/terms'>Terms of Use</Link></Grid>
                <Grid item><Link to='/privacy'>Privacy Policy</Link> </Grid>
            </Grid>
=======
        <Grid container className="footer">
            <Grid item><Typography>SpeccUp © 2021</Typography></Grid>
>>>>>>> ac747842d64eac208e14c690101f80456b13fa48
        </Grid>
    )
}

export default Footer;