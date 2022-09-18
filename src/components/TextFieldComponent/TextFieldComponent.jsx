import { FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const TextFieldComponent = () => {
    
    const handleChange = ( ) => {
        
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