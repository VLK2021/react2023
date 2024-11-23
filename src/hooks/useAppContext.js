import {useContext} from 'react';

import {Context} from "../hoc";

const UseAppContext = () => {
    const [state, setState] = useContext(Context);


    return {
        currentBackground: state.currentBackground,
        setBackground: (value) => setState(prev => ({...prev, currentBackground: value})),
        currentBorderColor: state.currentBorderColor,
        setBorder: (value) => setState(prev => ({...prev, currentBorderColor: value}))
    }
};

export {
    UseAppContext
};