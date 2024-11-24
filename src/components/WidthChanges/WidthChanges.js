import React from 'react';
import {useForm} from "react-hook-form";

import css from './WidthChanges.module.css';
import {UseAppContext} from "../../hooks";


const WidthChanges = () => {
    const {register, handleSubmit, reset} = useForm();
    const {setWidth} = UseAppContext();

    const widthSubmit = (data) => {
        const current = data.widthCurrent + 'rem';
        setWidth(current);
        reset();
    }


    return (
        <div className={css.wrap}>
            <p>Width change:</p>
            <form onSubmit={handleSubmit(widthSubmit)}>
                <input type="text" placeholder={'width in rem'} {...register('widthCurrent')}/>
                <button>ok</button>
            </form>

        </div>
    );
};

export {WidthChanges};