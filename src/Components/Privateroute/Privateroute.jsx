import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user, loading}= useContext(AuthContext)

    const location = useLocation()

    if(loading){
        return <progress className="progress w-56"></progress>
    }



    if(user){
        return children;
    }

    
    return <Navigate to='/signIn' state={{from: location}} replace></Navigate>
};

export default Privateroute;