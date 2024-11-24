import {useContext} from 'react';

import {Context} from "../hoc";


const UseAppContext = () => {
    const [state, setState] = useContext(Context);


    return {
        currentBackground: state.currentBackground,
        setBackground: (value) => setState(prev => ({...prev, currentBackground: value})),

        currentBorderColor: state.currentBorderColor,
        setBorder: (value) => setState(prev => ({...prev, currentBorderColor: value})),

        currentWidth: state.currentWidth,
        setWidth: (value) => setState(prev => ({...prev, currentWidth: value})),

        currentHeight: state.currentHeight,
        setHeight: (value) => setState(prev => ({...prev, currentHeight: value})),
    }
};

export {
    UseAppContext
};