import { useState } from 'react';
import { 
    InputLabel, 
    Input, 
    InputAdornment, 
    IconButton, 
    Grid, 
    TextField, 
    Modal } from '@mui/material';
import { LocalizationProvider, DesktopDatePicker } from "@mui/lab"
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PostData = ({ body }) => {
    fetch('/stream', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then(responseObj => responseObj.text())
    .then(processedResponse => console.log(processedResponse))
}

const ModalComponent = ({ renderContent, className, open, close }) => {
    return (
        <Modal
        open={open}
        className={className}
        onClose={close}>
            {renderContent}
        </Modal>
    );
};

const DateField = ({ value, valueHandler }) => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker 
        label="Birthdate"
        inputFormat="MM/dd/yyyy"
        value={value}
        onChange={valueHandler}
        renderInput={(params) => <TextField fullWidth required {...params} />}
        />
    </LocalizationProvider>
)

const UsernameField = () => {
    const [ username, setUsername ] = useState({
        value: '',
        handleValue: (e) => setUsername({ ...username, value: e.target.value })
    })

    return (
        <Grid 
        item
        sx={{ pb: 2 }}>
            <InputLabel htmlFor="username"/>
            <Input
            sx={{ '&:after': {color: '#666'}, '&before:': {color: '#666'} }}
            required
            fullWidth
            placeholder="Username"
            onChange={username.handleValue}
            startAdornment={
                <InputAdornment position="start">
                    <PersonIcon />
                </InputAdornment>
            } />
        </Grid>
    )
}

const PasswordField = ({ variant, startIcon }) => {
    const [ password, setPassword ] = useState({
        value: '',
        show: false,
        handleValue: (e) => setPassword({ ...password, value: e.target.value}),
        preventDefault: (e) => e.preventDefault()
    })

    const toggleIcon = () => {
        setPassword({ ...password, show: !password.show })
    }

    return (
        <Grid item>
            <InputLabel htmlFor="password"/>
                <TextField
                required
                fullWidth
                variant={variant}
                placeholder="Password"
                type={password.show ? 'text' : 'password'}
                value={password.value}
                onChange={password.handleValue}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {startIcon}
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="show password"
                            onClick={toggleIcon}
                            onMouseDown={password.preventDefault}
                            edge="start">
                                {password.show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </InputAdornment>
                    )
                }} 
            />
        </Grid>
    )
}

export { DateField, UsernameField, PasswordField, PostData, ModalComponent };