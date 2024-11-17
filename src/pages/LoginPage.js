import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../redux/slices/authSlice";

const LoginPage = () => {
    const {register, handleSubmit} = useForm();
    const {error} = useSelector(state => state.auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = async (user) => {
       const {meta: {requestStatus}} = await dispatch(authActions.login({user}));
       if (requestStatus === 'fulfilled'){
           navigate('/cars')
       }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(login)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="password" placeholder={'password'} {...register('password')}/>
                <button>Login</button>
                {error&&<div>Username or password is incorrect</div>}
            </form>
        </div>
    );
};

export {LoginPage};