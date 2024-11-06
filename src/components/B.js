import React from 'react';
import C from "./C";
import {useAppContext} from "../hooks/useAppContext";

const B = () => {
    const value = useAppContext();


    return (
        <div>
            <div>B: {value}</div>
            <C/>
        </div>
    );
};

export default B;