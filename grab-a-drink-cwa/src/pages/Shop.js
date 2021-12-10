import { Add } from "@material-ui/icons";
import { Grid, Card, CardHeader, CardMedia, CardContent, IconButton, Typography } from "@mui/material";
import ImageDescriptions from "../assets/gad-cwa/descriptions";
import absinthe from '../assets/gad-cwa/absinthe.png'
import bacardi from '../assets/gad-cwa/bacardi.png'
import barpink from '../assets/gad-cwa/bar pink.png'
import BlankBottle from '../assets/gad-cwa/blank bottle.png'
import chivasregal from '../assets/gad-cwa/chivas regal.png'

const images = [absinthe, bacardi, barpink, chivasregal, BlankBottle];

const Shop = () => {
    const imageDescriptions = ImageDescriptions();

    return (
        <Grid container>
            {images.map((image, index) => (
                <Grid item container lg={2}>
                    <Card variant="outlined">
                        <CardHeader 
                        action={
                            <IconButton>
                                <Add />
                            </IconButton>
                        } />
                        <CardMedia 
                        component="img" 
                        height="400"
                        image={image} />
                        <CardContent>
                            <Typography gutterBottom>{imageDescriptions[Object.keys(imageDescriptions)[index]]}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Shop;