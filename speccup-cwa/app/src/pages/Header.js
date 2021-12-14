<<<<<<< HEAD
import '../styles/Hero.css'
import { Grid, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
=======
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import heroImage from '../assets/heroImage.jpg'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
>>>>>>> ac747842d64eac208e14c690101f80456b13fa48

const Mask = () => {
    return (
        <Grid container className="hero"><img src={heroImage} className="hero-image no-display" alt="man on mountiain staring at horizon" /></Grid>
    )
}

const Header = () => {
    return (
<<<<<<< HEAD
        <Grid container className="header transparent">
            <Grid item xs={7} lg={3}>
                <Link to='/'><Typography variant="h4">SpeccUp</Typography></Link>
            </Grid>
            <Grid item xs={4} className='menu'>
                <MenuIcon />
            </Grid>
            <Grid item lg={6} className="header-buttons">
                <Link onClick={home} to='/'>
                    <Typography variant="h6">Overview</Typography>
                </Link>
                <Link to='/'>
                    <Typography variant="h6" onClick={features}>Features</Typography>
                </Link>
                <Link to='/exclusives'>
                    <Typography variant="h6">Promo Deals</Typography>
                </Link>
                <Link to='/registration'>
                    <Typography variant="h6">Membership</Typography>
                </Link>
            </Grid>
            <Grid item lg={3} className="header-buttons">
                <Link to='/login'>
                    <Typography variant="h6">Log in</Typography>
                </Link>
                <Link to='/registration' className="sign-up">
                    <Typography variant="h6">Sign Up</Typography>
                </Link>
            </Grid>
        </Grid>
    );
=======
        <AppBar>
            <Toolbar>
                <Grid container className="header">
                    <Grid item xs={2} className='menu'><MenuIcon /></Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}><Typography variant="h4">SpeccUp</Typography></Grid>
                    <Grid item sm={4} md={4} lg={4} className="no-display">
                        <Link to='/'>Overview</Link>
                        <Link to='/speccup-demo'>Demo</Link>
                        <Link to='/disclaimer'>Disclaimer</Link>
                    </Grid>
                    <Grid xs={1} className='menu'/>
                    <Grid item xs={5} sm={4} md={4} lg={3}><Typography>Beta v1.0.0</Typography></Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )   
>>>>>>> ac747842d64eac208e14c690101f80456b13fa48
}

export { Mask }
export default Header;