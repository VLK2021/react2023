import React from 'react';

import css from './MaineLayout.module.css';
import {Outlet} from "react-router-dom";
import {Header} from "../../components/HeaderContainer/Header";


const MaineLayout = () => {
    return (
        <div className={css.wrap}>
            <Header/>

            <Outlet/>
        </div>
    );
};

export {
    MaineLayout
};