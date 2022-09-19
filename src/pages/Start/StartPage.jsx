import { Button, CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SelectField from '../../components/SelectField/SelectField'
import TextFieldComponent from '../../components/TextFieldComponent/TextFieldComponent'
import useAxios from '../../hooks/useAxios'

import "./StartPage.css"


const Start = () => {

  const { response, loading, error } = useAxios({ url: "/api_category.php" })
  const navigate = useNavigate()

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
    {id:"easy",name:"Easy"},
    {id:"medium",name:"Medium"},
    {id:"hard",name:"Hard"}
  ];

  const typeOptions = [
    {id:"multiple",name:"Multiple Choise"},
    {id:"boolean",name:"True Or False"}
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions");
  }

  return (
    <>
      <Typography variant='h2' fontWeight="bold">Quiz App</Typography>
      <form onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label="Category"></SelectField>
        <SelectField options={difficultyOptions} label="Difficulty"></SelectField>
        <SelectField options={typeOptions} label="Type"></SelectField>
      
        <TextFieldComponent />

        <Box mt={4} className="button-box">
          <Button  variant='contained' type='submit'>Start</Button>
        </Box>
    </form>
    </>    
  )
}

export default Start