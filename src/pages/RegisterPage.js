import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {authService} from "../services";


const RegisterPage = () => {
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const registerUser = async (user) => {
        try {
            await authService.register(user)
            setError(false)
            navigate('/login')
        } catch (e) {
            setError(true)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(registerUser)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Register</button>
                {error&& <div>username already exists</div>}
            </form>
        </div>
    );
};

export {RegisterPage};