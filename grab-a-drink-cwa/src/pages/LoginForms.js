import '../styles/CreateAccount.css'
import { Divider, Grid, TextField, Typography } from "@mui/material";
import { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { PasswordField, DateField } from '../components/components';

const ForgotPasswordForm = () => {
    return (
        <Grid></Grid>
    )
}

const RegistrationForm = () => {

    const [ values, setValues ] = useState({
        dateValue: new Date(),
        showPassword: false,
        handleBirthdate: (newDateValue) => setValues({ ...values, dateValue: newDateValue}),
        togglePasswordVisibility: () => setValues({ ...values, showPassword: true }),
        preventDefault: (e) => e.preventDefault()
    })

    return (
        <Grid item container lg={3} className="registration-form">
            <form onSubmit={values.preventDefault}>
                <Grid container className='message-banner'>
                    <Grid item lg={12}><Typography className='banner1' variant="h3">Sign Up</Typography></Grid>
                    <Grid item lg={12}><Typography className='banner2' variant="body1">It's quick and easy</Typography></Grid>
                </Grid>
                <Divider />
                <Grid container spacing={1} className='input-fields'>
                    <Grid item lg={6}><TextField label="First name" required /></Grid>
                    <Grid item lg={6}><TextField label="Last name" required /></Grid>
                    <Grid item lg={12}><TextField label="Mobile number" required fullWidth /></Grid>
                    <Grid item lg={12}><TextField label="Email address" required fullWidth /></Grid>
                    <Grid item lg={12}>
                        <DateField 
                        value={values.dateValue} 
                        valueHandler={values.handleBirthdate} 
                        />
                    </Grid>
                    <Grid item lg={6}><TextField type="number" label="Age" required fullWidth /></Grid>
                    <Grid item lg={6}><TextField label="Gender" fullWidth /></Grid>
                    <Grid item lg={12}>
                        <PasswordField 
                        variant="outlined" 
                        startIcon={<LockIcon />}  
                        />
                    </Grid>
                    <Grid item lg={12}>
                        <PasswordField 
                        variant="outlined" 
                        startIcon={<LockIcon />}  
                        />
                    </Grid>
                    <Grid item><button className='submit'>Sign me up</button></Grid>
                </Grid>
            </form>
        </Grid>
    )
}

export { RegistrationForm };