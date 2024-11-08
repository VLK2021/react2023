import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import css from './Header.module.css';
import {useAppContext} from "../../hooks";
import {authService} from "../../services";


const Header = () => {
const {isAuth, me, time, setMe, setIsAuth, setTime} = useAppContext();

    const navigate = useNavigate();

    const logout = () => {
        authService.deleteToken()
        setMe(null)
        setIsAuth(null)
        setTime(null)
        navigate('/login')
    }

    return (
        <div className={css.Header}>
            <h2>Cars</h2>

            {
                isAuth ?
                    <div>
                        <span>{time}</span>
                        {me?.username}
                        <button onClick={logout}>LogOut</button>
                    </div>
                    :
                    <div>
                        <NavLink to={'login'}>Login</NavLink>
                        <NavLink to={'register'}>Register</NavLink>
                    </div>

            }

        </div>
    );
};

export {Header};