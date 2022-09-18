import {  Routes,Route, } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";


import StartPage from './pages/Start/StartPage';
import Questions from './pages/Questions/Questions';
import EndPage from "./pages/End/EndPage";

import './App.css';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box textAlign={"center" } mt={5}>
          <Routes>
            <Route path="/" element={
             <>
              <Typography variant='h2' fontWeight="bold">Quiz App</Typography>
              <StartPage />
             </> 

            } />
            <Route path="questions" element={<Questions />} />
            <Route path="end" element={<EndPage />} />
          </Routes>
        </Box>
      </Container>
    </div>
  );
}

export default App;
