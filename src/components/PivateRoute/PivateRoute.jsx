/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";



const PivateRoute = ({children}) => {
    
    const {user,loading} =useAuth();

    console.log("loading  : ",loading);

    //need to wait here
    if(loading){
        return <h1 className="text-5xl">Loading</h1>
    }


    // user cheek
    if(!user?.email){
        return <Navigate to='/login'></Navigate>
    }


    return children
};

export default PivateRoute;