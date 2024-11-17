import React from 'react';

import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './Header.module.css';
import {authService} from "../../services";
import {authActions} from "../../redux/slices/authSlice";


const Header = () => {
    const {me} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    if (authService.getAccessToken() && !me) {
        dispatch(authActions.me())
    }


    return (
        <div>
            {
                me ? <div className={css.Header}>{me.username} -- {new Date(me.last_login).toDateString()}</div>
                    :
                    <div className={css.Header}>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </div>
            }
        </div>
    );
};

export {Header};