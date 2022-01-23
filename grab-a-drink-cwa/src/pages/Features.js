import '../styles/Hero.css';
import { Grid, Typography } from '@mui/material';
import Coronavirus from '@mui/icons-material/Coronavirus';
import BusinessIcon from '@mui/icons-material/Business';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Features = () => {
    return (
        <Grid id='about'>
                <Grid item container justifyContent='center' alignItems='center'>
                    <Grid item sm={12} md={4} lg={3} className='centerIcons'>
                        <Coronavirus className='enlarge'/>
                    </Grid>
                    <Grid item sm={12} md={5} lg={4}>
                        <Typography variant='h5'><strong>In a pandemic-laden year</strong>, we have seen people go out to the streets to get some drinks – risking infection to have a bit of fun. Even when a liquor ban wasimplemented in our city, people broke the law and purchased spirits from the black market.</Typography>
                    </Grid>
                </Grid>
                <Grid item container justifyContent='center' alignItems='center' className='reverse'>
                    <Grid item sm={12} md={5} lg={4}>
                        <Typography variant='h5'>With the COVID-19 outbreak causing obsolescence to nightclubs and resto-bars, Grab a Drink offers a leeway for consumers to get their drinks without violating social distancing. <strong>As an enterprise dedicated to selling liquor using a digital platform</strong>, this means that every adult could satisfy its carnal need of drinking under his home – a safe space for every individual. Grab a Drink also helps out the club industry, as we get our drinks from local bars.</Typography>    
                    </Grid>
                    <Grid item sm={12} md={4} lg={3} className='centerIcons'>
                        <BusinessIcon className='enlarge'/>
                    </Grid>
                </Grid>
                <Grid item container justifyContent='center' alignItems='center'>
                    <Grid item sm={12} md={4} lg={3} className='centerIcons'>
                        <RocketLaunchIcon className='enlarge'/>
                    </Grid>
                    <Grid item sm={12} md={5} lg={4}>
                        <Typography variant='h5'>Along with the emergence of e-commerce in our country, the liquor industry should also digitize the liquor market. <strong>Grab a Drink is a trailblazer as it is the first application that offers this kind of service in our country</strong>. We believe that more bars would see the potential of Grab a Drink and follow our footsteps which would allow the liquor industry to go digital.</Typography>
                    </Grid>
                </Grid>
            </Grid>
    );
}

export default Features;