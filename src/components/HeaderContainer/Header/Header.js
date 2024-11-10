import React from 'react';

import css from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.logo}>logo</div>

            <div className={css.menu}>
                <NavLink to={'/home'}>home</NavLink>
                <NavLink to={'/users'}>users</NavLink>
                <NavLink to={'/posts'}>posts</NavLink>
            </div>

            <div className={css.sigIn}>signIn/logIn</div>
        </div>
    );
};

export {
    Header
};