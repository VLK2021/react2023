import React from 'react';
import clsx from "clsx";

import css from './BorderChanges.module.css';
import {UseAppContext} from "../../hooks";


const BorderChanges = () => {
const {setBorder} = UseAppContext();

    const changeBorderColor = (currentColorBackground) => {
        switch (currentColorBackground) {
            case 'red':
                setBorder('red');
                break;
            case 'blue':
                setBorder('blue');
                break;
            case 'green':
                setBorder('green');
                break;
            case 'pink':
                setBorder('pink');
                break;
            case 'yellow':
                setBorder('yellow');
                break;
            case 'orange':
                setBorder('orange');
                break;
        }
    }

    const changeBorderFunction = (e) => {
        const currentColorBorder = e.target.textContent;
        changeBorderColor(currentColorBorder)
    };

    return (
        <div className={css.wrap}>
            <p>change border</p>
            <button className={clsx(`red`)} onClick={changeBorderFunction}>red</button>
            <button className={clsx(`blue`)} onClick={changeBorderFunction}>blue</button>
            <button className={clsx(`green`)} onClick={changeBorderFunction}>green</button>
            <button className={clsx(`pink`)} onClick={changeBorderFunction}>pink</button>
            <button className={clsx(`yellow`)} onClick={changeBorderFunction}>yellow</button>
            <button className={clsx(`orange`)} onClick={changeBorderFunction}>orange</button>
        </div>
    );
};

export {BorderChanges};