import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Components/MainLayout/Main";
import Home from "../Components/Pages/Home/Home";
import CollegeCard from "../Components/Pages/Home/TopCollege/CollegeCard";
import CollegeDetails from "../Components/Pages/CollegeDetails/CollegeDetails";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[{
        path:'/',
        element:<Home></Home>
      },
      {
        path:'details/:id',
        element:<CollegeDetails></CollegeDetails>,
        loader:({params}) => fetch(`http://localhost:4000/collegeDetails/${params.id}`)
      }
    ]
    },
  ]);

  export default Router;