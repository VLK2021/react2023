import React from 'react';
import {Navigate} from "react-router-dom";

import {authService} from "../services";


const RequiredAuth = ({children}) => {
    const access = authService.getAccessToken();

    if (!access) {
        return <Navigate to={'/login'}/>
    }

    return children
};

export {RequiredAuth};