import '../styles/Content.css'
import Grid from '@material-ui/core/Grid'
import heroImage from '../assets/feature-images/heroImage.jpg'
import speed from '../assets/feature-images/speed.png'
import squat from '../assets/feature-images/squat.png'
import flex from '../assets/feature-images/flex.png'
import { Typography } from '@material-ui/core'

const FeatureImages = [speed, squat, flex]
const FeatureImageAlts = [
    "marathoner in a running stance",
    "trainer performing squats",
    "training coach \"approves\" pose"
]
const FeatureImageDescriptions = [
    "SpeccUp offers a variety of workout plans that are best fitted to your body. Workout plans may vary in intensity and we suggest 3 categories: Light, Moderate, and Intense. Your information will be essential in generating the perfect workout plan.",
    "Famous artists chose our app in picking out the best exercises for their workout needs. We deliver results like no other through effectiveness and accuracy. Join our routine by signing up as we give out early-bird discounts!",
    "Famous artists chose our app in picking out the best exercises for their workout needs. We deliver results like no other through effectiveness and accuracy. Join our routine by signing up as we give out early-bird discounts!"
]
const FeatureImageClassNames = [
    "feature-image-one",
    "feature-image-two",
    "feature-image-three"
]

const Content = () => {
    return (
        <Grid container>
            <Grid item className="hero" lg={12}>
                <img src={heroImage} alt="man on mountain looking over horizon" />
            </Grid>
            {FeatureImages.map((image, index) => (
            <Grid item container className='feature-block' id="features">
                <Grid item lg={5}><img className={FeatureImageClassNames[index]} src={image} alt={FeatureImageAlts[index]}/></Grid> 
                <Grid item lg={4}>
                    <Typography variant="h5">
                        {FeatureImageDescriptions[index]}
                    </Typography>
                </Grid>
            </Grid>
            ))}
            <Grid item container alignItems='center' justifyContent='center'>
                <Grid container item lg={2}>
                    <Grid item><p class="quote">“Talent wins games, but teamwork and intelligence wins championships.”</p></Grid>
                    <Grid item><p class="quote-name">Michael Jordan</p></Grid>
                </Grid>
                <Grid container item lg={2}>
                    <Grid item><p class="quote">"You must not only have competitiveness but ability, regardless of the circumstance you face, to never quit."</p></Grid>
                    <Grid item><p class="quote-name">Some Asian Guy</p></Grid>
                </Grid>
                <Grid container item lg={2}>
                    <Grid item><p class="quote">"I've used this app in only 4 months... Now I feel... MORE POWERFUL!"</p></Grid>
                    <Grid item><p class="quote-name">Giga Chad</p></Grid>
                </Grid>
                <Grid container item lg={2}>
                    <Grid item><p class="quote">“If something stands between you and your success, move it. Never be denied.”</p></Grid>
                    <Grid item><p class="quote-name">Dwayne Johnson</p></Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
 
export default Content;