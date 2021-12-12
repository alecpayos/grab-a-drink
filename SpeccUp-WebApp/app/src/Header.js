import { Grid, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import './styles/Hero.css'

const Header = () => {
    return (
        <Grid container className="header">
            <Grid item lg={3}>
                <Link to='/'>
                    <Typography variant="h4">
                        SpeccUp
                    </Typography>
                </Link>
            </Grid>
            <Grid item lg={6} className="header-buttons">
                <Link to='/'>
                    <Typography variant="h6">
                        Overview
                    </Typography>
                </Link>
                <Typography variant="h6">
                    Features
                </Typography>
                <Link to='/exclusives'>
                    <Typography variant="h6">
                        Promo Deals
                    </Typography>
                </Link>
                <Link to='/registration'>
                    <Typography variant="h6">
                        Membership
                    </Typography>
                </Link>
            </Grid>
            <Grid item lg={3} className="header-buttons">
                <Link to='/login'>
                    <Typography variant="h6">
                        Log in
                    </Typography>
                </Link>
                <Link to='/registration' className="sign-up">
                    <Typography variant="h6">
                        Sign Up
                    </Typography>
                </Link>
            </Grid>
        </Grid>
    );
}
 
export default Header;