import '../styles/Hero.css';
import { Grid, Typography } from '@material-ui/core'
import liquorBackground from '../assets/gad-cwa/liquorbackground.png';

const Hero = () => {
    return (
        <Grid container>
            <Grid item container>
                <Grid item lg={7}>
                    <img src={liquorBackground} alt="jack daniels liquor background" />
                </Grid>
                <Grid item lg={4} className='heromessage'>
                    <Typography variant='h1' className='main-greet'>
                        CLICK. DRINK.
                        <Typography variant='h3' className='support-greet'>
                            wherever. whenever.
                        </Typography>
                    </Typography>
                </Grid>
                <Grid lg={1} />
            </Grid>
        </Grid>
    );
}

export default Hero;