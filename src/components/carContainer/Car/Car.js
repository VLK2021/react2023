import React from 'react';
import {carService} from "../../../services";
import {carActions} from "../../../redux/slices/carSlice";
import {useDispatch} from "react-redux";


const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    const deleteCar = async () => {
        await carService.deleteById(id);
        await dispatch(carActions.getAll());
    }


    return (
        <div>
            {brand} - {year} - {price}
            <button onClick={deleteCar}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};