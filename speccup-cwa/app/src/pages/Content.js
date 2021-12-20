import React, { useState } from "react"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { LocalizationProvider, DesktopDatePicker } from "@mui/lab"
import AdapterDateFns from '@mui/lab/AdapterDateFns'

const Content = () => {
    const [ firstName, setFirstName ] = useState(null)
    const [ lastName, setLastName ] = useState(null)
    const [ birthdate, setBirthDate ] = useState(new Date())
    const [ weight, setWeight ] = useState(null)
    const [ height, setHeight ] = useState(null)
    const [ age, setAge ] = useState(null)

    const handleInputs = {
        FirstName: function(e) {setFirstName(e.target.value)},
        LastName: function(e) {setLastName(e.target.value)},
        BirthDate: function(newDateValue) {setBirthDate(newDateValue)}, 
        Weight: function(e) {setWeight(e.target.value)},
        Height: function(e) {setHeight(e.target.value)},
        Age: function(e) {setAge(e.target.value)},
        Test: function() {
            let test = {
                userFirstName: firstName,
                userLastName: lastName,
                userBirthDate: birthdate,
                userWeight: weight,
                userHeight: height,
                userAge: age
            }

            fetch('http://localhost:5000/stream', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(test)
            })
            .then(res => res.text())
            .then(data => console.log(data))
            .catch(err => console.log(err))
        }
    }


    return (
        <Grid container className="content">
            <Grid item container sm={7} md={7} lg={5} xl={3} spacing={2} className="form" component="form">
                <Grid item xs={9} sm={9} md={9} lg={10} className="form-headers"><Typography variant="h5">Personal Information</Typography></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField defaultValue={firstName} onChange={handleInputs.FirstName} variant="outlined" InputLabelProps={{ shrink: true }} label="First Name" placeholder="e.g. Alec"></TextField></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField defaultValue={lastName} onChange={handleInputs.LastName} variant="outlined" InputLabelProps={{ shrink: true }} label="Last Name" placeholder="e.g Payos"></TextField></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker 
                        label="Birthdate"
                        inputFormat="MM/dd/yyyy"
                        value={birthdate}
                        onChange={handleInputs.BirthDate}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={9} sm={9} md={9} lg={10} className="form-headers"><Typography variant="h5">Physiological Information</Typography></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField defaultValue={weight} onChange={handleInputs.Weight} variant="outlined" InputLabelProps={{ shrink: true }} label="Weight in kg" placeholder="e.g 50" type="number"></TextField></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField defaultValue={height} onChange={handleInputs.Height} variant="outlined" InputLabelProps={{ shrink: true }} label="Height in cm" placeholder="e.g 171" type="number"></TextField></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField defaultValue={age} onChange={handleInputs.Age} variant="outlined" InputLabelProps={{ shrink: true }} label="Age" placeholder="18" type="number"></TextField></Grid>
                <Grid item lg={12} className="button"><Button variant="contained"onClick={handleInputs.Test}>Generate Workout</Button></Grid>
            </Grid>
        </Grid>
    )
}

export default Content