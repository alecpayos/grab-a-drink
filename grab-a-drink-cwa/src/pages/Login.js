import { Grid, Button, Box } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import logo from '../assets/gad-cwa/logo.png';
import { RegistrationForm } from "./LoginForms";
import { ModalComponent, PasswordField, UsernameField } from "../components/components";
import LockIcon from '@mui/icons-material/Lock';

const useStyles = makeStyles({
    "@keyframes hover": {
        to: {
            backgroundColor: '#E53535',
            color: 'white'
        }
    },
    containerStyles: {
        minHeight: '6in',
        height: 'calc(100vh - 2in)',
        justifyContent: 'center',
        alignContent: 'center'
    },
    formStyles: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputSettings: {
        marginBottom: '16px'
    },
    buttonSettings: {
        marginTop: '64px',
        border: '1px solid #E53535',
        borderRadius: '32px',
        padding: '12px 48px',
        alignSelf: 'center',
        backgroundColor: 'transparent',
        color: '#111',
        font: "200 18px 'Arial', sans-serif",
        '&:hover': {
            animation: '$hover 0.1s linear forwards'
        }
    },
    logo: {
        width: '64px',
        alignSelf: 'center',
        paddingBottom: '64px'
    },
    modal: {
        minHeight: '8in',
        display: 'flex',
        justifyContent: 'center',
    }
});

const Login = () => {

    const [ open, setOpen ] = useState(false)
    const toggleOpen = () => setOpen(!open)

    const classes = useStyles();

    return (
        <Grid container className={classes.containerStyles}>
            <Box component="form" className={classes.formStyles}>
                
                <img 
                className={classes.logo} 
                src={logo} 
                alt="gad-logo" 
                />

                <UsernameField />

                <PasswordField 
                variant="standard" 
                startIcon={<LockIcon />} 
                />
                
                <button
                className={classes.buttonSettings}>
                    Log In
                </button>

                <Box
                className="login-buttons">
                    <Button 
                    onClick={toggleOpen}>
                        Forgot password?
                    </Button>
                
                    <Button 
                    onClick={toggleOpen}>
                        Don't have an account yet?
                    </Button>
                    
                    <ModalComponent 
                    open={open}
                    close={toggleOpen}
                    renderContent={<RegistrationForm />} 
                    className={classes.modal} 
                    />
                </Box>
            </Box>
        </Grid>
    );
};

export default Login;