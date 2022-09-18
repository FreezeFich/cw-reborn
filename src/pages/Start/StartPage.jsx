import { Button, CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SelectField from '../../components/SelectField/SelectField'
import TextFieldComponent from '../../components/TextFieldComponent/TextFieldComponent'
import useAxios from '../../hooks/useAxios'

import "./StartPage.css"


const Start = () => {

  const { response, loading, error } = useAxios({ url: "/api_category.php" })

  if (loading){
    return(
      <Box mt={10}>
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return(
      <Typography variant='h1' fontWeight="bold" color="red">
        Something Went Wrong
      </Typography>
    )
  }

  const difficultyOptions = [
    {
      id:"easy",
      name:"Easy"
    },
    {
      id:"medium",
      name:"Medium"
    },
    {
      id:"hard",
      name:"Hard"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label="Category"></SelectField>
      <SelectField label="Difficulty"></SelectField>
      <SelectField label="Type"></SelectField>
      
      <TextFieldComponent></TextFieldComponent>

      <Box mt={4} className="button-box">
        <Button  variant='contained' type='submit'>Start</Button>
      </Box>
    </form>
  )
}

export default Start