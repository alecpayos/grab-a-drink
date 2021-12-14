import { LocalizationProvider, DesktopDatePicker } from "@mui/lab"
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { TextField } from "@mui/material"
import { useState } from "react"

const DatePickers = () => {
    const [ dateValue,  setDateValue ] = useState(new Date());
    const handleSetDate = (newDateValue) => {
        setDateValue(newDateValue)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker 
            label="Birthdate"
            inputFormat="MM/dd/yyyy"
            value={dateValue}
            onChange={handleSetDate}
            renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}

export default DatePickers