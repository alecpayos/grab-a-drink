import React, { useState } from "react"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { LocalizationProvider, DesktopDatePicker } from "@mui/lab"
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Link } from "react-router-dom"

const Content = () => {

    const [ firstName, setFirstName ] = useState(null)
    const [ lastName, setLastName ] = useState(null)
    const [ dateValue,  setDateValue ] = useState(new Date());
    const [ weight, setWeight ] = useState(null)
    const [ height, setHeight ] = useState(null)
    const [ age, setAge ] = useState(null)

    const handleInput = {
        newFirstName: function(e) {
            setFirstName(e.target.value)
        },
        newLastName: function(e) {
            setLastName(e.target.value)
        },
        newBirthdate: function(newDateValue) {
            setDateValue(newDateValue)
        },
        newWeight: function(e) {
            setWeight(e.target.value)
            
        },
        newHeight: function(e) {
            setHeight(e.target.value)
        },
        newAge: function(e) {
            setAge(e.target.value)
        },
        submitInputs: function() {
            const inputs = {
                "firstName": firstName, 
                "lastName": lastName, 
                "dateValue": dateValue, 
                "weight": weight, 
                "height": height, 
                "age": age}
            // include validation
            //post to localstorage
            localStorage.setItem('inputs', JSON.stringify(inputs))
            
            fetch('/stream', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
            })
            .catch(err => console.log("Cannot post due to the following error: ", err))
        }
    }
    
    return (
        <Grid container className="content">
            <Grid item container sm={7} md={7} lg={5} xl={3} spacing={2} className="form">
                <Grid item xs={9} sm={9} md={9} lg={10} className="form-headers"><Typography variant="h5">Personal Information</Typography></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField variant="outlined" inputProps={{ maxLength: 50 }} onChange={handleInput.newFirstName} defaultValue={firstName} InputLabelProps={{ shrink: true }} label="First Name" placeholder="e.g. John"></TextField></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField variant="outlined" inputProps={{ maxLength: 50 }} onChange={handleInput.newLastName} defaultValue={lastName} InputLabelProps={{ shrink: true }} label="Last Name" placeholder="e.g Michael"></TextField></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker 
                        label="Birthdate"
                        inputFormat="MM/dd/yyyy"
                        value={dateValue}
                        onChange={handleInput.newBirthdate}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={9} sm={9} md={9} lg={10} className="form-headers"><Typography variant="h5">Physiological Information</Typography></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField variant="outlined" onChange={handleInput.newWeight} defaultValue={weight} InputLabelProps={{ shrink: true }} label="Weight in kg" placeholder="e.g 57"></TextField></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField variant="outlined" onChange={handleInput.newHeight} defaultValue={height} InputLabelProps={{ shrink: true }} label="Height in cm" placeholder="e.g 164"></TextField></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField variant="outlined" onChange={handleInput.newAge} defaultValue={age} InputLabelProps={{ shrink: true }} label="Age" placeholder="e.g 18"></TextField></Grid>
                <Grid item lg={12} className="button"><Link to='/speccup-workout-recommendations'><Button onClick={handleInput.submitInputs} variant="contained">Generate Workout</Button></Link></Grid>
            </Grid>
        </Grid>
    )
}

export default Content