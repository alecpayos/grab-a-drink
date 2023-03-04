import '../styles/Hero.css';
import { Grid, Typography } from '@material-ui/core'
import liquorBackground from '../assets/gad-cwa/liquorbackground.png';

const Hero = () => {
    return (
        <Grid container className='hero'>
            <Grid item sm={6} md={6} lg={6} className='image-container'>
                <img src={liquorBackground} alt="jack daniels liquor background" />
            </Grid>
            <Grid item container sm={4} md={4} lg={4} className='heromessage'>
                <Grid item>
                    <Typography variant='h1' className='main-greet'>
                        CLICK.
                    </Typography>
                    <Typography variant='h1' className='main-greet'>
                        DRINK.
                    </Typography>
                    <Typography variant='h3' className='support-greet'>
                            wherever. whenever.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Hero;