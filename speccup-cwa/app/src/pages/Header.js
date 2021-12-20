import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import heroImage from '../assets/heroImage.jpg'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Mask = () => {
    return (
        <Grid container className="hero"><img src={heroImage} className="hero-image no-display" alt="man on mountiain staring at horizon" /></Grid>
    )
}

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <Grid container className="header">
                    <Grid item xs={2} className='menu'><MenuIcon /></Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}><Typography variant="h4"><Link to='/'>SpeccUp</Link></Typography></Grid>
                    <Grid item sm={4} md={4} lg={4} className="no-display">
                        <Link to='/'>Overview</Link>
                        <Link to='/speccup-demo'>Demo</Link>
                        <Link to='/disclaimer'>Disclaimer</Link>
                    </Grid>
                    <Grid item xs={1} className='menu'/>
                    <Grid item xs={5} sm={4} md={4} lg={3}><Typography>Beta v1.0.0</Typography></Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )   
}

export { Mask }
export default Header;