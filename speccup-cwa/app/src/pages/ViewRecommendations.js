import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const ViewRecommendations = () => {
    const  [ workoutPlan, setWorkoutPlan ] = useState({});
    
    useEffect(() => {
        fetch('/stream', {
            method: 'GET',
        })
        .then(res => res.text())
        .then(convertedData => {
            setWorkoutPlan(JSON.parse(convertedData));
        })
        .catch(err => console.log("fail", err));

        const hero = document.querySelector('.hero')
        const heroImage = document.querySelector('.hero-image')
        hero.style.height = "calc(8in + 40px)"
        heroImage.style.height = "calc(8in + 40px)"

        return () => {
            hero.style.height = "calc(100vh - 1in - 64px)"
            heroImage.style.height = "calc(100vh - 1in - 64px)"
        }
    }, []);

    return (
        <Grid container className="view-results">            
            <Grid item container lg={8}>
                <Grid item xs={12} sm={10} md={9} lg={7}><Typography variant="h4">Your Body Mass Index is:</Typography></Grid>
                <Grid item xs={12} sm={10} md={9} lg={7}><Typography variant="h3">{workoutPlan.bmi}</Typography></Grid>
                <Grid item xs={12} sm={10} md={9} lg={7}><Typography variant="h4">with a classification of</Typography></Grid>
                <Grid item xs={12} sm={10} md={9} lg={7}><Typography variant="h3">{workoutPlan.classification}</Typography></Grid>
            </Grid>
            <Grid item xs={12} sm={8} md={7} lg={8} className="results-message"><Typography variant="h4">SpeccUp recommends the following workout plans for the next 6 months</Typography></Grid>
            <Grid item container lg={12} className="plans-container">
                <Grid item container sm={7} md={7} lg={3} className="card">
                    <Grid item xs={12} sm={9} md={9} lg={12}><Typography variant="h4">Light</Typography></Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}><Typography variant="h5">{workoutPlan.lightWorkout}</Typography></Grid>
                </Grid>
                <Grid item container sm={7} md={7} lg={3} className="card">
                    <Grid item sm={9} md={9} lg={12}><Typography variant="h4">Moderate</Typography></Grid>
                    <Grid item sm={12} md={12} lg={12}><Typography variant="h5">{workoutPlan.moderateWorkout}</Typography></Grid>
                </Grid>
                <Grid item container sm={7} md={7} lg={3} className="card">
                    <Grid item sm={9} md={9} lg={12}><Typography variant="h4">Intense</Typography></Grid>
                    <Grid item sm={12} md={12} lg={12}><Typography variant="h5">{workoutPlan.intenseWorkout}</Typography></Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ViewRecommendations;
