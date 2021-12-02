import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core";
import liquorBackground from '../assets/gad-cwa/liquorbackground.png';

const useStyles = makeStyles({
    heroBody: {
        backgroundColor: 'black',
        color: 'white',
    },
    heroBackground: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroBackgroundImage: {
        width: '100%',
        objectFit: 'cover',
    },
    heroMessage: {
        font: "50px 'Lobster', cursive",
    }
})

const Hero = () => {
    const style = useStyles();

    return (
        <Grid container className={style.heroBody}>
            <Grid item container className={style.heroBackground}>
                <Grid  lg={7}><img className={style.heroBackgroundImage} src={liquorBackground} alt="jack daniels liquor background" /></Grid>
                <Grid  lg={3} className={style.heroMessage}><h1>CLICK. DRINK.</h1></Grid>
                <Grid  lg={3}><h4>wherever. whenever.</h4></Grid>
            </Grid>
        </Grid>
    );
}

export default Hero;