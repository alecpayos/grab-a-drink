import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    heroHeader: {
        padding: '32px 154px',
        alignItems: 'center',
    },
});

export default function Header () {
    const style = useStyles();

    return (
        <Grid container className={style.heroHeader}>
            <Grid item lg={2}><Link to='/'>LOGO</Link></Grid>
            <Grid item lg={1}><Link to='/'>Home</Link></Grid>
            <Grid item lg={1}><Link to='/membership'>Membership</Link></Grid>
            <Grid item lg={1}><Link to='/shop'>Shop</Link></Grid>
            <Grid item lg={5}><Link to='search'>Searchbar</Link></Grid>
            <Grid item lg={1}><Link to='/login'>Login</Link></Grid>
            <Grid item lg={1}><button>cart</button></Grid>
        </Grid>
    );
};