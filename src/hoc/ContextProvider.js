import React, {createContext, useState} from 'react';


const Context = createContext(null);


const ContextProvider = ({children}) => {
    const state = useState(
        {
            currentBackground: 'grey',
            currentBorderColor: 'black',
            currentWidth: '10rem',
            currentHeight: '10rem'
        }
    );


    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};