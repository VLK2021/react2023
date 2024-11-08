import {Context} from "../hoc";
import {useContext} from "react";


const useAppContext = () => {
    const [state, setState] = useContext(Context);


    return {
        isAuth: state.isAuth,
        me: state.me,
        time: state.time,
        setTime: (value) => setState(prev => ({...prev, time: value})),
        setIsAuth: (value) => setState(prev => ({...prev, isAuth: value})),
        setMe: (value) => setState(prev => ({...prev, me: value})),
    }
}

export {
    useAppContext
}