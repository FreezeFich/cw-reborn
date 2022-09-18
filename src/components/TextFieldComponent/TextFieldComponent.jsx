import { FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux'
import { handleAmountChange } from '../../store/actions'

const TextFieldComponent = () => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value))
    }

    return (
    <div>
        <Box mt={4}>
            <FormControl>
                <TextField 
                onChange={handleChange}
                variant="outlined"
                label="Amount Of Questions"
                type="number"
                size="small"
                />
            </FormControl>
        </Box>
    </div>
  )
}

export default TextFieldComponent