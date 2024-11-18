import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './Cars.module.css';
import {Car} from "../Car/Car";
import {carActions} from "../../../redux/slices/carSlice";


const Cars = () => {
    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch])


    return (
        <div>
            <h1>My cars</h1>
            {cars && cars.map(obj => <Car key={obj.id} car={obj}/>)}
        </div>
    );
};

export {Cars};