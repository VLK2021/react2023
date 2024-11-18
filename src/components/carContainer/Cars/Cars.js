import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './Cars.module.css';
import {Car} from "../Car/Car";
import {carActions} from "../../../redux/slices/carSlice";
import {CarFormCreate} from "../CarFormCreate/CarFormCreate";


const Cars = () => {
    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const [visible,  setVisible] = useState(false);

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch])


    return (
        <div>
            <h1>My cars</h1>
            {
                !visible ? <button onClick={() => setVisible(!visible)}>create auto</button>
                    :
                    <div>
                        <CarFormCreate
                            setVisible={setVisible}
                            visible={visible}
                        />
                    </div>
            }


            {cars && cars.map(obj => <Car key={obj.id} car={obj}/>)}
        </div>
    );
};

export {Cars};