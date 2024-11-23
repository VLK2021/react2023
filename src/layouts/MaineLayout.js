import React from 'react';
import {Outlet} from "react-router-dom";

const MaineLayout = () => {
    return (
        <div>
            <h1>Changes</h1>

            <Outlet/>
        </div>
    );
};

export {MaineLayout};