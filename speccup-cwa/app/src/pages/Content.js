import React, { useEffect, useState } from "react"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { LocalizationProvider, DesktopDatePicker } from "@mui/lab"
import AdapterDateFns from '@mui/lab/AdapterDateFns'

const Content = () => {
    const [ firstName, setFirstName ] = useState(null)
    const [ lastName, setLastName ] = useState(null)
    const [ dateValue,  setDateValue ] = useState(new Date());
    const [ weight, setWeight ] = useState(null)
    const [ height, setHeight ] = useState(null)
    const [ age, setAge ] = useState(null)

    const valueParser = (event) => {
        parseFloat(event.target.value)
    }

    const handleInput = {
        newFirstName: function(e) {
            setFirstName(valueParser(e))
        },
        newLastName: function(e) {
            setLastName(valueParser(e))
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
        submitInputs: function(e) {
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

            if(!(inputs.weight && inputs.height && inputs.age)) {
                alert("Please fill out the Physiological Information form")
            }
            else if(
                parseFloat(inputs.weight) < 2.0 || 
                parseFloat(inputs.weight) > 635.0 ||
                parseFloat(inputs.height) < 54.0 || 
                parseFloat(inputs.height) > 272.0 ||
                parseFloat(inputs.age) > 70
            ) {
                alert("Values out of range. Please input the proper values")
            }
            else {
                window.location.replace('/speccup-workout-recommendations')
            }

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

    useEffect(() => {
        const hero = document.querySelector('.hero')
        const heroImage = document.querySelector('.hero-image')
        hero.style.height = "calc(8in + 40px)"
        heroImage.style.height = "calc(8in + 40px)"

        return () => {
            hero.style.height = "calc(100vh - 1in - 64px)"
            heroImage.style.height = "calc(100vh - 1in - 64px)"
        }
    })
    
    return (
        <Grid container className="content">
            <Grid item container sm={7} md={7} lg={5} xl={3} spacing={2} className="form" component="form">
                <Grid item xs={9} sm={9} md={9} lg={10} className="form-headers"><Typography variant="h5">Personal Information</Typography></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField variant="outlined" inputProps={{ maxLength: 50 }} onChange={handleInput.newFirstName} defaultValue={firstName} InputLabelProps={{ shrink: true }} label="First Name" placeholder="( Optional )"></TextField></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField variant="outlined" inputProps={{ maxLength: 50 }} onChange={handleInput.newLastName} defaultValue={lastName} InputLabelProps={{ shrink: true }} label="Last Name" placeholder="( Optional )"></TextField></Grid>
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
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField variant="outlined" type="number" onChange={handleInput.newWeight} defaultValue={weight} InputLabelProps={{ shrink: true }} label="Weight in kg" placeholder="2.0 - 635.0"></TextField></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField variant="outlined" type="number" onChange={handleInput.newHeight} defaultValue={height} InputLabelProps={{ shrink: true }} label="Height in cm" placeholder="54.0 - 272.0"></TextField></Grid>
                <Grid item xs={9} sm={9} md={9} lg={10}><TextField variant="outlined" type="number" onChange={handleInput.newAge} defaultValue={age} InputLabelProps={{ shrink: true }} label="Age" placeholder="e.g 18"></TextField></Grid>
                <Grid item lg={12} className="button"><Button onClick={handleInput.submitInputs} variant="contained">Generate Workout</Button></Grid>
            </Grid>
        </Grid>
    )
}

export default Content