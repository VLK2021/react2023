import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";


const MaineLayout = () => {
    return (
        <div>
            <Header/>

            <Outlet/>
        </div>
    );
};

export {MaineLayout};