import React from 'react';
import {useForm} from "react-hook-form";

import css from './HeightChanges.module.css';
import {UseAppContext} from "../../hooks";


const HeightChanges = () => {
    const {register, handleSubmit, reset} = useForm();
    const {setHeight} = UseAppContext();

    const heightChange = (data) => {
        const current = data.heightChangeC + 'rem';
        setHeight(current);
        reset();
    }


    return (
        <div className={css.wrap}>
            <p>Height change:</p>
            <form onSubmit={handleSubmit(heightChange)}>
                <input type="text" placeholder={'height in rem'} {...register('heightChangeC')}/>
                <button>ok</button>
            </form>
        </div>
    );
};

export {HeightChanges};