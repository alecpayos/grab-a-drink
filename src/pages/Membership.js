import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    member: {
        color: 'black',
    }
});

export default function Membership () {
    const style = useStyles();

    return (
        <Grid container className={style.member}>
            <Grid item lg={2}><h2>TESTING HIHIHI</h2></Grid>
            <Grid item lg={2}><h2>TESTING HIHIHI</h2></Grid>
            <Grid item lg={2}><h2>TESTING HIHIHI</h2></Grid>
        </Grid>
    );
};