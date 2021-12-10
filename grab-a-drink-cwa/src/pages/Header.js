import { Grid, Button, TextField, Input, InputAdornment } from "@material-ui/core";
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import '../styles/Hero.css';
import { Search } from "@material-ui/icons";

export default function Header () {
    return (
        <Grid container className="header">
            <Grid item md={2} lg={2}><Link to='/'>Grab A Drink</Link></Grid>
            <Grid item md={2} lg={1}><Link to='/'>Overview</Link></Grid>
            <Grid item md={2} lg={1}><Link to='/membership'>Exclusive Deals</Link></Grid>
            <Grid item md={2} lg={1}><Link to='/shop'>Our Shop</Link></Grid>
            <Grid item lg={3} />
            <Grid item md={2} lg={2}>
                <Input 
                className="search"
                color="secondary"
                placeholder="Search"
                fullWidth />
            </Grid>
            <Grid 
            item 
            md={2} 
            lg={2}
            justifyContent="space-evenly">
                <Button 
                variant="outlined" 
                href="/login"
                endIcon={<LoginIcon />}>Sign In</Button>
                <Button
                variant="outlined"
                endIcon={<ShoppingCartCheckoutIcon />}
                >Cart</Button>
            </Grid>
        </Grid>
    );
};