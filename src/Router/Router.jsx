import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Components/MainLayout/Main";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>
    },
  ]);

  export default Router;