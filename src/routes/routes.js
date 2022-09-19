import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <Container maxWidth="sm">
        <Box textAlign={"center" } mt={5}>
          <StartPage />
        </Box>
      </Container>,
    },
    {
      path: "/questions",
      element: 
      <Container maxWidth="sm">
        <Box textAlign={"center" } mt={5}>
          <Questions />
        </Box>
      </Container>,
    },
    {
      path: "/end",
      element:
      <Container maxWidth="sm">
        <Box textAlign={"center" } mt={5}>
          <EndPage />
        </Box>
      </Container>,
    },
  ]);
  