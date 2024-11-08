import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {authService} from "../../services";
import {useAppContext} from "../../hooks";


const LoginForm = () => {
    const [serverError, setServerError] = useState(null)
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const {setIsAuth, setMe, setTime} = useAppContext();


    const login = async (user) => {
        try {
            await authService.login(user);
            const {data} = await authService.me();
            setMe(data)
            setTime(new Date().getDate())
            setServerError(null)
            navigate('/cars')
            setIsAuth(true)
        } catch (e) {
            setServerError(e.response.data)
        }
    }
    return (
        <form onSubmit={handleSubmit(login)}>
            {serverError && <div>Username or password is incorrect</div>}
            <div>username: <input type="text" {...register('username')}/></div>
            <div>password: <input type="text" {...register('password')}/></div>
            <button>Login</button>
        </form>
    );
};

export {LoginForm};