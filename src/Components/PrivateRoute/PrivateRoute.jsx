import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext)
    const navigate = useNavigate()
   if(loading){
    return <h3>Loading</h3>
   }
   if(user){
    return children
   }
   else{
    return <Navigate to='/login' state={{from:location}}></Navigate>
   }
};

export default PrivateRoute;