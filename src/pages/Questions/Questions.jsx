import { Button, CircularProgress, Typography } from '@mui/material'
import  {Box} from '@mui/system'
import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useAxios from '../../hooks/useAxios'
import { handleScoreChange } from "../../store/actions";
import { decode } from "html-entities";


const getRandomInt = (max) =>{
  return Math.floor(Math.random() * Math.floor(max));
}

const Questions = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score
  } = useSelector((state)=>state);

  let apiURL = `/api.php?amount=${amount_of_question}`;

  if (question_category) {
    apiURL = apiURL.concat(`&category=${question_category}`)
  }
  if (question_difficulty) {
    apiURL = apiURL.concat(`&difficulty=${question_difficulty}`)
  }
  if (question_type) {
    apiURL = apiURL.concat(`&type=${question_type}`)
  }

  const [questionIndex, setQuestionIndex] = useState(0)
  const [options, setOptions] = useState([])
  const { response, loading } = useAxios({url: apiURL});

  console.log(options);


  useEffect(()=> {
    if(response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }

  }, [response,questionIndex]);



  console.log(response);

  if (loading){
    return(
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }


  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/end");
    }
  };


  return (
      <Box>
        <Typography variant='h4' mt={4} >
          Question {questionIndex + 1}
        </Typography>
        <Typography mt={4} >
          {decode(response.results[questionIndex].question)}
        </Typography>
        {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleClickAnswer} variant="contained">
            {decode(data)}
          </Button>
        </Box>
      ))}
      <Box mt={5}>
        Score: {score} / {response.results.length}
      </Box>
      </Box>
  )
}

export default Questions