import React from 'react';
import clsx from "clsx";

import css from './BorderChanges.module.css';


const BorderChanges = (props) => {
    const {setChangeBorder} = props;

    const changeBorderColor = (currentColorBackground) => {
        switch (currentColorBackground) {
            case 'red':
                setChangeBorder('red');
                break;
            case 'blue':
                setChangeBorder('blue');
                break;
            case 'green':
                setChangeBorder('green');
                break;
            case 'pink':
                setChangeBorder('pink');
                break;
            case 'yellow':
                setChangeBorder('yellow');
                break;
            case 'orange':
                setChangeBorder('orange');
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