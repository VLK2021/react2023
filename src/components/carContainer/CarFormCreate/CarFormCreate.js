import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../../services";
import {carActions} from "../../../redux/slices/carSlice";
import {useDispatch} from "react-redux";

const CarFormCreate = (props) => {
    const {register, handleSubmit} = useForm();
    const {visible, setVisible} = props;
    const dispatch = useDispatch();

    const create = async (data) => {
       await carService.create(data);
        await dispatch(carActions.getAll());

        setVisible(!visible);
    }


    return (
        <div>
            <form onSubmit={handleSubmit(create)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>create car</button>
            </form>
        </div>
    );
};

export {CarFormCreate};