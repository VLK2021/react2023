import {useContext} from 'react';

import {Context} from "../hoc";


const UseAppContext = () => {
    const [state, setState] = useContext(Context);


    return {
        me: state.me,
        time: state.time,

        setMe: (value) => setState(prev => ({...prev, me: value})),
        setTime: (value) => setState(prev => ({...prev, time: value})),
    };
};

export {
    UseAppContext
};