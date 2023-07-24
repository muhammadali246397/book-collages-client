import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Components/MainLayout/Main";
import Home from "../Components/Pages/Home/Home";
import CollegeCard from "../Components/Pages/Home/TopCollege/CollegeCard";
import CollegeDetails from "../Components/Pages/CollegeDetails/CollegeDetails";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import Colleges from "../Components/Pages/Colleges/Colleges";
import Admission from "../Components/Pages/Admission/Admission";
import MyCollege from "../Components/Pages/MyCollege/MyCollege";
import AdmissionForm from "../Components/Pages/Admission/AdmissionForm";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";


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
        element:<PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
        loader:({params}) => fetch(`https://book-college-server.vercel.app/collegeDetails/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/colleges',
        element:<Colleges></Colleges>
      },
      {
        path:'/admission',
        element:<Admission></Admission>
      },
      {
        path:'/mycollege',
        element:<MyCollege></MyCollege>
      },
      {
        path:'/form',
        element:<PrivateRoute><AdmissionForm></AdmissionForm></PrivateRoute>
      }
    ]
    },
  ]);

  export default Router;