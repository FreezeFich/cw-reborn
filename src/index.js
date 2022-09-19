import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import  StartPage  from "./pages/Start/StartPage"
import  Questions  from "./pages/Questions/Questions"
import  EndPage  from "./pages/End/EndPage"
import { Container } from "@mui/material";
import { Box } from "@mui/system";


const router = createBrowserRouter([
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


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);

// import ReactDOM from "react-dom/client";
// import { HashRouter } from "react-router-dom";
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./store/store";

// const root = ReactDOM.createRoot(
//   document.getElementById("root")
// );
// root.render(
//   <HashRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </HashRouter>
// );
// Старый Синтаксис react-router-dom