import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';


const Header = () => {


    return (
        <div className={css.Header}>
            <h2>Cars</h2>

            <div>
                <NavLink to={'login'}>Login</NavLink>
                <NavLink to={'register'}>Register</NavLink>
            </div>

        </div>
    );
};

export {Header};