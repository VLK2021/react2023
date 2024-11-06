import React, {createContext} from 'react';


const Context = createContext(null);


const ContextProvider = ({children}) => {
    return (
        <Context.Provider value={'valueContext'}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};