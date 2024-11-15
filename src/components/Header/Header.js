import React from 'react';

import css from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className={css.wrap}>
            <div className={css.logo}>
                logo
            </div>

            <div className={css.menu}>
                <NavLink to={'/home'}>home</NavLink>
                <NavLink to={'/users'}>users</NavLink>
                <NavLink to={'/posts'}>posts</NavLink>
            </div>

            <div className={css.signIn}>
                signIn/signOut
            </div>
        </div>
    );
};

export {Header};