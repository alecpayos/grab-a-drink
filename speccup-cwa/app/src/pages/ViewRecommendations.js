import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const ViewRecommendations = () => {
    const  [ workoutPlan, setWorkoutPlan ] = useState({})

    useEffect(() => {
        fetch('/stream', {
            method: 'GET',
        })
        .then(res => res.text())
        .then(convertedData => setWorkoutPlan(convertedData))
        .catch(err => console.log("fail", err))
    }, [])

    return (
        <Grid container className="view-results">
            <Grid item xs={12} sm={10} md={9} lg={7}><Typography variant="h4">Your Body Mass Index is:</Typography></Grid>
            <Grid item xs={12} sm={10} md={9} lg={7}><Typography variant="h2">{workoutPlan.bmi}</Typography></Grid>
            <Grid item xs={12} sm={10} md={9} lg={7}><Typography variant="h4">with a classification of</Typography></Grid>
            <Grid item xs={12} sm={10} md={9} lg={7}><Typography variant="h2">OVERWEIGHT</Typography></Grid>
        </Grid>
    );
}

export default ViewRecommendations;
