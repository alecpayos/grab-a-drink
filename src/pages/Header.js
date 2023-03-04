import { Grid, Button, Input, InputAdornment, FormControl, AppBar, Toolbar, } from "@material-ui/core";
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import '../styles/Hero.css';
import SearchIcon from '@mui/icons-material/Search';
import SideDrawer from "./SideDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/gad-cwa/logo.png';

export default function Header () {
    return (
        <AppBar position="static">
            <Toolbar disableGutters>
                <Grid container className="header"  >
                    <Grid item sm={1} md={1} className="drawer"><SideDrawer  direction='left' drawerImage={<MenuIcon />} /></Grid>
                    <Grid item lg={1}><Link to='/'><img className="logo" src={logo} alt="company logo" /></Link></Grid>
                    <Grid className="header-links" item container xs={1} sm={1} md={1} lg={5}>
                        <Link to='/'><Button>Overview</Button></Link>
                        <Link to='/membership'><Button>Exclusive Deals</Button></Link>
                        <Link to='/shop'><Button>Our Shop</Button></Link>
                    </Grid>
                    <Grid item xs={1} sm={5} md={5} lg={4} className="search-container">
                        <FormControl lg={12} variant="standard" className="search">
                            <Input
                            color="secondary"
                            placeholder="Search"
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            } />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} lg={2} className="account-buttons">
                        <Link to="/login"><Button endIcon={<LoginIcon />}>Sign In</Button></Link>
                        <SideDrawer direction='bottom' drawerText='Cart' drawerImage={<ShoppingCartCheckoutIcon />} />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};